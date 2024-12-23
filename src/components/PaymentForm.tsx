import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { usePayMutation } from '@/services/payment';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Loader from './Loader';
import Congratulation from './Congratulation';

// Remplacez 'your_public_key' par votre clé publique Stripe


const PaymentForm = () => {
    const [pay,{isLoading}]=usePayMutation()
    const [searchParams] =useSearchParams()
    const min=Number(searchParams.get('min'))
    const max=Number(searchParams.get("max"))
    console.log(max)
    const navigate=useNavigate()
    const stripe = useStripe();
    const elements = useElements();
    const [amount, setAmount] = useState(min);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async (event:any) => {
        event.preventDefault();

        if (!stripe || !elements) {
            // Assurez-vous que Stripe.js a été chargé
            return;
        }

        const cardElement = elements.getElement(CardElement);
        const { token, error } = await stripe.createToken(cardElement);

        if (error) {
            setErrorMessage(error?.message);
            setSuccessMessage('');
        } else {
            // Envoyer le token au serveur

            const formData = new FormData()

            formData.append("amount",amount)
            formData.append("stripeToken",token.id)
            const userObject={amount:amount,stripeToken:token.id}
            console.log(token.id)
            const response=await pay(userObject)

            console.log(response)
            if (response.error) {
                setErrorMessage(response?.error);
                setSuccessMessage('');
            } else {
                setSuccessMessage('Paiement réussi !');
                setErrorMessage('');
            }
        }
    };

    return (
       <>
       {!isLoading && !successMessage &&  <div className="w-[30%] max-sm:w-[90%] bg-gray-800 mx-auto px-8 py-12  rounded-lg shadow-md">
            
            <h2 className="text-2xl text-white text-center font-bold mb-4">Formulaire de Paiement</h2>
            <form onSubmit={handleSubmit} className="space-y-4">

                {!isLoading && <div className='mb-4 flex flex-col gap-4'>
                <div>
                    <label className="block mb-2 text-sm font-medium text-white" htmlFor="amount">Montant</label>
                    <input
                        type="number"
                        id="amount"
                        name="amount"
                        value={amount}
                        onChange={(e:any) => setAmount(e.target.value)}
                        placeholder="Montant en euros"
                        min={min}
                        max={max}
                        required
                        className="mt-1 p-4 border text-white bg-gray-700 border-gray-600 rounded-md w-full"
                    />
                </div>
                <div className='text-white'>
                    <label className="block mb-2 text-sm font-medium text-white">Informations de carte</label>
                    <CardElement options={{ style:{base:{color:"#FFF"}},hidePostalCode:true }}  className="mt-1 p-4 border border-gray-300 placeholder:text-white bg-gray-700 text-transparent text-white rounded-md" />
                </div>
                </div>}
                <button
                    type="submit"
                    disabled={!stripe}
                    className={`w-full mt-6 ${isLoading && "bg-blue-400 opacity-35"} bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition duration-200`}
                >
                    {isLoading ? "Veuillez patientez" : "Payer"}
                </button>
                {errorMessage && <div className="text-red-500">{errorMessage}</div>}
                
            </form>
        </div>
        
        }
        {successMessage && <Congratulation/>}
        {isLoading && <Loader/>}
       </>
    );
};

export default PaymentForm;

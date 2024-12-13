import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "./baseQueryWithReauth";



export const PaymentService=createApi({
    baseQuery:baseQueryWithReauth,
    reducerPath:"clientService",
    tagTypes:['Clients'],
    endpoints:builder=>({

        pay:builder.mutation({
            query:(formData:any)=>({
                url:'/api/charge',
                method:"POST",
                body:formData,
                
        })
        }),
    }),
})

export const {
usePayMutation
}=PaymentService
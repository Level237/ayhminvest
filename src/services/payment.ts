import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "./baseQueryWithReauth";



export const PaymentService=createApi({
    baseQuery:baseQueryWithReauth,
    reducerPath:"clientService",
    tagTypes:['Pay'],
    endpoints:builder=>({

        pay:builder.mutation({
            query:(formData:any)=>({
                url:'/api/charge',
                method:"POST",
                body:formData,
                
        }),
        invalidatesTags:['Pay']
        }),
        getPrice:builder.query({
            query:()=>'/api/v1/sum',
            providesTags: ['Pay'],
    })
    }),
})

export const {
usePayMutation,
useGetPriceQuery
}=PaymentService
import { fetchBaseQuery } from "@reduxjs/toolkit/query";

export const baseQuery=fetchBaseQuery({
    baseUrl:"http://127.0.0.1:8000",
    credentials:"same-origin",
    
    prepareHeaders:(headers,{getState})=>{
        headers.set('Access-Control-Allow-Origin', '*')
        headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        
        const token = (getState()).auth.usedToken;
        if(token){
            headers.set('authorization',`Bearer ${token}`)
        }

        return headers;
    }
})
import { fetchBaseQuery } from "@reduxjs/toolkit/query";

export const baseQuery=fetchBaseQuery({
    baseUrl:"https://api-ayhminvest.kensoh-clt.com",
    credentials:"same-origin",
    
    prepareHeaders:(headers,{getState}:{getState:any})=>{
        headers.set('Access-Control-Allow-Origin', '*')
        headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        
        const token = (getState()).auth.usedToken;
        if(token){
            headers.set('authorization',`Bearer ${token}`)
            headers.set('Content-Type', 'application/json');  
        }

        return headers;
    }
})

import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./authSlice";
import { setupListeners } from "@reduxjs/toolkit/query";





export const store=
  configureStore({
    reducer:{
        [authSlice.reducerPath]:authSlice.reducer,

    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
    
    ,
    devTools:true,

})
setupListeners(store.dispatch);
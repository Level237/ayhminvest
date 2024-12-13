
import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./authSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { authService } from "@/services/auth";
import { PaymentService } from "@/services/payment";





export const store=
  configureStore({
    reducer:{
        [authService.reducerPath]:authService.reducer,
        [authSlice.reducerPath]:authSlice.reducer,
        [PaymentService.reducerPath]:PaymentService.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
    .concat(authService.middleware)
    .concat(PaymentService.middleware)
    ,
    devTools:true,

})
setupListeners(store.dispatch);
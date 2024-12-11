
import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./authSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { authService } from "@/services/auth";





export const store=
  configureStore({
    reducer:{
        [authService.reducerPath]:authService.reducer,
        [authSlice.reducerPath]:authSlice.reducer,

    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
    .concat(authService.middleware)
    ,
    devTools:true,

})
setupListeners(store.dispatch);
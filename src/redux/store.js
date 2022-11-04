import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "./reducer";

import { persistStore } from "redux-persist";



export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});


export const persistor = persistStore(store);
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";
import todoReducer from "./features/todoSlice";
import { baseApi } from "./api/api";

export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
        counter: counterReducer,
        todos: todoReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware),
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    // devTools: false
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

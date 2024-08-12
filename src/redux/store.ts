import { configureStore } from "@reduxjs/toolkit";
import logger from "./middleware/logger";
import counterReducer from "./features/counterSlice";
import todoReducer from "./features/todoSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        todos: todoReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    // devTools: false
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

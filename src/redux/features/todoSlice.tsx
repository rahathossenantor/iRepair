import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type TTodo = {
    id: string;
    title: string;
    description: string;
    isCompleted: boolean
};

const todoSlice = createSlice({
    name: "todos",
    initialState: {
        todos: []
    },
    reducers: {
        addTodo: (state, action: PayloadAction<TTodo>) => {
            state.todos.push(action.payload);
        },
        removeTodo: (state, action: PayloadAction<string>) => {
            state.todos = state.todos.filter((todo: TTodo) => todo.id !== action.payload);
        },
        toggleCompleted: (state, action: PayloadAction<string>) => {
            const task: TTodo = state.todos.find((todo: TTodo) => todo.id === action.payload) as TTodo;
            task.isCompleted = !task.isCompleted;
        }
    }
});

export const { addTodo, removeTodo, toggleCompleted } = todoSlice.actions;
export default todoSlice.reducer;

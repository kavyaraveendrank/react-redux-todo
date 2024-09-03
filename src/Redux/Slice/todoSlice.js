import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name:"todo",
    initialState: {
        todos: [
        ],
    },
    reducers:{
        addTodo: (state, action) => {
            state.todos.push(action.payload);
        },
        completeTodo: (state, action) =>{
            const { id, completed } = action.payload;
            return state.todos.forEach((todo) => {
              if (todo.id === id) {
                todo.completed = completed;
              }
            });
        },
        deleteTodo: (state, action) =>{
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.payload.id),
              };
        },
    },
})
export const {addTodo,completeTodo,deleteTodo} = todoSlice.actions;
export const reducer = todoSlice.reducer;
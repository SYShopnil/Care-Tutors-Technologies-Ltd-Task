"use client";
import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export interface TodoItem {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

const getTodosFromLocalStorage = (): TodoItem[] => {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  }
  return [];
};

const initialState: TodoItem[] = getTodosFromLocalStorage();

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = { id: uuidv4(), ...action.payload, completed: false };
      state.push(newTodo);
      localStorage.setItem("todos", JSON.stringify(state));
    },
    deleteTodo: (state, action) => {
      const newState = state.filter((todo) => todo.id !== action.payload);
      localStorage.setItem("todos", JSON.stringify(newState));
      return newState;
    },
    editTodo: (state, action) => {
      const { id, title, description } = action.payload;
      const todo = state.find((todo) => todo.id == id);
      if (todo) {
        todo.title = title;
        todo.description = description;
        localStorage.setItem("todos", JSON.stringify(state));
      }
    },
  },
});
export const { addTodo, deleteTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;

import React, { createContext, useState } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const TodoContext = createContext();

function TodoProvider({ children }) {
  const [openModal, setOpenModal] = useState(false);
  const [searchValue, setSeacrhValue] = useState("");
  const { item, saveItem, loading, error } = useLocalStorage("TODOS_V1", []);
  const completedTodos = item.filter((todo) => !!todo.completed).length;
  const totalTodos = item.length;
  const searchedTodos = item.filter((todo) => {
    return todo.text.toLowerCase().includes(searchValue.toLowerCase());
  });
  const addTodo = (text) => {
    const newTodos = [...item];
    newTodos.push({
      text: text,
      completed: false,
    });

    saveItem(newTodos);
  };
  const completeTodo = (text) => {
    const newTodos = [...item];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveItem(newTodos);
  };
  const deleteTodo = (text) => {
    const newTodos = [...item];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    saveItem(newTodos);
  };
  return (
    <TodoContext.Provider
      value={{
        loading,
        error,
        completeTodo,
        deleteTodo,
        completedTodos,
        totalTodos,
        searchedTodos,
        setSeacrhValue,
        openModal,
        setOpenModal,
        addTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };

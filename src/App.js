import { useState } from "react";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { AppUi } from "./hooks/AppUi";

function App() {
  const [searchValue, setSeacrhValue] = useState("");
  const [todos, saveTodos] = useLocalStorage("TODOS_V1", []);
  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;
  const searchedTodos = todos.filter((todo) => {
    return todo.text.toLowerCase().includes(searchValue.toLowerCase());
  });

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };
  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };
  return (
    <AppUi
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSeacrhValue={setSeacrhValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;

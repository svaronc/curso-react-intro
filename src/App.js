import { useState } from "react";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { AppUi } from "./hooks/AppUi";

function App() {
  const [searchValue, setSeacrhValue] = useState("");
  const { item, saveItem, loading, error } = useLocalStorage("TODOS_V1", []);
  const completedTodos = item.filter((todo) => !!todo.completed).length;
  const totalTodos = item.length;
  const searchedTodos = item.filter((todo) => {
    return todo.text.toLowerCase().includes(searchValue.toLowerCase());
  });

  const completeTodo = (text) => {
    const newTodos = [...item];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = true;
    saveItem(newTodos);
  };
  const deleteTodo = (text) => {
    const newTodos = [...item];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    saveItem(newTodos);
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
      loading={loading}
      error={error}
    />
  );
}

export default App;

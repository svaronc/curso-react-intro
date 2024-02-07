import { useContext } from "react";
import "./TodoCounter.css";
import { TodoContext } from "../TodoContext/TodoContext";

export function TodoCounter() {
  const { totalTodos, completedTodos } = useContext(TodoContext);
  return  totalTodos === completedTodos ? (
    <h1 className="TodoCounter">You have completed all your TODOs</h1>
  ) : (
    <h1 className="TodoCounter">
     You have completed <span>{completedTodos}</span> from <span>{totalTodos}</span> TODOS
    </h1>
  );
}

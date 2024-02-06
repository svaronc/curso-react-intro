import { useContext } from "react";
import "./TodoCounter.css";
import { TodoContext } from "../TodoContext/TodoContext";

export function TodoCounter() {
  const { total, completed } = useContext(TodoContext);
  return  total === completed ? (
    <h1 className="TodoCounter">You have completed all your TODOs</h1>
  ) : (
    <h1 className="TodoCounter">
     You have completed <span>{completed}</span> from <span>{total}</span> TODOS
    </h1>
  );
}

import { FaCheckCircle } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";

import "./TodoItem.css";
import { useContext } from "react";
import { TodoContext } from "../TodoContext/TodoContext";

export function TodoItem() {
  const { completed, text, onComplete, onDelete } = useContext(TodoContext);
  return (
    <li className="TodoItem">
      <span
        onClick={() => onComplete(text)}
        className={`Icon Icon-check ${completed && "Icon-check--active"}`}
      >
        <FaCheckCircle />
      </span>
      <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>
        {text}
      </p>
      <span onClick={() => onDelete(text)} className="Icon Icon-delete">
        <FaDeleteLeft />
      </span>
    </li>
  );
}

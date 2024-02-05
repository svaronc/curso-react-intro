import { FaCheckCircle } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";

import "./TodoItem.css";

export function TodoItem({ completed, text, onComplete, onDelete }) {
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

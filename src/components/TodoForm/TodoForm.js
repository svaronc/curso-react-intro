import React, { useContext, useState } from "react";
import { TodoContext } from "../TodoContext/TodoContext";
import "./TodoForm.css";

export function TodoForm() {
  const { setOpenModal, addTodo } = useContext(TodoContext);
  const [newTodoValue, setNewTodoValue] = useState("");
  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };
  const onCancel = () => {
    setOpenModal(false);
  };
  const onChange = (event) => {
    console.log(newTodoValue);
    setNewTodoValue(event.target.value);
  };
  return (
    <form onSubmit={onSubmit}>
      <label>Write your TODO</label>
      <textarea
        placeholder="Write something here!!"
        value={newTodoValue}
        onChange={onChange}
      />
      <div className="TodoForm-buttonContainer ">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button type="submit" className="TodoForm-button TodoForm-button--add">
          Add
        </button>
      </div>
    </form>
  );
}

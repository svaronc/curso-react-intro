import React from "react";
import "./TodoForm.css";

export function TodoForm() {
  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <label>Write your TODO</label>
      <textarea placeholder="Write something here!!" />
      <div className="TodoForm-buttonContainer ">
        <button
          type="submit"
          className="TodoForm-button TodoForm-button--cancel"
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

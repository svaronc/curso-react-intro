import { useContext } from "react";
import "./TodoSearch.css";
import { TodoContext } from "../TodoContext/TodoContext";

export function TodoSearch() {
  const { setSeacrhValue, searcValue } = useContext(TodoContext);

  return (
    <input
      placeholder="Search TODOs"
      className="TodoSearch"
      value={searcValue}
      onChange={(event) => {
        setSeacrhValue(event.target.value);
      }}
    ></input>
  );
}

import "./TodoSearch.css";

export function TodoSearch({ setSeacrhValue, searcValue }) {
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

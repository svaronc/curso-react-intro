import "./TodoSearch.css";

export function TodoSearch({ setSeacrhValue, searcValue }) {
  return (
    <input
      placeholder="cortar cebolla"
      className="TodoSearch"
      value={searcValue}
      onChange={(event) => {
        setSeacrhValue(event.target.value);
      }}
    ></input>
  );
}

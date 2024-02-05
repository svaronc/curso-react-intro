import "./TodoCounter.css";

export function TodoCounter({ total, completed }) {
  return total === 0 ? (
    <h1 className="TodoCounter">Don't have TODOs</h1>
  ) : total === completed ? (
    <h1 className="TodoCounter">You have completed all your TODOs</h1>
  ) : (
    <h1 className="TodoCounter">
      Has completado <span>{completed}</span> de <span>{total}</span> TODOS
    </h1>
  );
}

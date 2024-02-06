import "./CreateTodoButton.css";

export function CreateTodoButton({ setOpenModal }) {
  return (
    <button
      className="CreateTodoButton"
      onClick={() => {
        console.log("click button");
        setOpenModal((prev) => !prev);
      }}
    >
      +
    </button>
  );
}

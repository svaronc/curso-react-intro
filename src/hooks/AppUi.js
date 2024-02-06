import { TodoCounter } from "../components/TodoCounter/TodoCounter.js";
import { TodoItem } from "../components/TodoItem/TodoItem";
import { TodoSearch } from "../components/TodoSearch/TodoSearch";
import { TodoList } from "../components/TodoList/TodoList";
import { CreateTodoButton } from "../components/CreateTodoButton/CreateTodoButton";
import { TodosLoading } from "../components/TodosLoading/TodosLoading.js";
import { TodosError } from "../components/TodosError/TodosError.js";
import { EmptyTodo } from "../components/EmptyTodo/EmptyTodo.js";
import { TodoContext } from "../components/TodoContext/TodoContext.js";
import { useContext } from "react";
import { Modal } from "../components/Modal/Modal.js";

export function AppUi() {
  const {
    loading,
    error,
    completeTodo,
    deleteTodo,
    searchedTodos,
    openModal,
    setOpenModal,
  } = useContext(TodoContext);
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {loading && (
          <>
            <TodosLoading />
            <TodosLoading />
            <TodosLoading />
          </>
        )}
        {error && <TodosError />}
        {!loading && searchedTodos.length === 0 && (
          <p>
            <EmptyTodo />
          </p>
        )}
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={completeTodo}
            onDelete={deleteTodo}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
      {openModal && <Modal></Modal>}
    </>
  );
}

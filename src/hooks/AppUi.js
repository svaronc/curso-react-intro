import { TodoCounter } from "../components/TodoCounter/TodoCounter.js";
import { TodoItem } from "../components/TodoItem/TodoItem";
import { TodoSearch } from "../components/TodoSearch/TodoSearch";
import { TodoList } from "../components/TodoList/TodoList";
import { CreateTodoButton } from "../components/CreateTodoButton/CreateTodoButton";
import { TodosLoading } from "../components/TodosLoading/TodosLoading.js";
import { TodosError } from "../components/TodosError/TodosError.js";
import { EmptyTodo } from "../components/EmptyTodo/EmptyTodo.js";

export function AppUi({
  completedTodos,
  totalTodos,
  searchValue,
  setSeacrhValue,
  searchedTodos,
  completeTodo,
  deleteTodo,
  loading,
  error,
}) {
  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setSeacrhValue={setSeacrhValue} />
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
      <TodoList>
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
    </>
  );
}

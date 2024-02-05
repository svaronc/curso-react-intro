import { TodoCounter } from "../components/TodoCounter/TodoCounter.js";
import { TodoItem } from "../components/TodoItem/TodoItem";
import { TodoSearch } from "../components/TodoSearch/TodoSearch";
import { TodoList } from "../components/TodoList/TodoList";
import { CreateTodoButton } from "../components/CreateTodoButton/CreateTodoButton";

export function AppUi({
  completedTodos,
  totalTodos,
  searchValue,
  setSeacrhValue,
  searchedTodos,
  completeTodo,
  deleteTodo,
}) {
  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setSeacrhValue={setSeacrhValue} />
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

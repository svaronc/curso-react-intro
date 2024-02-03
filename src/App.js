import { TodoItem } from "./components/TodoItem";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { CreateTodoButton } from "./components/CreateTodoButton";
import "./App.css";

const defaultTodos = [
  {text: 'cortar cebollar', completed: true},
  {text: 'tomar el curso de intro a react', completed: false},
  {text: 'Llorar por que no entiendo ', completed: true},
  {text: 'Ya entendi', completed: true},

]
function App() {
  return (
    <>
      <TodoCounter completed = {16} total={25} />
      <TodoSearch />
      <TodoList>
        {defaultTodos.map((todo) => (
          <TodoItem key={todo.text} text = {todo.text} completed = {todo.completed}/>
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}


export default App;

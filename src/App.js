import { AppUi } from "./hooks/AppUi";
import { TodoProvider } from "./components/TodoContext/TodoContext";

function App() {
  return (
    <TodoProvider>
      <AppUi></AppUi>
    </TodoProvider>
  );
}

export default App;

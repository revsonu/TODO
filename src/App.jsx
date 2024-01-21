import AppName from "./componets/AppName";
import AddTodo from "./componets/AddTodo";
import "./App.css";
import TodoItems from "./componets/TodoItems";

import WelcomeMessage from "./componets/WelcomeMessage";
import TodoItemsContextProvider from "./store/todo-items-store";

function App() {
  // const [todoItems, setTodoItems] = useState([]);

  return (
    <TodoItemsContextProvider>
      <center className="to-do-container">
        <AppName></AppName>
        <AddTodo></AddTodo>
        <WelcomeMessage></WelcomeMessage>
        <TodoItems></TodoItems>
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;

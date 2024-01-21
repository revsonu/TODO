import styles from "./WelcomeMessage.module.css";
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";



const WelcomeMessage = () => {
  const {todoItems} = useContext(TodoItemsContext);
  
  return (
    todoItems.length === 0 && (
      <div className={styles.Welcome}>Enjoy Your Day!</div>
    )
  );
};

export default WelcomeMessage;

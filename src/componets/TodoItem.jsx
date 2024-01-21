import styles from "./AppName.module.css";
import { MdDelete } from "react-icons/md";
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";


function TodoItem({ todoName, todoDate}) {

  const {deleteItem} = useContext(TodoItemsContext);
  
  return (
    <div className="container ">
      <div className={`${styles.Container} row kg-row`}>
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className={`${styles.BtnCenter} col-2`}>
          <button
            type="button"
            className="btn btn-danger kg-button"
            onClick={() => deleteItem(todoName)}
          >
            Delete <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;

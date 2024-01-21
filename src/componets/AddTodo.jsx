import { useRef } from "react";
import styles from "./AppName.module.css";
import { MdAddBox } from "react-icons/md";
import TodoItem from "./TodoItem";
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

function AddTodo({ onNewItem }) {

  const newTodoElement = useRef();
  const newDateElement = useRef();
  const {addNewItem} = useContext(TodoItemsContext);

  const handleAddButtonClicked = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    const todoName = newTodoElement.current.value;
    const dueDate  = newDateElement.current.value;
    addNewItem(todoName, dueDate);
    newTodoElement.current.value = "";
    newDateElement.current.value = "";
  };

  return (
    <div className={`container text-center`}>
      <form className="row kg-row" onSubmit={handleAddButtonClicked}>

        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            ref={newTodoElement}
          />
        </div>
        <div className="col-4">
          <input type="date" ref={newDateElement} />
        </div>
        <div className={`${styles.BtnCenter} col-2`}>
          <button
            type="submit"
            className="btn btn-success kg-button"
          >
            Add <MdAddBox />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;

import React from "react";
import ReactDOM from "react-dom/client";
import DropdownForm from "./form_tut/DropdownForm";
import TodoList from "./todolist/TodoList";
import TaskApp from "./TaskCrudPorject/TaskApp";


const App = () => {
    return(
        <div>
        <h1>React Dropdown Example</h1>
         <DropdownForm />
        {/* <TodoList/> */}
        {/* <TaskApp/> */}
      </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>)
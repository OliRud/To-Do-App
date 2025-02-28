import React, { useState } from "react";
import TodoList from "./TodoList";
import Summary from "./Summary";
import TodoForm from "./TodoForm";


const initialState = [
    {
        id: 1,
        description: "first",
        status: "pending",
    },
]



function TodoApp(){

    function addTodoItem(item){

        item.id = todoItems.length + 1
        setToDoItem(
            [... todoItems, item]
        );
    }

    const [todoItems,setToDoItem] = useState(initialState)

    //sort to put the completed items on top
    todoItems.sort((a,b) => a.status.localeCompare(b.status))

    return (
        <div className="TodoApp">
            <TodoForm onAddItem={addTodoItem}/>
            <Summary todoItems={todoItems}/>
            <TodoList todoItems={todoItems}/>
        </div>
        );
}

export default TodoApp;
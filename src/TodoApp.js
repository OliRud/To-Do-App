import React, { useState } from "react";
import TodoList from "./TodoList";
import Summary from "./Summary";
import TodoForm from "./TodoForm";


const initialState = [
    {
        id: 1,
        description: "first",
        status: "completed",
    },
    {
        id: 2,
        description: "second",
        status: "completed",
    },
    {
        id: 3,
        description: "third",
        status: "pending",
    },
]



function TodoApp(){

    const [todoItems,setToDoItem] = useState(initialState)

    function addTodoItem(item){

        item.id = todoItems.length + 1
        setToDoItem(
            [... todoItems, item]
        );
    }

    function removeTodoItem(item){
        let newItems = todoItems.filter(i => i.id != item.id);

        setToDoItem(newItems);
    };

    function changeItemStatus(item){
        item.status === "pending" ? item.status = "completed" : item.status = "pending";
        let otherItems = todoItems.filter(i => i.id != item.id);
        setToDoItem(
            [... otherItems, item]
        )
    }

    //sort to put the completed items on top
    todoItems.sort((a,b) => a.status.localeCompare(b.status))

    return (
        <div className="TodoApp">
            <TodoForm onAddItem={addTodoItem}/>
            <Summary todoItems={todoItems}/>
            <TodoList todoItems={todoItems} changeItemStatus={changeItemStatus}/>
        </div>
        ); 
}

export default TodoApp; 
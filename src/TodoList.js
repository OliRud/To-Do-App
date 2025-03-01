import React from "react";
import Task from "./Task";

function TodoList(props) {
    //props.todoItems
    return (
    <ul className="TodoList">

        {
            props.todoItems.map((item,index) =>{
                return (<Task todoItem={item} removeTodoItem={props.removeTodoItem} changeItemStatus={props.changeItemStatus}/>);
            })
        }
    </ul>
  );
}

export default TodoList;

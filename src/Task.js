import React from "react";

function Task(props) {
    let task;
    
    if(props.todoItem.status === "completed"){
        task = (
            <li style={{color:"darkred"}} onClick={() => {props.changeItemStatus(props.todoItem)}}>
                <h3>
                    <strike>{props.todoItem.description}</strike>
                </h3>
            </li>
        )
    } else {
        task = (
            <li style={{color:"green"}} onClick={() => {props.changeItemStatus(props.todoItem)}}>
                <h3>
                    {props.todoItem.description}
                </h3>
            </li>
        )
    }
    return (
        task
    );
}

export default Task;

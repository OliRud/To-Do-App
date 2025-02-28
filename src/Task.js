import React from "react";

function Task(props) {
    let task;
    
    if(props.todoItem.status === "completed"){
        task = (
            <ul>
                <h3>
                    <strike>{props.todoItem.description}</strike>
                </h3>
            </ul>
        )
    } else {
        task = (
            <ul>
                <h3>
                    {props.todoItem.description}
                </h3>
            </ul>
        )
    }
    return (
        task
    );
}

export default Task;

import React from "react";

function Summary(props) {
    let pendingItems = props.todoItems.filter(item => item.status === "pending")
    let completedItems = props.todoItems.filter(item => item.status === "completed")
    let totalItems = pendingItems.length + completedItems.length
  return ( //return the length of the arrays
    <div style={{display:'flex',flexDirection:"column",justifyContent:"center"}}>
        <h1> Pending Items : {pendingItems.length}</h1>
        <h1> Completed Items : {completedItems.length}</h1>
        <h2> Total Items : {totalItems}</h2>
    </div>
  );
}

export default Summary;

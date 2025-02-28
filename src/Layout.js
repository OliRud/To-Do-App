import React from "react";
import TodoApp from "./TodoApp"; 

function Layout() {
  return (
    <div className="Layout">
      <div className="header">
        <h1>My To-Do List Application</h1>
      </div>

      <div className="content">
        <TodoApp />
      </div>
      
      <div className="footer">
        <h1>Footer</h1>
      </div>
    </div>
  );
}

export default Layout;

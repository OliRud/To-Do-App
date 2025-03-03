import React from "react";
import TodoApp from "./TodoApp"; 
import Header from "./Header";

function Layout(props) {
  return (
    <div className="Layout">
      <div className="header">
        <Header toggleSidebar={props.toggleSidebar}/>
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

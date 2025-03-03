import React from "react";
import Layout from "./Layout";
import './App.css'
import SideBar from "./SideBar";
import { useState } from "react";

function App() {

  const [isSideBarVisible, setIsSidebarVisible] = useState(true);

  function toggleSidebar(){
     setIsSidebarVisible(! isSideBarVisible);
  }

  return (
    <div className="App">
      {isSideBarVisible && <SideBar/>}
      <Layout toggleSidebar={toggleSidebar}/>
    </div>
  );
}

export default App;

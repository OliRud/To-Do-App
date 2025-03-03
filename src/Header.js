import React from "react";
import logo from "./Octicons-mark-github.svg.png";

function Header(props) {
  return (
    <div className="header">
      <div style={{display:"flex", flexDirection:"column", justifyContent:"space-around", height:40}}className="toggle-button" onClick={()=>{props.toggleSidebar()}}>
        <div style={{backgroundColor:"black", width:35, height:5}}></div>
        <div style={{backgroundColor:"black", width:35, height:5}}></div>
        <div style={{backgroundColor:"black", width:35, height:5}}></div>
      </div>

      <h1>Oli's React To-Do Application</h1>
      <img src={logo} alt="img" height={40} width={40}></img>
    </div>
  );
}

export default Header;
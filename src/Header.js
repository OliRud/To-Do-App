import React from "react";
import logo from "./Octicons-mark-github.svg.png";

function Header() {
  return (
    <div className="header">
        <h1>Oli's React To-Do Application</h1>
        <img src={logo} alt="img" height={40} width={40}></img>
    </div>
  );
}

export default Header;
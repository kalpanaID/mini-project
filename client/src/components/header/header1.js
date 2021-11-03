import { AppBar, Toolbar } from "@material-ui/core";
import React from "react";

export default function Header1() {
  const displayDesktop = () => {
    return (
        <div > 
        <Toolbar>Employee     Reviews</Toolbar>
        </div>
    );
  };
  
  return (
    <header>
      <AppBar>{displayDesktop()}</AppBar>
    </header>
  );
}
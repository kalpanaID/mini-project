import { AppBar, Toolbar } from "@material-ui/core";
import React from "react";

export default function Header2() {
  const displayDesktop = () => {
    return (
        <div > 
        <Toolbar>sdghjm  gbn  bnm mnbf</Toolbar>
        </div>
    );
  };
  
  return (
    <header>
      <AppBar>{displayDesktop()}</AppBar>
    </header>
  );
}
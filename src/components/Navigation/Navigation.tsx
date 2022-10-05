import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import NavMainBar from './NavMainBar/NavMainbar'
import NavSideBar from './NavSideBar/NavSideBar'

export default function Header() {
  
  const [open, setState] = useState<boolean>(false);

  const toggleDrawer = (open: boolean) => (event: any) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState(open);
  };

  return (
    <AppBar>
      <Container>
        <Toolbar className="header-container">
          <NavMainBar toggleDrawer={toggleDrawer} />
          <NavSideBar toggleDrawer={toggleDrawer} open={open} /> 
        </Toolbar>
      </Container>
    </AppBar>
  );
}

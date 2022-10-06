import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import NavMainBar from './NavMainBar/NavMainbar'
import NavSideBar from './NavSideBar/NavSideBar'

export default function Header() {
  
  const [open, setState] = useState<boolean>(false);

  const toggleDrawer = (open: boolean) => (event: React.MouseEvent<HTMLButtonElement>) => {
    if ( event.type === "keydown" ) {
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

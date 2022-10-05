import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import logo1 from '../../logo.svg'
import './header.css'
import { Link } from '@reach/router'

//drawer elements used
import Drawer from "@mui/material/Drawer";
// import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";


export default function Header() {
  const [open, setState] = useState(false);

  const toggleDrawer = (open: any) => (event: any) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState(open);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar className="header-container">
        <Box
            component="img"
            sx={{
            // width: 350,
            // maxHeight: { xs: 233, md: 167 },
            // maxWidth: { xs: 350, md: 250 },
            }}
            alt="Pickbeam-logo."
            src={logo1}
        />
          <Button 
          // className="hamburger-btn"
          color="inherit"

          onClick={toggleDrawer(true)}
          aria-label="open drawer"
          sx={{
              display: {
                sm: "block",
                md: "none"
              }
            }}
          >
            <MenuIcon />
          </Button>

          <Box
          className="desktop-navigation"
          sx={{
            display: {
              xs: "none",
              sm: "none",
              md: "flex"
            }
          }}
          >
            <Link to="/services">
              <Typography color="primary.contrastText">
                  SERVICES
              </Typography>
            </Link>
            <Link to="/votre-besoin">
              <Typography color="primary.contrastText">
                  VOTRE BESOIN
              </Typography>
            </Link>
            <Link to="/ressources">
              <Typography color="primary.contrastText">
                  RESSOURCES
              </Typography>
            </Link>
          </Box>
          <Button 
          variant="contained"
          color="secondary"
          sx={{
              display: {
                xs: "none",
                sm: "none",
                md: "block"
              }
            }}
          >
            Nous Contacter
          </Button>

          {/* </IconButton> */}

          {/* The outside of the drawer */}
          <Drawer
            //from which side the drawer slides in
            anchor="left"
            //if open is true --> drawer is shown
            open={open}
            //function that is called when the drawer should close
            onClose={toggleDrawer(false)}
            //function that is called when the drawer should open
            // open={toggleDrawer(true)}
          >
            {/* The inside of the drawer */}
            <Box
              sx={{
                p: 2,
                height: 1,
              }}
            >
              {/* when clicking the icon it calls the function toggleDrawer and closes the drawer by setting the variable open to false */}
              <IconButton sx={{ mb: 2 }}>
                {/* <CloseIcon onClick={toggleDrawer(false)} /> */}
              </IconButton>

              <Divider sx={{ mb: 2 }} />

              <Box sx={{ mb: 2 }}>
                <ListItemButton>
                  <ListItemText primary="Services" />
                </ListItemButton>

                <ListItemButton>
                  <ListItemText primary="Votre besoin" />
                </ListItemButton>

                <ListItemButton>
                  <ListItemText primary="Ressources" />
                </ListItemButton>
                <Button className="btn-default" variant="contained">
                  Nous contacter
                </Button>
              </Box>

            </Box>
          </Drawer>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

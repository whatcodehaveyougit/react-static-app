import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import pickbeamLogo from '../../logo.svg'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import './header.css'
import { Link } from '@reach/router'

import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
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
            alt="Pickbeam-logo."
            src={pickbeamLogo}
        />
          <Button 
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

          {/* The outside of the drawer */}
          <Drawer
            anchor="left"
            open={open}
            onClose={toggleDrawer(false)}
            // open={toggleDrawer(true)}
          >
            <Box
             sx={{
              backgroundColor: 'primary.main',
            }}
            >
              <Box className="drawer-logo-container">
                <Box
                    component="img"
                    alt="Pickbeam-logo."
                    src={pickbeamLogo}
                    mb={1}
                    p={3}
                />
              </Box>
             
                    
              <Divider
                variant="fullWidth"
                sx={{
                backgroundColor: 'primary.contrastText',
                borderBottomWidth: 5
              }} />

              <Box mb={2} p={3}>
                <Box mb={3} mt={4}>
                  <Typography mb={3} className="drawer-item" color="primary.contrastText">
                    Services
                    <ExpandMoreIcon />
                  </Typography>
                  <Typography  mb={3} className="drawer-item" color="primary.contrastText">
                    Votre besoin
                    <ExpandMoreIcon />
                  </Typography>
                  <Typography  mb={3} className="drawer-item" color="primary.contrastText">
                    Ressources
                    <ExpandMoreIcon />
                  </Typography>
                </Box>
                <Box p={3}>
                  <Button 
                    color="secondary"
                    variant="contained"
                    >
                    Nous contacter
                  </Button>
                </Box>
              </Box>
            </Box>

          </Drawer>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

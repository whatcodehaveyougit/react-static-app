import React from "react";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from '@reach/router'
import Button from "@mui/material/Button";
import pickbeamLogo from '../../../logo.svg'
import { Typography } from "@mui/material";


type NavMainBarProps = {
    toggleDrawer: (open: boolean) => (event: React.MouseEvent<HTMLButtonElement>) => void,
}

const NavMainBar = ( props: NavMainBarProps ) => {

    const { toggleDrawer } = props;

    return (
        <>
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
                <Link to="/">
                <Typography color="primary.contrastText">
                    SERVICES
                </Typography>
                </Link>
                <Link to="/">
                <Typography color="primary.contrastText">
                    VOTRE BESOIN
                </Typography>
                </Link>
                <Link to="/">
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
        </>
    )
}

export default NavMainBar;
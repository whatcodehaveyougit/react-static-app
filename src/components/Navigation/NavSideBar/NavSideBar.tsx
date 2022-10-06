import React from "react";
import Box from "@mui/material/Box";
import pickbeamLogo from '../../../logo.svg'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import '../Navigation.css'

import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

type NavSideBarProps = {
    toggleDrawer: (open: boolean) => (event: React.MouseEvent<HTMLButtonElement>) => void,
    open: boolean
}

const NavSideBar = ( props: NavSideBarProps ) => {

    const { toggleDrawer, open } = props;

    return (
        <>
            <Drawer
                anchor="left"
                open={open}
                onClose={toggleDrawer(false)}
                // open={toggleDrawer(true)}
            >
                <Box
                    sx={{
                    backgroundColor: 'primary.main',
                    height: '100%'
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
        </>
    )
}

export default NavSideBar;
import React, { useState } from 'react';
import { Box, AppBar, Toolbar, Typography, IconButton, Drawer, Divider } from "@mui/material"; 
import { NavLink } from "react-router-dom";
import FastfoodIcon from '@mui/icons-material/Fastfood';
import MenuIcon from '@mui/icons-material/Menu';
import '../../styles/HeaderStyle.css';

const Header = () => {
    const [ mobileOpen, setMobileOpen ] = useState(false);

    const handleToggleMenu = () => {
            setMobileOpen(!mobileOpen);
    }
    //menu Drawer
    const drawer = (
        <Box onClick={handleToggleMenu} sx={{ textAlign: 'center' }}>
            <Typography color="goldenrod" variant="h6" component="div" sx={{ flexGrow: 1, my: 2 , mx:2}}><FastfoodIcon/> My Restaurant</Typography>
                <Divider />
                    <ul className="mobile-navigation" >
                        <li>
                            <NavLink to={"/"} >Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/menu"} >Menu</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/about"} >About</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/contact"} >Contact</NavLink>
                        </li>
                    </ul>
                
        </Box>
    )


    return (
            <> 
            <Box >
            <AppBar component={"nav"} sx={{ bgcolor : "black" }} >
                <Toolbar>
                <IconButton color="inherit" aria-label="open drawer" edge="start" sx={{mr: 2 , display: {sm: "none"}}} onClick={handleToggleMenu}>
                    <MenuIcon />
                </IconButton>
                    <Typography color="goldenrod" variant="h6" component="div" sx={{ flexGrow: 1 }}><FastfoodIcon/> My Restaurant</Typography>
                <Box sx={{display: {xs: "none", sm: "block"}}}>
                    <ul className="navigation-menu">
                        <li>
                            <NavLink to={"/"} >Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/menu"} >Menu</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/about"} >About</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/contact"} >Contact</NavLink>
                        </li>
                    </ul>
                </Box>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                    <Drawer
                    variant="temporary"
                    anchor="left"
                    open={mobileOpen}
                    onClose={handleToggleMenu}
                    sx={{ display: { xs: "block", sm: "none"}, "@ .MuiDrawer-paper": {
                        boxSizing : "border-box",
                        Width: "260px",

                    }}}
                    >
                    {drawer}
                    </Drawer>
            </Box>
            <Box >

            <Toolbar />
            </Box>
        </Box>
        </>
    )
}

export default Header

import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import './Navbar.css';

function Navbar({ toggleSidebar }) {
  return (
    <AppBar position="static" className="navbar">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleSidebar} className="navbar-button">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className="navbar-title">
          Restaurante Universitário
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;

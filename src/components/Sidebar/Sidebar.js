import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Home, Person, AddHome    } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <List>
        <ListItem button component={Link} to="/">
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/pessoas-responsaveis">
          <ListItemIcon>
            <Person />
          </ListItemIcon>
          <ListItemText primary="Pessoas Responsáveis" />
        </ListItem>
        <ListItem button component={Link} to="/alunos">
          <ListItemIcon>
            <Person />
          </ListItemIcon>
          <ListItemText primary="Alunos" />
        </ListItem>
        <ListItem button component={Link} to="/enderecos">
          <ListItemIcon>
            <AddHome/>
          </ListItemIcon>
          <ListItemText primary="Endereços" />
        </ListItem>
        {/* Adicione outras entidades aqui */}
      </List>
    </div>
  );
}

export default Sidebar;

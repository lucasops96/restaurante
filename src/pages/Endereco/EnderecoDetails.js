import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Typography, Paper, List, ListItem, ListItemText, Button } from '@mui/material';

function EnderecoDetails() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { endereco } = state || {};

  if (!endereco) {
    return (
      <div>
        <Typography variant="h4" gutterBottom>
          Nenhum endereço selecionado
        </Typography>
        <Button variant="contained" color="primary" onClick={() => navigate(-1)}>
          Voltar
        </Button>
      </div>
    );
  }

  return (
    <Container component={Paper} style={{ padding: '20px', marginTop: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Detalhes do Endereço
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="Rua" secondary={endereco.rua} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Número" secondary={endereco.numero} />
        </ListItem>
        <ListItem>
          <ListItemText primary="CEP" secondary={endereco.cep} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Cidade" secondary={endereco.cidade} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Estado" secondary={endereco.estado} />
        </ListItem>
        <ListItem>
          <ListItemText primary="País" secondary={endereco.pais} />
        </ListItem>
      </List>
      <Button variant="contained" color="primary" onClick={() => navigate(-1)}>
        Voltar
      </Button>
    </Container>
  );
}

export default EnderecoDetails;

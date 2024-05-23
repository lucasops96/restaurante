import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Typography, Paper, List, ListItem, ListItemText, Button } from '@mui/material';

function PessoaResponsavelDetails() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { pessoaResponsavel } = state || {};

  if (!pessoaResponsavel) {
    return (
      <div>
        <Typography variant="h4" gutterBottom>
          Nenhuma pessoa responsável selecionado
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
        Detalhes da Pessoa Responsável
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="Nome" secondary={pessoaResponsavel.nome} />
        </ListItem>
        <ListItem>
          <ListItemText primary="CPF" secondary={pessoaResponsavel.cpf} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Telefone WhatsApp" secondary={pessoaResponsavel.telefone} />
        </ListItem>
        <ListItem>
          <ListItemText primary="E-mail" secondary={pessoaResponsavel.email} />
        </ListItem>
      </List>
      <Button variant="contained" color="primary" onClick={() => navigate(-1)}>
        Voltar
      </Button>
    </Container>
  );
}

export default PessoaResponsavelDetails;

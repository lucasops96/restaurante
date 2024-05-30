import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Typography, Paper, List, ListItem, ListItemText, Button } from '@mui/material';

function AlunoDetails() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { aluno } = state || {};

  if (!aluno) {
    return (
      <div>
        <Typography variant="h4" gutterBottom>
          Nenhum aluno selecionado
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
        Detalhes do Aluno
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="Matrícula" secondary={aluno.matricula} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Nome" secondary={aluno.nome} />
        </ListItem>
        <ListItem>
          <ListItemText primary="CPF" secondary={aluno.cpf} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Endereço" secondary={`${aluno.endereco.rua}, ${aluno.endereco.numero} - ${aluno.endereco.cidade}, ${aluno.endereco.estado}, ${aluno.endereco.pais}`} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Curso" secondary={aluno.curso} />
        </ListItem>
      </List>
      <Button variant="contained" color="primary" onClick={() => navigate(-1)}>
        Voltar
      </Button>
    </Container>
  );
}

export default AlunoDetails;

import React from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Paper, Typography, List, ListItem, ListItemText, Button } from '@mui/material';

import { Link } from 'react-router-dom';
//import './RestauranteDetails.css';

function RestauranteDetails() {
  const { state } = useLocation();
  const { restaurante } = state;

  return (
    <Container component={Paper} style={{ padding: '20px', marginTop: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Detalhes do Restaurante
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="Nome do Restaurante" secondary={restaurante.nome} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Endereço" secondary={`${restaurante.endereco.rua}, ${restaurante.endereco.numero} - ${restaurante.endereco.cidade}, ${restaurante.endereco.estado}, ${restaurante.endereco.pais}`} />
        </ListItem>
        <ListItem>
          <ListItemText primary="CEP" secondary={restaurante.endereco.cep} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Pessoa Responsável" secondary={`${restaurante.pessoaResponsavel.nome}`} />
        </ListItem>
        <ListItem>
          <ListItemText primary="CPF do Responsável" secondary={restaurante.pessoaResponsavel.cpf} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Telefone do Responsável" secondary={restaurante.pessoaResponsavel.telefone} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Email do Responsável" secondary={restaurante.pessoaResponsavel.email} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Capacidade de Refeições" secondary={restaurante.capacidadeRefeicoes} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Horário de Atendimento do Café da Manhã" secondary={restaurante.horarioCafeManha} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Horário de Atendimento do Almoço" secondary={restaurante.horarioAlmoco} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Horário de Atendimento do Jantar" secondary={restaurante.horarioJantar} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Dias de Funcionamento" secondary={restaurante.diasFuncionamento} />
        </ListItem>
      </List>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/"
        style={{ marginTop: '20px' }}
      >
        Voltar
      </Button>
    </Container>
  );
}

export default RestauranteDetails;

import React from 'react';
import { useNavigate, useParams, useLocation,Link } from 'react-router-dom';
import { Container, Paper, Typography, Button } from '@mui/material';
import axios from 'axios';

function ExcluirRestaurante() {
  const { id, nome } = useParams();
  const navigate = useNavigate();
  //const location = useLocation();
  //const { restaurante } = location.state || {};

  const handleDelete = async () => {
    try {
      await axios.delete(`https://demo6292057.mockable.io/restaurantes/${id}`);
      navigate('/');
    } catch (error) {
      console.error('Erro ao excluir o restaurante:', error);
    }
  };

  return (
    <Container component={Paper} style={{ padding: '20px', marginTop: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Excluir Restaurante
      </Typography>
      <Typography variant="body1" gutterBottom>
        Tem certeza de que deseja excluir o restaurante "{nome}"?
      </Typography>
      <Button
        variant="contained"
        color="error"
        onClick={handleDelete}
        style={{ marginRight: '10px' }}
      >
        Excluir
      </Button>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/"
      >
        Cancelar
      </Button>
    </Container>
  );
}

export default ExcluirRestaurante;

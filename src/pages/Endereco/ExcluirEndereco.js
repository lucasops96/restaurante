import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Typography, Button } from '@mui/material';
import axios from 'axios';


function ExcluirEndereco() {
  const { id, rua } = useParams();
  const navigate = useNavigate();

  const handleExcluirEndereco = async () => {
    try {
      //await axios.delete(`https://demo6292057.mockable.io/excluir/endereco/${id}`);
      console.log('Endereço excluído com sucesso',id);
      navigate('/enderecos');
    } catch (error) {
      console.error('Erro ao excluir o endereço:', error);
    }
  };

  const handleCancelarExclusao = () => {
    navigate('/enderecos');
  };

  return (
    <Container className="excluir-endereco-container">
      <Typography variant="h4" gutterBottom>Deseja excluir o endereço {rua}?</Typography>
      <Typography variant="body1">Tem certeza que deseja excluir este endereço?</Typography>
      <Button onClick={handleExcluirEndereco} variant="contained" color="error" style={{ marginRight: '10px',marginTop: '20px' }}>
        Excluir
      </Button>
      <Button onClick={handleCancelarExclusao} variant="outlined" color="primary" style={{ marginTop: '20px' }}>
        Cancelar
      </Button>
    </Container>
  );
}

export default ExcluirEndereco;

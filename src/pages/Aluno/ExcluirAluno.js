import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Typography, Button } from '@mui/material';
import axios from 'axios';
import './ExcluirAluno.css';

function ExcluirAluno() {
  const { id , nome } = useParams();
  const navigate = useNavigate();

  const handleExcluirAluno = async () => {
    try {
      // await axios.delete(`https://demo6292057.mockable.io/excluir/aluno/${id}`);
      await axios.delete(`https://demo6292057.mockable.io/excluir/aluno/`);
      console.log('Aluno excluído com sucesso',id);
      // Redirecionar de volta para a lista de alunos após excluir
      navigate('/alunos');
    } catch (error) {
      console.error('Erro ao excluir o aluno:', error);
    }
  };

  const handleCancelarExclusao = () => {
    // Redirecionar de volta para a lista de alunos
    navigate('/alunos');
  };


  return (
    <Container>
      <Typography variant="h4" gutterBottom>Excluir Aluno {nome}</Typography>
      <Typography variant="body1">Tem certeza que deseja excluir este aluno?</Typography>
      <div className="button-container"> {/* Aplica a classe CSS para o container de botões */}
        <Button onClick={handleExcluirAluno} variant="contained" color="error">Excluir</Button>
        <Button onClick={handleCancelarExclusao} variant="outlined" color="primary">Cancelar</Button>
      </div>
    </Container>
  );
}

export default ExcluirAluno;

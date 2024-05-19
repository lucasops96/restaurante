import React, { useState, useEffect } from 'react';
import { useParams, useNavigate  } from 'react-router-dom';
import { TextField, Button, Container,Typography } from '@mui/material';
import axios from 'axios';

function AlunoForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [matricula, setMatricula] = useState('');
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [endereco, setEndereco] = useState('');
  const [curso, setCurso] = useState('');

  useEffect(() => {
    if (id) {
      // Se tiver um id, buscar os dados do aluno pelo id
      axios.get(`https://demo6292057.mockable.io/alunos/${id}`)
        .then(response => {
          const aluno = response.data;
          setMatricula(aluno.matricula);
          setNome(aluno.nome);
          setCpf(aluno.cpf);
          setEndereco(aluno.idEndereco);
          setCurso(aluno.curso);
        })
        .catch(error => console.error('Erro ao buscar o aluno:', error));
    }
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const alunoAtualizado = {
        matricula,
        nome,
        cpf,
        idEndereco: endereco,
        curso
      };
  
      try {
        if (id) {
          
          // await axios.put(`https://demo6292057.mockable.io/editar/aluno/${id}`, alunoAtualizado);
          const response = await axios.put(`https://demo6292057.mockable.io/editar/aluno/`, alunoAtualizado);
          console.log('Aluno editado:', response.data);
        } else {
          // Se não tiver um id, adicionar um novo aluno
          const response = await axios.post('https://demo6292057.mockable.io/adicionar/aluno/', alunoAtualizado);
          console.log('Aluno adicionado:', response.data ,alunoAtualizado);
        }
        navigate('/alunos'); // Redireciona de volta para a lista de alunos após adicionar ou editar
      } catch (error) {
        console.error('Erro ao adicionar ou editar o aluno:', error);
      }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        {id ? 'Editar Aluno' : 'Adicionar Aluno'}
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField label="Matrícula" value={matricula} onChange={(e) => setMatricula(e.target.value)} fullWidth margin="normal" />
        <TextField label="Nome" value={nome} onChange={(e) => setNome(e.target.value)} fullWidth margin="normal" />
        <TextField label="CPF" value={cpf} onChange={(e) => setCpf(e.target.value)} fullWidth margin="normal" />
        <TextField label="Endereço" value={endereco} onChange={(e) => setEndereco(e.target.value)} fullWidth margin="normal" />
        <TextField label="Curso" value={curso} onChange={(e) => setCurso(e.target.value)} fullWidth margin="normal" />
        <Button type="submit" variant="contained" color="primary">Salvar</Button>
      </form>
    </Container>
  );
}

export default AlunoForm;

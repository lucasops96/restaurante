
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { TextField, Button, Container, Typography, FormControl, InputLabel, Select, MenuItem, Paper } from '@mui/material';
import { restApi } from '../../services/api';


function AlunoForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [matricula, setMatricula] = useState('');
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [curso, setCurso] = useState('');
  const [enderecoId, setEnderecoId] = useState('');
  const [enderecos, setEnderecos] = useState([]);

  useEffect(() => {
    const fetchAluno = async () => {
      if (id) {
        try {
          const response = await restApi.get(`/alunos/${id}`);
          const aluno = response.data;
          setMatricula(aluno.matricula);
          setNome(aluno.nome);
          setCpf(aluno.cpf);
          setCurso(aluno.curso);
          setEnderecoId(aluno.endereco.id);
        } catch (error) {
          console.error('Erro ao buscar o aluno:', error);
        }
      }
    };

    const fetchEnderecos = async () => {
      try {
        const response = await restApi.get('/enderecos');
        setEnderecos(response.data);
      } catch (error) {
        console.error('Erro ao buscar endereços:', error);
      }
    };

    fetchAluno();
    fetchEnderecos();
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const alunoAtualizado = {
      matricula,
      nome,
      cpf,
      endereco: {
        id: enderecoId
      },
      curso
    };

    try {
      if (id) {
        const response = await restApi.put(`/alunos/${id}`, alunoAtualizado);
        console.log('Aluno editado:', response.data);
      } else {
        const response = await restApi.post('/alunos', alunoAtualizado);
        console.log('Aluno adicionado:', response.data, alunoAtualizado);
      }
      navigate('/alunos');
    } catch (error) {
      console.error('Erro ao adicionar ou editar o aluno:', error);
    }
  };

  return (
    <Container component={Paper} style={{ padding: '20px', marginTop: '20px' }}>
      <Typography variant="h4" gutterBottom>
        {id ? 'Editar Aluno' : 'Adicionar Aluno'}
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Matrícula"
          value={matricula}
          onChange={(e) => setMatricula(e.target.value)}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="CPF"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Curso"
          value={curso}
          onChange={(e) => setCurso(e.target.value)}
          fullWidth
          margin="normal"
          required
        />
        <FormControl fullWidth margin="normal" required>
          <InputLabel>Endereço</InputLabel>
          <Select
            value={enderecoId}
            onChange={(e) => setEnderecoId(e.target.value)}
          >
            {enderecos.map((endereco) => (
              <MenuItem key={endereco.id} value={endereco.id}>
                {endereco.rua}, {endereco.numero} - {endereco.cidade}, {endereco.estado}, {endereco.pais}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          style={{ marginTop: '20px' }}
        >
          {id ? 'Atualizar' : 'Cadastrar'}
        </Button>
      </form>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/alunos"
        style={{ marginTop: '20px' }}
      >
        Voltar
      </Button>
    </Container>
  );
}

export default AlunoForm;

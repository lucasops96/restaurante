import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { Container, Paper, Typography, TextField, Button, Select, MenuItem, FormControl, InputLabel, FormHelperText } from '@mui/material';

function RestauranteForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [nome, setNome] = useState('');
  const [enderecoId, setEnderecoId] = useState('');
  const [enderecos, setEnderecos] = useState([]);
  const [pessoaResponsavelId, setPessoaResponsavelId] = useState('');
  const [pessoasResponsaveis, setPessoasResponsaveis] = useState([]);
  const [capacidadeRefeicoes, setCapacidadeRefeicoes] = useState('');
  const [horarioCafeManha, setHorarioCafeManha] = useState('');
  const [horarioAlmoco, setHorarioAlmoco] = useState('');
  const [horarioJantar, setHorarioJantar] = useState('');
  const [diasFuncionamento, setDiasFuncionamento] = useState('');

  useEffect(() => {
    const fetchEnderecos = async () => {
      try {
        const response = await axios.get('https://demo6292057.mockable.io/enderecos/');
        setEnderecos(response.data);
      } catch (error) {
        console.error('Erro ao buscar os endereços:', error);
      }
    };

    const fetchPessoasResponsaveis = async () => {
      try {
        const response = await axios.get('https://demo6292057.mockable.io/pessoas/');
        setPessoasResponsaveis(response.data);
      } catch (error) {
        console.error('Erro ao buscar as pessoas responsáveis:', error);
      }
    };

    const fetchRestaurante = async () => {
      if (id) {
        try {
          const response = await axios.get(`https://demo6292057.mockable.io/restaurantes/${id}`);
          const restaurante = response.data;
          setNome(restaurante.nome);
          setEnderecoId(restaurante.endereco.id);
          setPessoaResponsavelId(restaurante.pessoaResponsavel.id);
          setCapacidadeRefeicoes(restaurante.capacidadeRefeicoes);
          setHorarioCafeManha(restaurante.horarioCafeManha);
          setHorarioAlmoco(restaurante.horarioAlmoco);
          setHorarioJantar(restaurante.horarioJantar);
          setDiasFuncionamento(restaurante.diasFuncionamento);
        } catch (error) {
          console.error('Erro ao buscar o restaurante:', error);
        }
      }
    };

    fetchEnderecos();
    fetchPessoasResponsaveis();
    fetchRestaurante();
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const restaurante = {
      nome,
      endereco: { id: enderecoId },
      pessoaResponsavel: { id: pessoaResponsavelId },
      capacidadeRefeicoes,
      horarioCafeManha,
      horarioAlmoco,
      horarioJantar,
      diasFuncionamento,
    };

    try {
      if (id) {
        //await axios.put(`https://demo6292057.mockable.io/restaurantes/${id}`, restaurante);
        console.log('Restaurante Editado',restaurante)
      } else {
        //await axios.post('https://demo6292057.mockable.io/restaurantes', restaurante);
        console.log('Restaurante Criado',restaurante)
      }
      navigate('/');
    } catch (error) {
      console.error('Erro ao salvar o restaurante:', error);
    }
  };

  return (
    <Container component={Paper} style={{ padding: '20px', marginTop: '20px' }}>
      <Typography variant="h4" gutterBottom>
        {id ? 'Editar Restaurante' : 'Adicionar Restaurante'}
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Nome do Restaurante"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          fullWidth
          required
          margin="normal"
        />
        <InputLabel>Endereço</InputLabel>
        <FormControl fullWidth margin="normal" required>
          <Select
            value={enderecoId}
            onChange={(e) => setEnderecoId(e.target.value)}
          >
            {enderecos.map((endereco) => (
              <MenuItem key={endereco.id} value={endereco.id}>
                {endereco.rua}, {endereco.numero} - {endereco.cidade}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>Selecione o endereço do restaurante</FormHelperText>
        </FormControl>
        <InputLabel>Pessoa Responsável</InputLabel>
        <FormControl fullWidth margin="normal" required>
          <Select
            value={pessoaResponsavelId}
            onChange={(e) => setPessoaResponsavelId(e.target.value)}
          >
            {pessoasResponsaveis.map((pessoa) => (
              <MenuItem key={pessoa.id} value={pessoa.id}>
                {pessoa.nome} ({pessoa.email})
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>Selecione a pessoa responsável pelo restaurante</FormHelperText>
        </FormControl>
        <TextField
          label="Capacidade de Refeições"
          value={capacidadeRefeicoes}
          onChange={(e) => setCapacidadeRefeicoes(e.target.value)}
          fullWidth
          required
          margin="normal"
        />
        <TextField
          label="Horário de Café da Manhã"
          value={horarioCafeManha}
          onChange={(e) => setHorarioCafeManha(e.target.value)}
          fullWidth
          required
          margin="normal"
        />
        <TextField
          label="Horário de Almoço"
          value={horarioAlmoco}
          onChange={(e) => setHorarioAlmoco(e.target.value)}
          fullWidth
          required
          margin="normal"
        />
        <TextField
          label="Horário de Jantar"
          value={horarioJantar}
          onChange={(e) => setHorarioJantar(e.target.value)}
          fullWidth
          required
          margin="normal"
        />
        <TextField
          label="Dias de Funcionamento"
          value={diasFuncionamento}
          onChange={(e) => setDiasFuncionamento(e.target.value)}
          fullWidth
          required
          margin="normal"
        />
        <Button variant="contained" color="primary" type="submit" style={{ marginTop: '20px' }}>
          Salvar
        </Button>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/"
          style={{ marginTop: '20px', marginLeft: '10px' }}
        >
          Voltar
        </Button>
      </form>
    </Container>
  );
}

export default RestauranteForm;

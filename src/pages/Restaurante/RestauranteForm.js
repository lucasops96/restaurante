import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Container, Paper, TextField, Button, Typography, Grid } from '@mui/material';
import axios from 'axios';

function RestauranteForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [nome, setNome] = useState('');
  const [capacidadeRefeicoes, setCapacidadeRefeicoes] = useState('');
  const [horarioCafeManha, setHorarioCafeManha] = useState('');
  const [horarioAlmoco, setHorarioAlmoco] = useState('');
  const [horarioJantar, setHorarioJantar] = useState('');
  const [diasFuncionamento, setDiasFuncionamento] = useState('');

  // Estados para Endereço
  const [rua, setRua] = useState('');
  const [numero, setNumero] = useState('');
  const [cep, setCep] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [pais, setPais] = useState('');

  // Estados para Pessoa Responsável
  const [nomeResponsavel, setNomeResponsavel] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (id) {
      const fetchRestaurante = async () => {
        try {
          const response = await axios.get(`https://demo6292057.mockable.io/restaurantes/${id}`);
          const restaurante = response.data;
          setNome(restaurante.nome);
          setCapacidadeRefeicoes(restaurante.capacidadeRefeicoes);
          setHorarioCafeManha(restaurante.horarioCafeManha);
          setHorarioAlmoco(restaurante.horarioAlmoco);
          setHorarioJantar(restaurante.horarioJantar);
          setDiasFuncionamento(restaurante.diasFuncionamento);

          // Preencher campos de endereço
          setRua(restaurante.endereco.rua);
          setNumero(restaurante.endereco.numero);
          setCep(restaurante.endereco.cep);
          setCidade(restaurante.endereco.cidade);
          setEstado(restaurante.endereco.estado);
          setPais(restaurante.endereco.pais);

          // Preencher campos de pessoa responsável
          setNomeResponsavel(restaurante.pessoaResponsavel.nome);
          setCpf(restaurante.pessoaResponsavel.cpf);
          setTelefone(restaurante.pessoaResponsavel.telefone);
          setEmail(restaurante.pessoaResponsavel.email);
        } catch (error) {
          console.error('Erro ao buscar o restaurante:', error);
        }
      };

      fetchRestaurante();
    }
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const restaurante = {
      nome,
      capacidadeRefeicoes,
      horarioCafeManha,
      horarioAlmoco,
      horarioJantar,
      diasFuncionamento,
      endereco: {
        rua,
        numero,
        cep,
        cidade,
        estado,
        pais,
      },
      pessoaResponsavel: {
        nome: nomeResponsavel,
        cpf,
        telefone,
        email,
      },
    };

    try {
      if (id) {
        await axios.put(`https://demo6292057.mockable.io/restaurantes/${id}`, restaurante);
      } else {
        await axios.post('https://demo6292057.mockable.io/restaurantes', restaurante);
      }
      navigate('/restaurantes');
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
          margin="normal"
          required
        />
        <TextField
          label="Capacidade de Refeições"
          value={capacidadeRefeicoes}
          onChange={(e) => setCapacidadeRefeicoes(e.target.value)}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Horário de Café da Manhã"
          value={horarioCafeManha}
          onChange={(e) => setHorarioCafeManha(e.target.value)}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Horário de Almoço"
          value={horarioAlmoco}
          onChange={(e) => setHorarioAlmoco(e.target.value)}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Horário de Jantar"
          value={horarioJantar}
          onChange={(e) => setHorarioJantar(e.target.value)}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Dias de Funcionamento"
          value={diasFuncionamento}
          onChange={(e) => setDiasFuncionamento(e.target.value)}
          fullWidth
          margin="normal"
          required
        />
        <Typography variant="h6" gutterBottom style={{ marginTop: '20px' }}>
          Endereço
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Rua"
              value={rua}
              onChange={(e) => setRua(e.target.value)}
              fullWidth
              margin="normal"
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Número"
              value={numero}
              onChange={(e) => setNumero(e.target.value)}
              fullWidth
              margin="normal"
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="CEP"
              value={cep}
              onChange={(e) => setCep(e.target.value)}
              fullWidth
              margin="normal"
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Cidade"
              value={cidade}
              onChange={(e) => setCidade(e.target.value)}
              fullWidth
              margin="normal"
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Estado"
              value={estado}
              onChange={(e) => setEstado(e.target.value)}
              fullWidth
              margin="normal"
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="País"
              value={pais}
              onChange={(e) => setPais(e.target.value)}
              fullWidth
              margin="normal"
              required
            />
          </Grid>
        </Grid>
        <Typography variant="h6" gutterBottom style={{ marginTop: '20px' }}>
          Pessoa Responsável
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Nome"
              value={nomeResponsavel}
              onChange={(e) => setNomeResponsavel(e.target.value)}
              fullWidth
              margin="normal"
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="CPF"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              fullWidth
              margin="normal"
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Telefone"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              fullWidth
              margin="normal"
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              margin="normal"
              required
            />
          </Grid>
        </Grid>
        <Button type="submit" variant="contained" color="primary" style={{ marginTop: '20px' }}>
          {id ? 'Salvar Alterações' : 'Adicionar Restaurante'}
        </Button>
      </form>
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

export default RestauranteForm;

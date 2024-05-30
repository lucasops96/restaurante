import React, { useState, useEffect } from 'react';
import { useParams, useNavigate,Link } from 'react-router-dom';
import { TextField, Button, Container, Typography } from '@mui/material';
import axios from 'axios';
import './EnderecoForm.css'

function EnderecoForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [viacep, setViaCep] = useState('');


  const [rua, setRua] = useState('');
  const [numero, setNumero] = useState('');
  const [cep, setCep] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [pais, setPais] = useState('');

  useEffect(() => {
    const fetchEndereco = async () =>{
      if (id) {
       try {
        const response = await axios.get(`https://demo6292057.mockable.io/enderecos/1`)
        const endereco = response.data;
          setRua(endereco.rua);
          setNumero(endereco.numero);
          setCep(endereco.cep);
          setCidade(endereco.cidade);
          setEstado(endereco.estado);
          setPais(endereco.pais);
       } catch (error) {
          console.error('Erro ao buscar o endereço:', error)
       }
      }

    };
    
    fetchEndereco();
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const enderecoAtualizado = {
      rua,
      numero,
      cep,
      cidade,
      estado,
      pais
    };

    try {
      if (id) {
        //await axios.put(`https://demo6292057.mockable.io/editar/endereco/${id}`, enderecoAtualizado);
        console.log('Endereço editado:', enderecoAtualizado);
      } else {
        //await axios.post('https://demo6292057.mockable.io/adicionar/endereco/', enderecoAtualizado);
        console.log('Endereço adicionado:', enderecoAtualizado);
      }
      navigate('/enderecos');
    } catch (error) {
      console.error('Erro ao adicionar ou editar o endereço:', error);
    }
  };

  const handleBuscarEndereco = async () => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${viacep}/json/`);
      const { logradouro, localidade, uf, cep } = response.data;
      setRua(logradouro);
      setCidade(localidade);
      setEstado(uf);
      setCep(cep);
      console.log(response.data);
    } catch (error) {
      console.error('Erro ao buscar endereço:', error);
    }
  };
  

  return (
    <Container>
      <Typography className="button-container" variant="h4" gutterBottom>
        <div>{id ? 'Editar Endereço' : 'Adicionar Endereço'}</div>
        {!id && (
            <>
            <TextField
                label="Usar Via CEP"
                value={viacep}
                onChange={(e) => setViaCep(e.target.value)}
                margin="normal"
            /> 
            <Button onClick={handleBuscarEndereco} variant="contained" color="primary">Buscar Endereço</Button>
            </>
        )}
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField label="Rua" value={rua} onChange={(e) => setRua(e.target.value)} fullWidth margin="normal" />
        <TextField label="Número" value={numero} onChange={(e) => setNumero(e.target.value)} fullWidth margin="normal" />
        <TextField label="CEP" value={cep} onChange={(e) => setCep(e.target.value)} fullWidth margin="normal" />
        <TextField label="Cidade" value={cidade} onChange={(e) => setCidade(e.target.value)} fullWidth margin="normal" />
        <TextField label="Estado" value={estado} onChange={(e) => setEstado(e.target.value)} fullWidth margin="normal" />
        <TextField label="País" value={pais} onChange={(e) => setPais(e.target.value)} fullWidth margin="normal" />
        <Button type="submit" variant="contained" color="primary">Salvar</Button>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/enderecos"
          style={{ marginLeft: '10px' }}
          >
          Voltar
      </Button>
      </form>
    </Container>
  );
}

export default EnderecoForm;

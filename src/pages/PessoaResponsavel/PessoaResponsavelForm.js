import React, { useState, useEffect } from 'react';
import { useParams, useNavigate,Link  } from 'react-router-dom';
import { TextField, Button, Container,Typography } from '@mui/material';
import { restApi } from '../../services/api';

function PessoaResponsavelForm(){
    const { id } = useParams();
    const navigate = useNavigate();

    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');

    useEffect(()=>{
        const fetchPessoaResponsavel = async () => {
            if (id) {
              try {
                const response = await restApi.get(`/pessoas/${id}`);
                const pessoaResponsavel = response.data;
                setNome(pessoaResponsavel.nome);
                setCpf(pessoaResponsavel.cpf);
                setTelefone(pessoaResponsavel.telefone);
                setEmail(pessoaResponsavel.email);
              } catch (error) {
                console.error('Erro ao buscar o Pessoa Responsável:', error);
              }
            }
          };
        
          fetchPessoaResponsavel();
    }, [id]);

    const handleSubmit = async (event)=>{
        event.preventDefault();
        const PessoaResponsavelAtualizado = {
            nome,
            cpf,
            telefone,
            email
        };
    
        try {
            if (id) {
                const response = await restApi.put(`/pessoas/${id}`, PessoaResponsavelAtualizado);
                console.log('Pessoa Responsável editado:', response.data , PessoaResponsavelAtualizado);
            } else {
                // Se não tiver um id, adicionar uma nova pessoa responsavel
                const response = await restApi.post('/pessoas', PessoaResponsavelAtualizado);
                console.log('Pessoa Responsável adicionado:', response.data ,PessoaResponsavelAtualizado);
            }
            navigate('/pessoas-responsaveis'); 
        } catch (error) {
            console.error('Erro ao adicionar ou editar o pessoa responsável:', error);
        }
    };

    return(
        <Container>
            <Typography variant="h4" gutterBottom>
                {id ? 'Editar Pessoa Responsável' : 'Adicionar Pessoa Responsável'}
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField label="Nome" value={nome} onChange={(e) => setNome(e.target.value)} fullWidth margin="normal" />
                <TextField label="CPF" value={cpf} onChange={(e) => setCpf(e.target.value)} fullWidth margin="normal" />
                <TextField label="Telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)} fullWidth margin="normal" />
                <TextField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} fullWidth margin="normal" />
                <Button type="submit" variant="contained" color="primary">Salvar</Button>
                <Button
                    variant="contained"
                    color="primary"
                    component={Link}
                    to="/pessoas-responsaveis"
                    style={{ marginLeft: '10px' }}
                    >
                    Voltar
                </Button>
            </form>
        </Container>
    );
};

export default PessoaResponsavelForm;

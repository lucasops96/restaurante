import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Typography, Button } from '@mui/material';
import { restApi } from '../../services/api';


function ExcluirPessoaResponsavel(){
    const { id , nome } = useParams();
    const navigate = useNavigate();

    const handleExcluirPessoaResponsavel = async ()=>{
        try {
            await restApi.delete(`/excluir/aluno/`);
            console.log('Pessoa Responsável excluído com sucesso',id);
            // Redirecionar de volta para a lista de alunos após excluir
            navigate('/pessoas-responsaveis');
        } catch (error) {
            console.error('Erro ao excluir o pessoa responsável:', error);
        }
    };

    const handleCancelarExclusao = () => {
        // Redirecionar de volta para a lista de pessoas responsaveis
        navigate('/pessoas-responsaveis');
    };

    return(
        <Container>
            <Typography variant="h4" gutterBottom>Excluir Pessoa Responsável {nome}</Typography>
            <Typography variant="body1">Tem certeza que deseja excluir esta pessoa?</Typography>
            <Button onClick={handleExcluirPessoaResponsavel} variant="contained" color="error" style={{ marginRight: '10px',marginTop: '20px' }}>
                Excluir
            </Button>
            <Button onClick={handleCancelarExclusao} variant="outlined" color="primary" style={{ marginTop: '20px' }}>
                Cancelar
            </Button>
        </Container>
    );
};

export default ExcluirPessoaResponsavel;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import './PessoaResponsavelList.css'

function PessoaResponsavelList(){
    const [pessoasResponsaveis,setPessoasResponsaveis] = useState([]);

    useEffect(()=>{
        const fetchData = async ()=>{
            try {
                const response = await axios.get('https://demo6292057.mockable.io/pessoas/');
                setPessoasResponsaveis(response.data);
            } catch (error) {
                console.error('Erro ao buscar os dados:', error);
            }
        };

        fetchData();
    }, []);

    return(
        <div>
            <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/pessoas-responsaveis/novo"
                style={{ marginBottom: '20px' }}
            >
                Adicionar Pessoa Responsável
            </Button>
            <TableContainer component={Paper}>
                <Table className="pessoa-table">
                    <TableHead>
                        <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Nome</TableCell>
                        <TableCell>CPF</TableCell>
                        <TableCell>Telefone WhatsApp</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Ações</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {pessoasResponsaveis.map((pessoaResponsavel) => (
                        <TableRow key={pessoaResponsavel.id}>
                            <TableCell>{pessoaResponsavel.id}</TableCell>
                            <TableCell>{pessoaResponsavel.nome}</TableCell>
                            <TableCell>{pessoaResponsavel.cpf}</TableCell>
                            <TableCell>{pessoaResponsavel.telefone}</TableCell>
                            <TableCell>{pessoaResponsavel.email}</TableCell>
                            <TableCell className="actions">
                            <Button component={Link} to={`/pessoas-responsaveis/${pessoaResponsavel.id}`}>Editar</Button>
                            <Button component={Link} to={`/pessoas-responsaveis/${pessoaResponsavel.id}/excluir/${pessoaResponsavel.nome}`}>Excluir</Button>
                            </TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default PessoaResponsavelList;

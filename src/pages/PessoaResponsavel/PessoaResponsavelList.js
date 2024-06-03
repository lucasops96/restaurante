import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import { Link , useNavigate} from 'react-router-dom';
import './PessoaResponsavelList.css'
import { restApi } from '../../services/api';

function PessoaResponsavelList(){
    const [pessoasResponsaveis,setPessoasResponsaveis] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        const fetchData = async ()=>{
            try {
                const response = await restApi.get('/pessoas');
                setPessoasResponsaveis(response.data);
            } catch (error) {
                console.error('Erro ao buscar os dados:', error);
            }
        };

        fetchData();
    }, []);

    const handleRowClick = (pessoaResponsavel)=>{
        navigate(`/pessoas-responsaveis/${pessoaResponsavel.id}/detalhes`,{ state: { pessoaResponsavel } });
    }; 

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
                        <TableRow key={pessoaResponsavel.id} 
                        onClick={()=> handleRowClick(pessoaResponsavel)} 
                        style={{ cursor: 'pointer' }}
                        >
                            <TableCell>{pessoaResponsavel.id}</TableCell>
                            <TableCell>{pessoaResponsavel.nome}</TableCell>
                            <TableCell>{pessoaResponsavel.cpf}</TableCell>
                            <TableCell>{pessoaResponsavel.telefone}</TableCell>
                            <TableCell>{pessoaResponsavel.email}</TableCell>
                            <TableCell className="actions">
                            <Button 
                            component={Link} 
                            to={`/pessoas-responsaveis/${pessoaResponsavel.id}`}
                            onClick={(e) => e.stopPropagation()}
                            >Editar</Button>
                            <Button 
                            component={Link} 
                            to={`/pessoas-responsaveis/${pessoaResponsavel.id}/excluir/${pessoaResponsavel.nome}`}
                            onClick={(e) => e.stopPropagation()}
                            >Excluir</Button>
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

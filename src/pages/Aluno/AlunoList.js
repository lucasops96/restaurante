import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import './AlunoList.css'; // Importar o arquivo CSS

function AlunoList() {
    const [alunos, setAlunos] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://demo6292057.mockable.io/alunos/');
                setAlunos(response.data);
            } catch (error) {
                console.error('Erro ao buscar os dados:', error);
            }
        };

        fetchData();
    }, []);

    const handleRowClick = (aluno) => {
      navigate(`/alunos/${aluno.id}/detalhes`, { state: { aluno } });
    };

  return (
    <div>
      <Button 
        variant="contained"
        color="primary"
        component={Link}
        to="/alunos/novo"
        style={{ marginBottom: '20px' }}
      >
        Adicionar Aluno
      </Button>
      <TableContainer component={Paper}>
        <Table className="aluno-table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Matrícula</TableCell>
              <TableCell>Nome</TableCell>
              <TableCell>CPF</TableCell>
              <TableCell>ID Endereço</TableCell>
              <TableCell>Curso</TableCell>
              <TableCell>Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {alunos.map((aluno) => (
              <TableRow key={aluno.id} onClick={() => handleRowClick(aluno)} style={{ cursor: 'pointer' }}>
                <TableCell>{aluno.id}</TableCell>
                <TableCell>{aluno.matricula}</TableCell>
                <TableCell>{aluno.nome}</TableCell>
                <TableCell>{aluno.cpf}</TableCell>
                <TableCell>{aluno.endereco.id} - {aluno.endereco.rua}</TableCell>
                <TableCell>{aluno.curso}</TableCell>
                <TableCell className="actions">
                  <Button component={Link} to={`/alunos/${aluno.id}`} onClick={(e) => e.stopPropagation()}>Editar</Button>
                  <Button component={Link} to={`/alunos/${aluno.id}/excluir/${aluno.nome}`} onClick={(e) => e.stopPropagation()}>Excluir</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default AlunoList;

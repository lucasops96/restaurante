import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import './EnderecoList.css';
import { restApi } from '../../services/api';

function EnderecoList() {
  const [enderecos, setEnderecos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await restApi.get('/enderecos');
        setEnderecos(response.data);
      } catch (error) {
        console.error('Erro ao buscar os dados:', error);
      }
    };

    fetchData();
  }, []);

  const handleRowClick = (endereco)=>{
    navigate(`/enderecos/${endereco.id}/detalhes`,{ state: { endereco } });
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/enderecos/novo"
        style={{ marginBottom: '20px' }}
      >
        Adicionar Endereço
      </Button>
      <TableContainer component={Paper}>
        <Table className="endereco-table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Rua</TableCell>
              <TableCell>Número</TableCell>
              <TableCell>CEP</TableCell>
              <TableCell>Cidade</TableCell>
              <TableCell>Estado</TableCell>
              <TableCell>País</TableCell>
              <TableCell>Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {enderecos.map((endereco) => (
              <TableRow key={endereco.id} onClick={() => handleRowClick(endereco)} style={{ cursor: 'pointer' }}>
                <TableCell>{endereco.id}</TableCell>
                <TableCell>{endereco.rua}</TableCell>
                <TableCell>{endereco.numero}</TableCell>
                <TableCell>{endereco.cep}</TableCell>
                <TableCell>{endereco.cidade}</TableCell>
                <TableCell>{endereco.estado}</TableCell>
                <TableCell>{endereco.pais}</TableCell>
                <TableCell className="actions">
                  <Button 
                  component={Link} 
                  to={`/enderecos/${endereco.id}`}
                  onClick={(e) => e.stopPropagation()}
                  >Editar</Button>
                  <Button 
                  component={Link} 
                  to={`/enderecos/${endereco.id}/excluir/${endereco.rua}`}
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
}

export default EnderecoList;

import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import './RestauranteList.css';
import { restApi } from '../../services/api';

function RestauranteList() {
  const [restaurantes, setRestaurantes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await restApi.get('/restaurantes');
        setRestaurantes(response.data);
      } catch (error) {
        console.error('Erro ao buscar os dados:', error);
      }
    };

    fetchData();
  }, []);

  const handleRowClick = (restaurante) => {
    navigate(`/restaurantes/${restaurante.id}/detalhes`, { state: { restaurante } });
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/restaurantes/novo"
        style={{ marginBottom: '20px' }}
      >
        Adicionar Restaurante
      </Button>
      <TableContainer component={Paper}>
        <Table className="restaurante-table">
          <TableHead>
            <TableRow>
              <TableCell>Nome do Restaurante</TableCell>
              <TableCell>Endereço</TableCell>
              <TableCell>Pessoa Responsável</TableCell>
              <TableCell>Capacidade de Refeições</TableCell>
              <TableCell>Horário de Café da Manhã</TableCell>
              <TableCell>Horário de Almoço</TableCell>
              <TableCell>Horário de Jantar</TableCell>
              <TableCell>Dias de Funcionamento</TableCell>
              <TableCell>Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {restaurantes.map((restaurante) => (
              <TableRow key={restaurante.id} onClick={() => handleRowClick(restaurante)} style={{ cursor: 'pointer' }}>
                <TableCell>{restaurante.nome}</TableCell>
                <TableCell>{restaurante.endereco.id} - {restaurante.endereco.rua} </TableCell>
                <TableCell>{restaurante.pessoaResponsavel.id} - {restaurante.pessoaResponsavel.nome}</TableCell>
                <TableCell>{restaurante.capacidadeRefeicoes}</TableCell>
                <TableCell>{restaurante.horarioCafeManha}</TableCell>
                <TableCell>{restaurante.horarioAlmoco}</TableCell>
                <TableCell>{restaurante.horarioJantar}</TableCell>
                <TableCell>{restaurante.diasFuncionamento}</TableCell>
                <TableCell className="actions">
                  <Button
                    component={Link}
                    to={`/restaurantes/${restaurante.id}`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    Editar
                  </Button>
                  <Button
                    component={Link}
                    to={`/restaurantes/${restaurante.id}/excluir/${restaurante.nome}`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    Excluir
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default RestauranteList;

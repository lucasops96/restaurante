import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';

import AlunoList from './pages/Aluno/AlunoList';
import AlunoForm from './pages/Aluno/AlunoForm';
import ExcluirAluno from './pages/Aluno/ExcluirAluno';
import AlunoDetails from './pages/Aluno/AlunoDetails';

import EnderecoList from './pages/Endereco/EnderecoList';
import EnderecoForm from './pages/Endereco/EnderecoForm';
import ExcluirEndereco from './pages/Endereco/ExcluirEndereco';
import EnderecoDetails from './pages/Endereco/EnderecoDetails';

import PessoaResponsavelList from './pages/PessoaResponsavel/PessoaResponsavelList';
import PessoaResponsavelForm from './pages/PessoaResponsavel/PessoaResponsavelForm';
import ExcluirPessoaResponsavel from './pages/PessoaResponsavel/ExcluirPessoaResponsavel';
import PessoaResponsavelDetails from './pages/PessoaResponsavel/PessoaResponsavelDetails';

import RestauranteList from './pages/Restaurante/RestauranteList';
import RestauranteDetails from './pages/Restaurante/RestauranteDetails';
import RestauranteForm from './pages/Restaurante/RestauranteForm';
import ExcluirRestaurante from './pages/Restaurante/ExcluirRestaurante';

import './App.css';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Router>
      <div className="app">
        <Navbar toggleSidebar={toggleSidebar} />
        {sidebarOpen && <Sidebar />}
        <div className="content">
          <Routes>
            {/* <Route path="/" element={<div>Home</div>} /> */}
            <Route path='/' element={<RestauranteList />} />
            <Route path="/restaurantes/novo" element={<RestauranteForm />} />
            <Route path="/restaurantes/:id" element={<RestauranteForm />} />
            <Route path="/restaurantes/:id/detalhes" element={<RestauranteDetails />} />
            <Route path="/restaurantes/:id/excluir/:nome" element={<ExcluirRestaurante />} />

            <Route path="/alunos" element={<AlunoList />} />
            <Route path="/alunos/novo" element={<AlunoForm />} />
            <Route path="/alunos/:id" element={<AlunoForm />} />
            <Route path="/alunos/:id/excluir/:nome" element={<ExcluirAluno />} />
            <Route path="/alunos/:id/detalhes" element={<AlunoDetails />} />

            <Route path="/enderecos" element={<EnderecoList />} />
            <Route path="/enderecos/novo" element={<EnderecoForm />} />
            <Route path="/enderecos/:id" element={<EnderecoForm />} />
            <Route path="/enderecos/:id/excluir/:rua" element={<ExcluirEndereco />} />
            <Route path="/enderecos/:id/detalhes" element={<EnderecoDetails />} />

            <Route path='/pessoas-responsaveis' element={<PessoaResponsavelList />} />
            <Route path='/pessoas-responsaveis/novo' element={<PessoaResponsavelForm />} />
            <Route path='/pessoas-responsaveis/:id' element={<PessoaResponsavelForm />} />
            <Route path='/pessoas-responsaveis/:id/excluir/:nome' element={<ExcluirPessoaResponsavel />} />
            <Route path='/pessoas-responsaveis/:id/detalhes' element={<PessoaResponsavelDetails />} />
            
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;


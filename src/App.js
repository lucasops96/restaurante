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

import PessoaResponsavelList from './pages/PessoaResponsavel/PessoaResponsavelList';
import PessoaResponsavelForm from './pages/PessoaResponsavel/PessoaResponsavelForm';
import ExcluirPessoaResponsavel from './pages/PessoaResponsavel/ExcluirPessoaResponsavel';

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
            <Route path="/" element={<div>Home</div>} />
            <Route path="/alunos" element={<AlunoList />} />
            <Route path="/alunos/novo" element={<AlunoForm />} />
            <Route path="/alunos/:id" element={<AlunoForm />} />
            <Route path="/alunos/:id/excluir/:nome" element={<ExcluirAluno />} />
            <Route path="/alunos/:id/detalhes" element={<AlunoDetails />} />

            <Route path="/enderecos" element={<EnderecoList />} />
            <Route path="/enderecos/novo" element={<EnderecoForm />} />
            <Route path="/enderecos/:id" element={<EnderecoForm />} />
            <Route path="/enderecos/:id/excluir/:rua" element={<ExcluirEndereco />} /> 

            <Route path='/pessoas-responsaveis' element={<PessoaResponsavelList />} />
            <Route path='/pessoas-responsaveis/novo' element={<PessoaResponsavelForm />} />
            <Route path='/pessoas-responsaveis/:id' element={<PessoaResponsavelForm />} />
            <Route path='/pessoas-responsaveis/:id/excluir/:nome' element={<ExcluirPessoaResponsavel />} />
            
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;


import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';

import AlunoList from './pages/Aluno/AlunoList';
import AlunoForm from './pages/Aluno/AlunoForm';
import ExcluirAluno from './pages/Aluno/ExcluirAluno';

import EnderecoList from './pages/Endereco/EnderecoList';
import EnderecoForm from './pages/Endereco/EnderecoForm';
import ExcluirEndereco from './pages/Endereco/ExcluirEndereco';

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

            <Route path="/enderecos" element={<EnderecoList />} />
            <Route path="/enderecos/novo" element={<EnderecoForm />} />
            <Route path="/enderecos/:id" element={<EnderecoForm />} />
            <Route path="/enderecos/:id/excluir/:rua" element={<ExcluirEndereco />} /> 
            
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;


# Projeto Restaurante para disciplina de programação web

# Para startar o projeto
npm install
npm start 

# Especificação do projeto da disciplina de PROG WEB.
● Restaurante
○ Id: Integer (Auto-increment)
○ Nome do Restaurante: String(255);
○ Endereco: Endereco;
■ Id: Integer (Auto-increment)
■ Rua: String (255);
■ Número: String (8);
■ CEP: String(14);
■ Cidade: String (50);
■ Estado: String (50);
■ País: String (50);
○ Pessoa Responsável: Pessoa;
■ Id: Integer (Auto-increment)
■ Nome: String(255);
■ CPF: String(15);
■ Telefone_whatsapp: String(255);
■ Email: String(255);
○ Capacidade de Refeições: Integer;
○ Horário de atendimento do café da manhã: String(10);
○ Horário de atendimento do almoço: String(10);
○ Horário de atendimento do jantar: String(10);
○ Dias de funcionamento: String(255);
● Aluno
○ Id: Integer (Auto-increment)
○ Matrícula: Integer;
○ Nome completo: String (255);
○ CPF: String (13);
○ Endereço: Endereco;
○ Curso: String (255);

Roteiro das Atividades
1. Criar os menus e as interfaces de Gerenciamento de Restaurante, Pessoa
Responsável e Endereço baseados no menu e na interface de
Gerenciamento de Alunos.
2. Desenvolver as chamadas remotas utilizando o axios e os respectivos
tratamentos de retorno para o CRUD (Criação, Atualização, Remoção e
Consulta) completo de Restaurantes, Pessoas Responsáveis, Alunos e
Endereços.
3. Adicionar o componente de lista na coluna de endereço da MaterialTable na
interface de Gerencimento de Restaurantes e Alunos. Representação: id - rua
(ex.: 1 - Rua do Fullstack)
4. Adicionar o componente de lista na coluna Pessoa Responsável da
MaterialTable na interface de Gerencimento de Restaurantes.
Representação: id - nomeResponsavel (ex.: 1 - Demetrio Mestre)
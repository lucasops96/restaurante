# Projeto Restaurante para disciplina de programação web
- [API feita com Spring Boot ](https://github.com/ViniciusNobrega21/restaurante-api)
# Para startar o projeto
npm install
npm start 

# Especificação do projeto da disciplina de PROG WEB.
## Estrutura do Banco de Dados

### Restaurante
```json
{
  "id": 1,
    "nome": "REST 1",
    "endereco": {
        "id": 1,
        "rua": "Rua Minds",
        "numero": 456,
        "cep": 58701010,
        "cidade": "Patos",
        "estado": "PB",
        "pais": "Brasil"
    },
    "pessoaResponsavel": {
        "id": 1,
        "nome": "Sarah",
        "cpf": 32432423,
        "telefone": 88995637463,
        "email": "sarah1@email.com"
    },
    "capacidadeRefeicoes": 300,
    "horarioCafeManha": "7:30 am",
    "horarioAlmoco": "11:40 am",
    "horarioJantar": "18:00 pm",
    "diasFuncionamento": "segunda á sexta"
}
```
### Aluno
```json
{
   "id":"1",
    "matricula":"10",
    "nome":"CREIVERSON VIEIRA",
    "cpf":"365.456.678-30",
    "endereco": {
        "id": 1,
        "rua": "Rua Minds",
        "numero": 456,
        "cep": 58701010,
        "cidade": "Patos",
        "estado": "PB",
        "pais": "Brasil"
    },
    "curso":"Computacao"
}
```

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
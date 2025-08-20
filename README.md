Fullstack Todo - Backend

Este é o backend do projeto Fullstack Todo List, desenvolvido com foco em boas práticas, SOLID e design patterns para garantir escalabilidade e manutenção a longo prazo.

O sistema expõe uma API REST para gerenciamento de tarefas (CRUD), conectada a um banco de dados PostgreSQL hospedado no Supabase e deployada no Render.

Tecnologias Utilizadas

Node.js + TypeScript → robustez e tipagem estática

Express.js → framework web minimalista

Prisma ORM → abstração e segurança no acesso ao banco de dados

Supabase (PostgreSQL) → banco de dados gerenciado

Dotenv → gerenciamento de variáveis de ambiente

Cors → configuração de segurança e comunicação entre front/back

Render → deploy contínuo do backend

Arquitetura & Boas Práticas

SOLID Principles → código desacoplado, de fácil extensão e manutenção

Repository Pattern → separação clara entre regras de negócio e persistência

Services Layer → lógica de negócio isolada das rotas

Separation of Concerns → controllers cuidam da orquestração, services da regra, repos da persistência

Environment Configuration → uso de .env para dados sensíveis (como DATABASE_URL)

REST API Design → endpoints claros, previsíveis e versionáveis

Estrutura do Projeto
src/
 ├── controllers/     # Controladores responsáveis por orquestrar requests/responses
 ├── routes/          # Definição das rotas da API
 ├── services/        # Camada de regras de negócio
 ├── repositories/    # Camada de persistência de dados (Prisma ORM)
 ├── prisma/          # Schema do banco de dados
 ├── index.ts         # Ponto de entrada da aplicação

Endpoints
Método	Rota	Descrição
GET	/tasks	Lista todas as tarefas
POST	/tasks	Cria uma nova tarefa
PUT	/tasks/:id	Atualiza uma tarefa pelo ID
DELETE	/tasks/:id	Remove uma tarefa pelo ID
Como Rodar Localmente

Clone o repositório

git clone https://github.com/YanPedro18/fullstack-todo-backend-node-supabase.git
cd fullstack-todo-backend-node-supabase


Instale as dependências

npm install


Configure o .env
Crie um arquivo .env na raiz do projeto:

DATABASE_URL="sua-string-do-supabase"
CORS_ORIGIN="http://localhost:5173"
PORT=3001


Execute as migrações do Prisma

npx prisma migrate dev


Rode a API

npm run dev


Ou:

npx tsx src/index.ts

Deploy

O backend está hospedado no Render e conectado ao Supabase.

API pública:
https://fullstack-todo-backend-node-supabase.onrender.com

Próximos Passos

Backend funcional

Deploy no Render

Conexão com Supabase

Testes unitários e integração

CI/CD com GitHub Actions

Desenvolvido por Yan Pedro seguindo boas práticas de desenvolvimento backend.

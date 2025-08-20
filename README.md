# To-do App Backend

Este é o backend da aplicação de lista de tarefas. Ele gerencia as operações do banco de dados e a lógica de negócios, servindo uma API RESTful para o frontend.

## Tecnologias

* **Node.js**: Ambiente de execução JavaScript.
* **Express**: Framework web para construir a API.
* **Prisma ORM**: ORM (Object-Relational Mapper) para interagir com o banco de dados.
* **Supabase**: Backend-as-a-Service utilizado para hospedagem do banco de dados PostgreSQL.
* **SQLite (apenas em desenvolvimento)**: Banco de dados leve para uso local.
* **DDD (Domain-Driven Design)**: Boas práticas para modelar a lógica de negócios.
* **Design Pattern MVC (Model-View-Controller)**: Arquitetura utilizada para organizar o código.
* **SOLID**: Princípios de design de software para escrita de código limpo e coeso.

## Como Rodar o Backend

Siga estas instruções para configurar e rodar o projeto em sua máquina local.

### 1. Pré-requisitos

Certifique-se de ter o [Node.js](https://nodejs.org/) e o [npm](https://www.npmjs.com/) instalados em sua máquina.

### 2. Configuração do Ambiente

1.  Clone este repositório:
    ```bash
    git clone [https://github.com/seu-usuario/seu-repositorio.git](https://github.com/seu-usuario/seu-repositorio.git)
    cd seu-repositorio
    ```

2.  Instale as dependências:
    ```bash
    npm install
    ```

3.  Crie um arquivo `.env` na raiz do projeto e configure as variáveis de ambiente. Você pode usar o arquivo `.env.example` como modelo.

    **Exemplo de `.env` (para rodar com Supabase)**:
    ```env
    # URL de conexão do Supabase (use a porta 6543 para o pooler)
    DATABASE_URL="postgresql://[user]:[password]@[host]:6543/[database]"
    ```
    *Substitua as informações com as credenciais do seu projeto no Supabase.*

    ---
    **Exemplo de `.env` (para rodar localmente com SQLite):**
    ```env
    DATABASE_URL="file:./dev.db"
    ```
    *Neste caso, não é necessário se conectar ao Supabase, pois o banco de dados será um arquivo local.*
    ---

4.  Configure e aplique as migrações do banco de dados (se você não tiver um banco de dados com a estrutura correta):
    ```bash
    npx prisma migrate dev
    ```

### 3. Execução

Para iniciar o servidor em modo de desenvolvimento:


npm run dev
O servidor estará rodando em http://localhost:3000 por padrão.

4. Endpoints da API
GET /api/tasks: Retorna todas as tarefas.

POST /api/tasks: Cria uma nova tarefa.

PUT /api/tasks/:id: Atualiza uma tarefa existente.

DELETE /api/tasks/:id: Deleta uma tarefa.

Sobre a Arquitetura
Este projeto foi desenvolvido seguindo as boas práticas de DDD (Domain-Driven Design) para a organização da lógica de negócios, o padrão MVC (Model-View-Controller) para estruturar o código de forma modular e os princípios SOLID para a escrita de código limpo e coeso.

Model: Define a estrutura dos dados e a lógica de interação com o banco de dados (gerenciado pelo Prisma).

Controller: Recebe as requisições HTTP, coordena a lógica de negócios e envia a resposta.

View: Não se aplica diretamente a este backend, pois ele serve apenas a API. A "view" é o frontend (React) que consome esta API.

SOLID:

Single Responsibility Principle (SRP): Cada classe ou módulo tem apenas uma responsabilidade clara.

Open/Closed Principle (OCP): As entidades de software são abertas para extensão, mas fechadas para modificação.

Liskov Substitution Principle (LSP): Os subtipos devem ser substituíveis pelos seus tipos base.

Interface Segregation Principle (ISP): Clientes não devem ser forçados a depender de interfaces que não utilizam.

Dependency Inversion Principle (DIP): Módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem depender de abstrações.


# Glina Backend

Backend do MVP da Glina. Projeto em Node.js + TypeScript + Express + Prisma, com banco PostgreSQL via Docker.

---

## ✅ Requisitos

- Node.js 18+
- pnpm (https://pnpm.io/)
- Docker (para o banco de dados)

---

## 🚀 Primeiros Passos

### 1. Clone o repositório e entre na pasta:

```bash
git clone https://github.com/seu-usuario/glina-backend.git
cd glina-backend
```

### 2. Instale as dependências:

```bash
pnpm install
```

---

## 🐘 Banco de Dados (PostgreSQL via Docker)

Se ainda não estiver rodando o banco:

```bash
docker run --name glina-db   -e POSTGRES_USER=glina   -e POSTGRES_PASSWORD=glina   -e POSTGRES_DB=glina   -p 5432:5432   -d postgres
```

---

## ⚙️ Configuração `.env`

Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:

```env
DATABASE_URL=postgresql://glina:glina@localhost:5432/glina
JWT_SECRET=qualquercoisasupersecreta
```

---

## 🧱 Comandos principais

### Gerar Prisma Client:

```bash
pnpm generate
```

### Criar as tabelas no banco:

```bash
pnpm migrate
```

### Popular o banco com dados mockados:

```bash
pnpm seed
```

### Iniciar o servidor local:

```bash
pnpm dev
```

---

## 📡 Endpoints disponíveis

| Método | Endpoint               | Descrição                          |
|--------|------------------------|------------------------------------|
| POST   | `/auth/signup`         | Cadastro de usuário                |
| POST   | `/auth/login`          | Login com retorno de JWT           |
| GET    | `/products`            | Listar produtos                    |
| POST   | `/products`            | Criar novo produto                 |
| GET    | `/investments`         | Listar investimentos               |
| POST   | `/investments`         | Criar investimento (mock offshore) |

---

## 🧠 Estrutura de Pastas

```
glina-backend/
├── prisma/
│   ├── schema.prisma
│   └── seed.ts
├── src/
│   ├── config/          # Configuração do Prisma
│   ├── controllers/     # Lógica dos endpoints
│   ├── middlewares/     # Middleware de autenticação
│   ├── services/        # Serviços externos (ex: offshore)
│   ├── utils/           # Logger
│   └── server.ts        # Entrypoint da aplicação
└── .env                 # Variáveis de ambiente
```

---

## 🛡 Segurança

- JWT para autenticação
- Hash de senha com `bcryptjs`
- Proteção mínima com middleware de autenticação
- Variáveis sensíveis em `.env`

---

## 📌 Observações

- Este projeto é um MVP e não possui tratamento completo de erros ou validações.
- Para produção, recomenda-se implementar:
  - Validações com Zod ou Joi
  - Testes automatizados
  - Logs estruturados
  - Monitoramento e Sentry

---

Desenho arquitetural do MVP --> https://excalidraw.com/#json=f-JZI-qTEgTY7nnJSkrzm,Eyrm4bdLi6JGXMH_voKcLA 

Feito com ❤️ para a Glina.

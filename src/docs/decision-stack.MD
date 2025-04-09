
# 🧠 Racional de Arquitetura e Tecnologias Utilizadas – Glina MVP

O MVP da Glina foi projetado com foco em **velocidade de desenvolvimento, simplicidade operacional, segurança e escalabilidade futura**. A seguir explico as decisões técnicas e por que cada tecnologia foi escolhida.

---

## 🔧 Backend — Node.js + TypeScript + Serverless Framework

### Por que Node.js + TypeScript?
- Permite alta produtividade com uma curva de aprendizado suave.
- Ecossistema maduro com bibliotecas robustas.
- TypeScript oferece segurança com tipagem estática, reduzindo bugs e aumentando a confiabilidade do código.
- A equipe técnica (atual e futura) tende a ter familiaridade com esse stack.

### Por que Serverless Framework (com AWS Lambda)?
- Ideal para MVPs: permite escalar sob demanda, sem precisar manter infraestrutura.
- Custo zero quando não há uso.
- Foco em escrever código de negócio, deixando o provisionamento e deployment por conta do framework.
- Facilita deploys futuros para ambientes como AWS ou Vercel.

---

## 🧬 Banco de Dados — PostgreSQL + Prisma ORM

### Por que PostgreSQL?
- É um banco relacional poderoso, confiável e com suporte a tipos complexos, transações, JSON, etc.
- Tem suporte excelente na nuvem (RDS, Supabase, Neon, etc).

### Por que Prisma?
- Oferece tipagem forte, DX excelente e geração automática de clientes fortemente tipados.
- Suporta `migrations`, `seed`, validações, e evita SQL injection.
- Ideal para um sistema que precisa evoluir rapidamente com segurança.

---

## 🔑 Autenticação — JWT

### Por que JWT e não Cognito (por enquanto)?
- JWT é simples de implementar e suficiente para as necessidades de um MVP.
- Cognito adiciona complexidade e custo inicial (ideal em estágios futuros).
- Tokens são gerados e verificados no backend, com expiração e verificação via middleware.

---

## 📦 Containers — Docker + Docker Compose

### Por que usar Docker?
- Garante que qualquer pessoa consiga rodar o projeto localmente com um simples `docker compose up`.
- Elimina problemas de “funciona na minha máquina”.
- Permite simular a infraestrutura de produção localmente (API + banco + frontend).

---

## 🧑‍💻 Frontend — Next.js (React) + TypeScript

### Por que Next.js?
- Framework maduro e pronto para produção.
- Suporta SSR, API Routes e fácil deploy na Vercel.
- Times modernos já usam amplamente.

### Por que TypeScript no frontend também?
- Unificação da stack com o backend.
- Tipagem ajuda a reduzir bugs em integração com a API.
- Permite escalar o time mantendo consistência de código.

---

## 🌐 Integração com Parceiros (mock)

- As transações financeiras são feitas via **parceiros externos** (por exemplo, serviços de offshore investment).
- Neste MVP, as chamadas foram isoladas em uma camada de integração (`services/parceiros`) para facilitar futura substituição por APIs reais.
- Esse design permite mockar comportamentos agora e evoluir sem reescrever regras de negócio.

---

## 🔒 Segurança Mínima

- Dados sensíveis como senhas são criptografados com `bcrypt`.
- JWT com expiração e assinatura segura (`JWT_SECRET`).
- Separação clara de permissões: usuários e admins.
- Estrutura pronta para evoluir para compliance LGPD e GDPR (ex: logs, consentimento, exclusão de dados).

---

## 🧩 Conclusão

O stack foi pensado para **acelerar o tempo de entrega sem sacrificar a segurança, a legibilidade e a escalabilidade futura**.  
Cada escolha tem justificativa clara dentro do estágio atual da Glina, mas também aponta para o crescimento da empresa com bases sólidas.
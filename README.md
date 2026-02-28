# 🧪 SQLSandbox

A full-stack SQL playground where users can safely run SQL queries in a sandbox PostgreSQL database and view results instantly in a modern web UI.

This project simulates a lightweight SQL editor similar to online platforms and is built with a scalable full-stack architecture.

---

# 🚀 Features

- Run SQL queries in sandbox PostgreSQL database
- Safe query execution
- Store questions & query history in MongoDB Atlas
- Modern SQL editor UI
- Real-time query results
- Clean modular backend
- Zustand state management
- REST API architecture

---

# 🏗️ Tech Stack

## 🔙 Backend
- **Node.js + TypeScript** → scalable & type-safe backend
- **Express.js** → REST API server
- **MongoDB Atlas** → store questions/history
- **PostgreSQL** → SQL sandbox execution database
- **Prisma ORM** → PostgreSQL ORM & schema
- **Axios** → API handling

## 🎨 Frontend
- **React (Vite)** → fast frontend tooling
- **SCSS** → modular styling
- **Zustand** → global state management
- **Axios** → backend communication


# ⚙️ Environment Variables Setup

## 🔐 Important
`.env` files are not committed for security reasons.  
Use `.env.example` to create your own `.env`.

---

## 🖥 Backend .env

Create file:

```
backend/.env
```

Copy from `.env.example`:


---

## 💻 Frontend .env

Create file:

```
frontend/.env
```
---

# 🧑‍💻 Project Setup Instructions

## 1️⃣ Clone Repository
```bash
git clone https://github.com/yourusername/sqlSandbox.git
cd sqlSandbox
```

---

# 🔧 Backend Setup

### Install dependencies
```bash
cd backend
npm install
```

### Setup Prisma
```bash
npx prisma generate
npx prisma migrate dev
```

### Run backend
```bash
npm run dev
```

Backend runs on:
```
http://localhost:8080
```

---

# 💻 Frontend Setup

### Install dependencies
```bash
cd frontend
npm install
```

### Run frontend
```bash
npm run dev
```

Frontend runs on:
```
http://localhost:3000
```

---

# 🗄️ Database Setup

## MongoDB Atlas
1. Create MongoDB Atlas cluster
2. Create database user
3. Whitelist IP (0.0.0.0/0 for development)
4. Copy connection string → paste in `.env`

---

## PostgreSQL Setup (Local Sandbox)

Install PostgreSQL:
```bash
sudo apt install postgresql
```

Create database:
```sql
CREATE DATABASE sqlsandbox;
```

Update `.env` with database URL.

---

# 🔄 API Flow

```
Frontend (React + Zustand)
        ↓ axios
Backend (Node + TS)
        ↓
PostgreSQL (Run SQL Queries)
MongoDB Atlas (Store questions/history)
```

---
### Folder structure
```

└── 📁sql-sandbox
    └── 📁client
        └── 📁public
            ├── vite.svg
        └── 📁src
            └── 📁assets
                ├── react.svg
            └── 📁components
                ├── Editor.tsx
                ├── Question.tsx
                ├── Sidebar.tsx
            └── 📁pages
                ├── Home.tsx
            └── 📁store
                ├── queryStore.ts
                ├── QuestionStore.ts
            └── 📁styles
                ├── _editor.scss
                ├── _home.scss
                ├── _layout.scss
                ├── _question.scss
                ├── _sidebar.scss
            ├── App.tsx
            ├── Layout.tsx
            ├── main.tsx
    └── 📁server
        └── 📁prisma
            ├── schema.prisma
        └── 📁src
            └── 📁configs
                ├── query.ts
            └── 📁controllers
                ├── aiContoller.ts
                ├── queryController.ts
                ├── questionController.ts
                ├── userController.ts
            └── 📁db
                ├── postgres.ts
            └── 📁genAI
                ├── ai.ts
            └── 📁routes
                ├── aiRoutes.ts
                ├── queryRoutes.ts
                ├── questionRoutes.ts
                ├── userRoutes.ts
            └── 📁utils
                ├── prisma.ts
            ├── index.ts
```
---

# 🧠 Technology Choices Explanation

## Why Node.js + TypeScript?
- Type safety
- Scalable architecture
- Industry standard backend stack

## Why PostgreSQL for sandbox?
- Best for relational queries
- Supports joins, subqueries, aggregations
- Real SQL practice environment

## Why MongoDB Atlas?
- Flexible schema
- Store dynamic data (questions/history)
- Easy cloud setup

## Why Prisma ORM?
- Type-safe queries
- Easy migrations
- Works perfectly with PostgreSQL

## Why React + Vite?
- Fast dev server
- Modern frontend tooling
- Clean component architecture

## Why Zustand?
- Lightweight state management
- Minimal boilerplate
- Faster than Redux

## Why SCSS?
- Modular styling
- Nested CSS support
- Clean maintainable UI

---

# 🔐 Security Notes
- SQL runs only on sandbox PostgreSQL
- No production DB exposed
- Environment variables secured
- `.env` ignored via `.gitignore`

---


# 👨‍💻 Author

**Lochan Saroy**  
Full Stack Developer (MERN + AI)  
India 🇮🇳

---

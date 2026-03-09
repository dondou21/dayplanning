# MyTodo - Full Stack Task Management System

A premium, full-stack task management application built with **NestJS**, **React**, and **PostgreSQL**. Designed for productivity with real-time analytics and a sleek, modern interface.

## 🚀 Live Demo
The project is deployed on **Render**:
- **Backend API**: Deployed as a Web Service.
- **Frontend Site**: Deployed as a Static Site.

## 🛠️ Tech Stack

### Frontend
- **React 19** & **Vite**: Ultra-fast development and optimized production builds.
- **Tailwind CSS v4**: Modern styling with a clean, premium aesthetic.
- **Lucide React**: Beautiful, consistent iconography.
- **React Router 7**: Seamless client-side navigation.
- **Axios**: Robust API communication.

### Backend
- **NestJS 11**: Scalable Node.js framework for efficient server-side apps.
- **Prisma ORM**: Type-safe database access for PostgreSQL.
- **Passport.js & JWT**: Secure authentication and authorization.
- **Bcrypt**: Industrial-grade password hashing.

### DevOps & Tools
- **Docker & Docker Compose**: Consistent development and production environments.
- **Nginx**: High-performance web server for the frontend.
- **ESLint & Prettier**: Code quality and consistent formatting.

## ✨ Features

- **User Authentication**: Secure register and login system with JWT tokens.
- **Real-time Dashboard**: 
  - **Total Tasks**: Oversight of all your goals.
  - **Completed/Pending**: Track what's done and what needs attention.
  - **Efficiency Rate**: Dynamic calculation of your productivity.
- **Advanced Task Management**:
  - **CRUD Operations**: Create, Read, Update, and Delete tasks.
  - **Priorities**: Categorize by High, Medium, or Low impact.
  - **Categories**: Organize tasks into Work, Personal, Urgent, etc.
- **Premium Design**:
  - **Dark Mode**: Fully supported dark/light theme toggle.
  - **Glassmorphism**: Subtle, modern UI effects.
  - **Responsive**: Beautiful on mobile, tablet, and desktop.

## 💻 Local Setup

### Prerequisites
- [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/) installed.

### Steps
1. **Clone the repository**:
   ```bash
   git clone https://github.com/dondou21/nestjs-auth.git
   cd nestjs-auth
   ```

2. **Run with Docker Compose**:
   ```bash
   docker compose up --build
   ```

3. **Access the application**:
   - **Frontend**: [http://localhost:8080](http://localhost:8080)
   - **Backend API**: [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

- `frontend/`: React application and assets.
- `backend/`: NestJS application, Prisma schema, and migrations.
- `docker-compose.yml`: Local orchestrator for services and database.
- `nginx.conf`: Custom configuration for frontend routing.

## 📝 License
This project is for educational purposes.

import './App.css'
import { AuthProvider } from './context/AuthContext'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RegisterPage from './pages/RegisterPage'
import TodoListPage from './pages/TodoListPage'
import { ProtectedRoutes } from './components/ProtectedRoutes'
import DashboardPage from './pages/DashboardPage'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard" element={<ProtectedRoutes><DashboardPage /></ProtectedRoutes>} />
          <Route path="/todos" element={<ProtectedRoutes><TodoListPage /></ProtectedRoutes>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App

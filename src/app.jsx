// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AuthProvider } from './contexts/AuthContext/AuthContext';
import { Login } from './layout/Login/Login';
import { PlayerDashboard } from './layout/Dashboards/PlayerDashboard/PlayerDashboard';
import { ClubDashboard } from './layout/Dashboards/ClubDashboard/ClubDashboard';
import { PrivateRoute } from './routes/PrivateRoute';

// Importar o i18next para suporte a múltiplos idiomas

function App() {
  // Hook para gerenciar a tradução
  const { t } = useTranslation();

  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/player-dashboard" element={<PrivateRoute element={<PlayerDashboard />} />} />
          <Route path="/club-dashboard" element={<PrivateRoute element={<ClubDashboard />} />} />
          {/* Adicione outras rotas privadas aqui */}
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;

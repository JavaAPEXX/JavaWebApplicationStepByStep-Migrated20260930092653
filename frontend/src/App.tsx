import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './styles/modern-ui.css';
import Footer from './src/components/layout/Footer';
import CommonHeaderComponent from './CommonHeaderComponent';
import Navigation from './src/components/layout/Navigation';
import AddTodoComponent from './AddTodoComponent';
import ListTodos from './pages/migrated-repo/ListTodos';
import Login from './src/pages/migrated-repo/Login';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="modern-app-root">
        <header className="modern-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ fontWeight: 700, fontSize: '1.1rem', color: '#2563eb' }}>Modernized Application</span>
          </div>
          <nav style={{ display: 'flex', gap: '1rem' }}>
            <Link to="/" style={{ textDecoration: 'none', color: '#475569', fontWeight: 500 }}>Home</Link>
          </nav>
        </header>
        <main className="modern-main-content">
          <Routes>
        <Route path="/" element={<Footer />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/commonheader" element={<CommonHeaderComponent />} />
        <Route path="/navigation" element={<Navigation />} />
        <Route path="/addtodo" element={<AddTodoComponent />} />
        <Route path="/listtodos" element={<ListTodos />} />
        <Route path="/login" element={<Login />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;

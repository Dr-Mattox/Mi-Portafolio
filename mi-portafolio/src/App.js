// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Inicio from './components/Inicio';
import ProjectList from './components/ProjectList';
import SobreMi from './components/SobreMi';
import Contacto from './components/Contacto';
import ProjectDetail from './components/ProjectDetail';
import './App.css';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/proyectos" element={<ProjectList />} />
        <Route path="/sobre-mi" element={<SobreMi />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/proyecto/:id" element={<ProjectDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

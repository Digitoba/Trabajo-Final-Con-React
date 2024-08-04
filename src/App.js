import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './paginas/Header';
import Index from './paginas/Index';
import Contacto from './paginas/Contacto';
import Antiguedades from './paginas/Antiguedades'
import './paginas/antiguedades.css'
import './paginas/contacto.css';
import './paginas/estilos.css';

function App() {
  return (
      <div className="App">
        <Routes>
          <Route path='/' element={<Index />}></Route>
            <Route path='Index' element={<Index />}></Route>
            <Route path='Contacto' element={<Contacto />}></Route>
            <Route path='Antiguedades' element={<Antiguedades />}></Route>
        </Routes>
      </div>
  );
}

export default App;

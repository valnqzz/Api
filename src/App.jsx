import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css'
import Listar from './componentes/Listar'
import Original from './componentes/Original'
import Aleatorios from './componentes/Aleatorios'
import Favoritos from './componentes/Favoritos'
import Usuario from './componentes/Usuario'
import Detalle from './componentes/Detalle'
import Menu from './componentes/Menu';

function App() {


  return (
    <Router>
       <Menu />
       <Routes>
       <Route path="/" element={<Listar />} />
        <Route path="/Usuario" element={<Usuario />} />
        <Route path="/Aleatorios" element={<Aleatorios />} />
        <Route path="/Original" element={<Original />} />
        <Route path="/Favoritos" element={<Favoritos />} />
        <Route path="/:nombre" element={<Detalle />} />
        <Route path="/detalle/:name" element={<Detalle />} />
       </Routes>
    </Router>
    
   
 )   
}
export default App
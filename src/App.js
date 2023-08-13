import React from "react";
import './scss/app.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Carrito from "./Components/pages/carrito";
import Home from "./Components/pages/Home";
import Succed from "./Components/pages/Succed";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" exact element={<Home/>}></Route>
        <Route path="/carrito" exact element={<Carrito/>}></Route>
        <Route path="/compra_exitosa" exact element={<Succed/>}></Route>
      </Routes>
    </Router>
  )
}

export default App;
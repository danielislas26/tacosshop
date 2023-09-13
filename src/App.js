import React from "react";
import './scss/app.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Carrito from "./Components/pages/carrito";
import Home from "./Components/pages/Home";
import Success from "./Components/pages/Success";
import Cancel from "./Components/pages/cancel";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" exact element={<Home/>}></Route>
        <Route path="/carrito" exact element={<Carrito/>}></Route>
        <Route path="/compra_exitosa" exact element={<Success/>}></Route>
        <Route path="/cancel" exact element={<Cancel/>}></Route>
      </Routes>
    </Router>
  )
}

export default App;
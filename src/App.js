import React from "react";
import './scss/app.scss';
import { BrowserRouter as Router, Routes, Route, Navigate, HashRouter } from 'react-router-dom';
import Home from "./Components/pages/Home";
import Success from "./Components/pages/Success";
import Cancel from "./Components/pages/cancel";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/tacosshop" exact element={<Home/>}></Route>
        <Route path="/" exact element={<Home/>}></Route>
        <Route path="/compra_exitosa" exact element={<Success/>}></Route>
        <Route path="/cancel" exact element={<Cancel/>}></Route>
      </Routes>
      
    </Router>
  )
}

export default App;
import React from "react";
import './scss/app.scss';
import { HashRouter, Routes, Route, } from 'react-router-dom';
import Home from "./Components/pages/Home";
import Success from "./Components/pages/Success";
import Cancel from "./Components/pages/cancel";

function App() {
  return (
    <HashRouter>
      <Routes>
        
        <Route path="/tacosshop" exact element={<Home/>}></Route>
        
        <Route exact path="/" element={<Home/>}></Route>
        <Route path="/compra_exitosa" exact element={<Success/>}></Route>
        <Route path="/cancel" exact element={<Cancel/>}></Route>
        
      </Routes>
      </HashRouter>
  )
}

export default App;
import React from "react";
import { Imagen } from "../Imagen";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./Home";

function Cancel() {
    const navigate = useNavigate();
  function handleClick() {
    navigate("/");
  }
  return (
    <div>
        <div className="cancel-leyend-container">
      <h2 className="cancel-leyend">
        Lamentamos que hayas cancelado tu pedido
      </h2>
      </div>
      <Imagen img='dino.png'/>
      <div className="cancel-container">
        <h3 className="cancel-text">hemos perdido a un gran cliente...</h3>
      </div>
      <div className="cancel-button-container">
        <button onClick={handleClick} className="Proceder-off">
          Volver al inicio
        </button>
      </div>
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default Cancel;

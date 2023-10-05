import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home";

export default function Info() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/");
  }
  return (
    <div className="info-container">
      <p>
        se te envio un ticket a tu correo con los detalles de tu compra, es muy
        importante que al pasar por tu pedido lo pidas por el No. de pedido o por tu nombre y numero de telefono, si quieres cancelar, modificar o aclarar el detalle de tu pedido por favor contactanos al: <a href="https://wa.me/525573381315" >55 73 38 13 15</a>
      </p>
      
      <div>
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

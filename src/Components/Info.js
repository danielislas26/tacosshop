import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home";

export default function Info() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/home");
  }
  return (
    <div className="info-container">
      <p>
        se te envio un ticket a tu correo con los detalles de tu compra, es muy
        importante que al pasar por tu pedido lo pidas por el No. de pedido
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

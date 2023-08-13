import React, { useState } from "react";
import Popup from "reactjs-popup";
import Form from "./Form";

const Conteo = (props) => {
  return (
    <>
      <div className="Conteo-container">
        <div className="Conteo-Text-Container">
          <label>SubTotal</label>
          <label>Descuento</label>
        </div>
        <div className="Conteo-Text-Container">
          <div className="Conteo-price">
            <label>$</label>
            <label>625</label>
          </div>
          <div className="Conteo-percent">
            <label>10</label>
            <label>%</label>
          </div>
        </div>
      </div>
      <div className="Conteo-Total-Container">
        <h2>Total</h2>
        <div className="Conteo-Total">
          <h2>$</h2>
          <h2>562.5</h2>
        </div>
      </div>
      <div className="Conteo-Proceder-Container">
        <Popup
          trigger={
            <button className="Proceder-off">Proceder con el pago</button>
          }
          modal
          nested
        >
          {(close) => (
            <div className="modal">
              <button className="close" onClick={close}>
                &times;
              </button>
              <div className="header">Datos de Contacto</div>
              <Form/>
            </div>
          )}
        </Popup>
      </div>
    </>
  );
};

export default Conteo;

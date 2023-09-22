import React, { useState, useContext, useRef } from "react";
import Popup from "reactjs-popup";
import { CartPoup } from "./Shoping";
import { CartContext } from "../CartContext";
import "../scss/app.css";

const Menu = (props) => {
  const cart = useContext(CartContext);
  const productsCount = cart.items.length;
  return (
    <>
      <div className="Menu-Popup-Container">
        <div className="Menu-Popup">
          <div className="Menu-Block l1-s-menu">
            <label>Contacto</label>
          </div>
          <div className="Menu-Block l1-s-menu">
            <label>Menu</label>
          </div>
          <div>
            <label>Bienvenido</label>
          </div>

          <div className="Menu-Block l1-s-menu">
            <label>Horarios</label>
          </div>
          <div className="Menu-Block l1-s-menu">
            <Popup
              className="CartPopup"
              key={"bottom center"}
              trigger={
                <div className="Menu-Block l1-s-menu">
                  <label>Carrito</label>
                  <div>{productsCount}</div>
                </div>
              }
              modal
              nested
            >
              {(close) => (
                <div className="modal">
                  <button className="close" onClick={close}>
                    &times;
                  </button>
                  <CartPoup />
                </div>
              )}
            </Popup>
          </div>
        </div>
      </div>
    </>
  );
};
export { Menu };

import React, { useState, useContext, useRef } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
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
            <Link
              to="About-Container"
              smooth={true}
              offset={-70}
              duration={500}
            >
              Contacto
            </Link>
          </div>
          <div className="Menu-Block l1-s-menu">
            <Link to="Carrousel" smooth={true} offset={-70} duration={500}>
              Menu
            </Link>
          </div>
          <div>
            <label>Bienvenidos</label>
          </div>

          <div className="Menu-Block l1-s-menu">
            <Link
              to="Instrucciones-Container"
              smooth={true}
              offset={-70}
              duration={500}
            >
              Instrucciones
            </Link>
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

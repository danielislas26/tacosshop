import React from "react";
import Popup from "reactjs-popup";
import Mob from "./Item";
import { productsArray, comida } from "./productsStore";
import "../scss/app.css";
import ShowPlatillos from "./Item";

function Barra(props) {
  return (
    <div
      className="Card"
      trigger={
        <button className="button button-dots">
          <img
            src={require("../imgs/dots.png")}
            alt="dots"
            width={29}
            height={29}
          ></img>{" "}
        </button>
      }
    >
      <div className="Card-img-Container">
        <div className="Card-imgandText">
          <label className="Card-img-Container-Text l1-s">
            {props.Platillo}
          </label>
          <div className="Card-img-Container-Text">
            <img
              className="Card-img-Container-Text-icon"
              src={require("../imgs/estrella.png")}
              alt="star-icon"
              width={22}
              height={22}
            ></img>
            <label className="Card-img-Text-Container-Text-Text l1-s">
              {props.Puntuacion}
            </label>
          </div>
        </div>
        <div className="Text-Price">
          <div className="price-Container">
            <img
              src={require("../imgs/dolar.png")}
              alt="dolar-icon"
              width={22}
              height={22}
            ></img>
            <label className="l1-s">{props.Precio}</label>
          </div>
        </div>
      </div>
      <div className="Card-Text-Container">
        <label className="Card-Text l3-s">{props.Descripcion}</label>
        <Popup
          trigger={
            <button className="button button-dots">
              <img
                src={require("../imgs/dots.png")}
                alt="dots"
                width={29}
                height={29}
              ></img>{" "}
            </button>
          }
          modal
          nested
        >
          {(close) => (
            <div className="modal">
              <button className="close" onClick={close}>
                &times;
              </button>
              <div className="header"> {props.Platillo} </div>
              <div className="content">
                {" "}
                { 
                  <Mob
                    title={props.Platillo}
                    comida={props.Platillo}
                    Id={props.Key}
                    Tipo={props.Tipos}
                  />
                }
              </div>

              <div className="actions">
                <button
                  className="button button-cart"
                  onClick={() => {
                    console.log("modal closed ");
                    close();
                  }}
                >
                  añadir al Carrito
                </button>
                <div className="cantidad">
                  <p>Acumulado</p>
                </div>
                <div className="acumulado-container">
                  <div>
                    <p>25</p>
                  </div>
                  <div>
                    <p>$250</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Popup>
      </div>
    </div>
  );
}

export { Barra };

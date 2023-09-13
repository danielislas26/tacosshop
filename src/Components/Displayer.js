import { React,useContext } from "react";
import Popup from "reactjs-popup";
import Mob from "./Item";
import { getProductDataMain } from "./productsStore";


import "../scss/app.css";

import { CartContext } from "../CartContext";

function Barra({platillo,puntuacion,precio,descripcion,tipos,id,img}) {
  const cart = useContext(CartContext);
  const productsCount = cart.items.reduce((sum,product) => sum + product.quantity, 0);

  const cantidad = cart.getItemQuantity(id)
  const productData = getProductDataMain(id);
  const subtotal = cart.drenado(id)
  console.log(img)
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
      <div style={{ backgroundImage: `url(${img})`}} className="Card-img-Container">
        <div className="Card-imgandText">
          <label className="Card-img-Container-Text">
            {platillo}
          </label>
    
          <div className="Card-img-Container-Text">
            <img
              className="Card-img-Container-Text-icon"
              src={require("../imgs/price2.png")}
              alt="star-icon"
              width={13}
              height={23}
            ></img>
            <label className="Card-img-Text-Container-Text puntuacion">
              {precio}
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
            <label className="l1-s">{precio}</label>
          </div>
        </div>
      </div>
      <div className="Card-Text-Container">
        <label className="Card-Text">{descripcion}</label>
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
              <div className="header"> {platillo} </div>
              <div className="content">
                {" "}
                { 
                  <Mob
                    title={platillo}
                    
                    types={tipos}
                    
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
                    <p>{cantidad}</p>
                  </div>
                  <div>
                   <p>${subtotal}</p>
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

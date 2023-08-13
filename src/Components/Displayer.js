import React from "react";
import Popup from "reactjs-popup";
import Mob from "./Item";
import { productsArray, comida } from "./productsStore";
import "../scss/app.css";
import ShowPlatillos from "./Item";

/*class Barra extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: props.Counter,
    };
  }
  render() {
    if (this.state.counter === 8) {
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
                {this.props.Platillo}
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
                  {this.props.Puntuacion}
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
                <label className="l1-s">{this.props.Precio}</label>
              </div>
            </div>
          </div>
          <div className="Card-Text-Container">
            <label className="Card-Text l3-s">{this.props.Descripcion}</label>

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
                  <div className="header"> {this.props.Platillo} </div>
                  <div className="content">
                    {" "}
                    {productsArray.map((items,idx)=>(

                      <div className="menu">
                        <Item/>
                      </div>
                    ))}<div className="menu">
                      <div className="menu-item">
                        <p>{this.props.de1}</p>
                        <div className="arrows-container">
                          <button>
                            <img
                              src={require("../imgs/up-arrow.png")}
                              alt="flecha"
                              width={20}
                              height={20}
                            ></img>
                          </button>
                          <p className="menu-counter">0</p>
                          <button>
                            <img
                              src={require("../imgs/down-arrow.png")}
                              alt="flecha"
                              width={20}
                              height={20}
                            ></img>
                          </button>
                        </div>
                      </div>
                      <div className="menu-item">
                        <p>{this.props.de2}</p>
                        <div className="arrows-container">
                          <button>
                            <img
                              src={require("../imgs/up-arrow.png")}
                              alt="flecha"
                              width={20}
                              height={20}
                            ></img>
                          </button>
                          <p className="menu-counter">0</p>
                          <button>
                            <img
                              src={require("../imgs/down-arrow.png")}
                              alt="flecha"
                              width={20}
                              height={20}
                            ></img>
                          </button>
                        </div>
                      </div>
                      <div className="menu-item">
                        <p>{this.props.de4}</p>
                        <div className="arrows-container">
                          <button>
                            <img
                              src={require("../imgs/up-arrow.png")}
                              alt="flecha"
                              width={20}
                              height={20}
                            ></img>
                          </button>
                          <p className="menu-counter">0</p>
                          <button>
                            <img
                              src={require("../imgs/down-arrow.png")}
                              alt="flecha"
                              width={20}
                              height={20}
                            ></img>
                          </button>
                        </div>
                      </div>
                      <div className="menu-item">
                        <p>{this.props.de5}</p>
                        <div className="arrows-container">
                          <button>
                            <img
                              src={require("../imgs/up-arrow.png")}
                              alt="flecha"
                              width={20}
                              height={20}
                            ></img>
                          </button>
                          <p className="menu-counter">0</p>
                          <button>
                            <img
                              src={require("../imgs/down-arrow.png")}
                              alt="flecha"
                              width={20}
                              height={20}
                            ></img>
                          </button>
                        </div>
                      </div>
                      <div className="menu-item">
                        <p>{this.props.de6}</p>
                        <div className="arrows-container">
                          <button>
                            <img
                              src={require("../imgs/up-arrow.png")}
                              alt="flecha"
                              width={20}
                              height={20}
                            ></img>
                          </button>
                          <p className="menu-counter">0</p>
                          <button>
                            <img
                              src={require("../imgs/down-arrow.png")}
                              alt="flecha"
                              width={20}
                              height={20}
                            ></img>
                          </button>
                        </div>
                      </div>
                      <div className="menu-item">
                        <p>{this.props.de7}</p>
                        <div className="arrows-container">
                          <button>
                            <img
                              src={require("../imgs/up-arrow.png")}
                              alt="flecha"
                              width={20}
                              height={20}
                            ></img>
                          </button>
                          <p className="menu-counter">25</p>
                          <button>
                            <img
                              src={require("../imgs/down-arrow.png")}
                              alt="flecha"
                              width={20}
                              height={20}
                            ></img>
                          </button>
                        </div>
                      </div>
                      <div className="menu-item">
                        <p>{this.props.de8}</p>
                        <div className="arrows-container">
                          <button>
                            <img
                              src={require("../imgs/up-arrow.png")}
                              alt="flecha"
                              width={20}
                              height={20}
                            ></img>
                          </button>
                          <p className="menu-counter">0</p>
                          <button>
                            <img
                              src={require("../imgs/down-arrow.png")}
                              alt="flecha"
                              width={20}
                              height={20}
                            ></img>
                          </button>
                        </div>
                      </div>
                    </div>
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
    } else {
      return (
        <div className="Card">
          <div className="Card-img-Container">
            <div className="Card-imgandText">
              <label className="Card-img-Container-Text l1-s">
                {this.props.Platillo}
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
                  {this.props.Puntuacion}
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
                <label className="l1-s">{this.props.Precio}</label>
              </div>
            </div>
          </div>
          <div className="Card-Text-Container">
            <label className="Card-Text l3-s">{this.props.Descripcion}</label>
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
                  <div className="header"> {this.props.Platillo} </div>
                  <div className="content">
                    {" "}
                    <div className="menu">
                      <div className="menu-item">
                        <p>{this.props.de1}</p>
                        <div className="arrows-container">
                          <button>
                            <img
                              src={require("../imgs/up-arrow.png")}
                              alt="flecha"
                              width={20}
                              height={20}
                            ></img>
                          </button>
                          <p className="menu-counter">0</p>
                          <button>
                            <img
                              src={require("../imgs/down-arrow.png")}
                              alt="flecha"
                              width={20}
                              height={20}
                            ></img>
                          </button>
                        </div>
                      </div>
                      <div className="menu-item">
                        <p>{this.props.de2}</p>
                        <div className="arrows-container">
                          <button>
                            <img
                              src={require("../imgs/up-arrow.png")}
                              alt="flecha"
                              width={20}
                              height={20}
                            ></img>
                          </button>
                          <p className="menu-counter">0</p>
                          <button>
                            <img
                              src={require("../imgs/down-arrow.png")}
                              alt="flecha"
                              width={20}
                              height={20}
                            ></img>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="actions">
                    <button
                      className="button button-cart"
                      onClick={() => {
                        console.log("modal closed ");
                        close();
                      }}
                    >
                      Añadir al Carrito
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
  }
}
*/

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
                  props.Tipos.map((plato,i)=>(
                    <Mob
                    title={props.Platillo} comida={plato.title} tipo={props.Tipos} id={props.Key} key={i}
                    
                  />
                  ))
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
/*export default function Barra(props){
    return(
    <div className="Card">
        <div className="Card-img-Container">
            <div className="Card-imgandText">
                <label className="Card-img-Container-Text l1-s">{props.Platillo}</label>
                <div className="Card-img-Container-Text">
                    <img className="Card-img-Container-Text-icon" src={require("../imgs/estrella.png")} alt="star-icon" width={22} height={22}></img>
                    <label className="Card-img-Text-Container-Text-Text l1-s">{props.Puntuacion}</label>
                </div>
            </div>
            <div className="Text-Price">
                <div className="price-Container">
                    <img src={require("../imgs/dolar.png")} alt="dolar-icon" width={22} height={22}></img>
                    <label className="l1-s">{props.Precio}</label>
                </div>
            </div>
        </div>
        <div className="Card-Text-Container">
            <label className="Card-Text l3-s">{props.Descripcion}</label>
            <img src={require("../imgs/dots.png")} alt="dots" width={29} height={29}></img>
            <Popup
      trigger={<button className="button"> Open Modal </button>}
      modal
      nested
    >
      {close => (
        <div className="modal">
          <button className="close" onClick={close}>
            &times;
          </button>
          <div className="header"> {props.Platillo} </div>
          <div className="content">
            {' '}
            <div className="menu">
    <div className="menu-item"> {props.de1}</div>
    <div className="menu-item"> {props.de2}</div>
    <div className="menu-item"> {props.de4}</div>
    <div className="menu-item"> {props.de5}</div>
    <div className="menu-item"> {props.de6}</div>
    <div className="menu-item"> {props.de7}</div>
    <div className="menu-item"> {props.de8}</div>
   
    <div className="menu-item"> Menu item 4</div>
  </div>
          </div>
          <div className="actions">
           
            <button
              className="button"
              onClick={() => {
                console.log('modal closed ');
                close();
              }}
            >
              close modal
            </button>
          </div>
        </div>
      )}
    </Popup>
        </div>
    </div>
    );
}*/

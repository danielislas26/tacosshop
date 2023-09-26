import React from "react";
import "../scss/app.css";
const Holder = (props) => (
  <div className="Holder-container-img">
    <img
      className="banner"
      src={require("../imgs/Newbigbanner.png")}
      alt="banner"
    ></img>
    <div className="imgContainer">
      <img
        className="imagen"
        src={require("../imgs/babo-strech.png")}
        alt="los paquis logo"
        width={112}
        height={160}
      ></img>
    </div>
  </div>
);

const Anuncio = (props) => (
  <div className="Holder-container">
    <div className="Text-Container">
      <h2>-- Solo Pickup --</h2>
      <h3 className="h3">!!Abierto solo los Domingos de 8:30 a 1:30!!</h3>
      <label className="l1-s descuento">
        Obten 10% de descuento en tu compra ordenando de lunes a miercoles comprando a partir de $400 
      </label>
      <label className="l1-s descuento">
        Obten 5% de descuento en tu compra ordenando de jueves a viernes comprando a partir de $400
      </label>
      <h3>Buscas organizar un evento?</h3>
      <label className="l1-s descuento">contactanos al 55 73 38 13 15</label>
    </div>
  </div>
);

export { Holder, Anuncio };

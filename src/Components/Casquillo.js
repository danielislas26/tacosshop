import React from "react";

const Casquillo = (props) => (
<div className="Casquillo-container">
    <div className="numerador-container-button">
        <div className="Carrito-counter-button">
            <button><img src={require("../imgs/up-arrow.png")} alt="arrow-down" width={31} height={31}></img></button>
        </div>
        <div className="Carrito-counter-button">
            <button><img src={require("../imgs/down-arrow.png")} alt="arrow-down" width={31} height={31}></img></button>
        </div>

    </div>
    <div className="numerador-container">
        <h3>{props.cantidad}</h3>

    </div>
    <div className="titulo-platillo">
        <h3 className="Carrito-producto-titulo">{props.titulo}</h3>

    </div>
    <div className="precio-container">
        <div className="pp"><h3>$</h3></div>
        <div className="pp"><h3>{props.precio}</h3></div>
    </div>
    <div className="basurero-container">
        <img src={require("../imgs/trash.png")}
                              alt="trash"
                              width={31}
                              height={31} ></img>
    </div>
</div>
);

export default Casquillo;

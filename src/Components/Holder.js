import React from "react";
import "../scss/app.css"
const Holder = (props) => <div className="Holder-container-img">
    <div className="imgContainer">
    <img className="imagen" src={require("../imgs/babo-strech.png")} alt="los paquis logo" width={112} height={160}></img>
    
    </div>
</div>;

const Anuncio = (props) => <div className="Holder-container">

<h3 className="h3">!!Abierto solo los Domingos de 8:30 a 1:30!!</h3>
    <label className="l1-s">Obten 10% de descuento en tu compra ordenando de lunes a miercoles</label>
    <label className="l1-s">Obten 5% de descuento en tu compra ordenando de jueves a viernes</label>  
</div>


export { Holder,Anuncio}
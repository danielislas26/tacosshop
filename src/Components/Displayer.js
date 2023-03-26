import React from "react";
import "../scss/app.css"

export default function Barra(props){
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
        </div>
    </div>
    );
}
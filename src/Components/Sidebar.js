import React from "react";
import {Barra,Pop} from "./Displayer";
import { productsArray } from "../Components/productsStore";
import { comida } from "../Components/productsStore";
import "../scss/app.css";
import { getByTitle } from "@testing-library/react";



export default function Store() {
  return (
    <div className="Carrousel">
      {comida.map((product, idx) => (
       product.tipos.map((o)=>{console.log(o.id,product.title)}),
        <Barra Platillo={product.title} Precio={product.price} Key={product.id} Puntuacion={product.score} Descripcion={product.description} Tipos={product.tipos}/>
        
      ))}
    </div>
  );
}


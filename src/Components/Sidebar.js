import React from "react";
import { Barra } from "./Displayer";
import { comida } from "../Components/productsStore";
import "../scss/app.css";


export default function Store() {
  return (
    <div className="Carrousel">
      {comida.map((product, idx) => (
        
        <Barra
          platillo={product.title}
          precio={product.price}
          key={product.id}
          id={product.id}
          puntuacion={product.score}
          descripcion={product.description}
          tipos={product.tipos}
          img={product.img}
        />
      ))}
    </div>
  );
}

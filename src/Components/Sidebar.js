import React from "react";
import { Barra, Pop } from "./Displayer";
import { productsArray } from "../Components/productsStore";
import { comida } from "../Components/productsStore";
import "../scss/app.css";
import { getByTitle } from "@testing-library/react";

export default function Store() {
  return (
    <div className="Carrousel">
      {comida.map((product, idx) => (
        
        <Barra
          platillo={product.title}
          precio={product.price}
          key={product.id}
          puntuacion={product.score}
          descripcion={product.description}
          tipos={product.tipos}
        />
      ))}
    </div>
  );
}

import React from "react";

export default function Articulos() {
  return (
    <div className="Component-Container">
      <div className="Cajon">
        <div className="Titulo"><h3>No.pedido:</h3></div>
        <div className="Sub-Titulo"><h3>DAN22M81KTC</h3></div>
      </div>
      <div className="Cajon">
        <div className="Titulo"><h3>A nombre de:</h3></div>
        <div className="Sub-Titulo"><h3>Daniel</h3></div>
      </div>
      <div className="Cajon">
        <div className="Titulo"><h3>Fecha:</h3></div>
        <div className="Sub-Titulo"><h3>2022/03/08</h3></div>
      </div>
      <div className="Cajon">
        <div className="Titulo"><h3>Sub Total:</h3></div>
        <div className="Sub-Titulo"><div className="Symbols"><h3>$</h3><h3>575</h3></div></div>
      </div>
      <div className="Cajon">
        <div className="Titulo"><h3>Descuento:</h3></div>
        <div className="Sub-Titulo"><div className="Symbols"><h3>10</h3><h3>%</h3></div></div>
      </div>
      <div className="Cajon">
        <div className="Titulo"><h3>Total:</h3></div>
        <div className="Sub-Titulo"><div className="Symbols"><h3>$</h3><h3>517.50</h3></div></div>
      </div>
      <div className="Cajon"> 
        <div className="Titulo"><h3>Productos:</h3></div>
        <ul className="lista-productos">
            <li className="producto-list"><p className="numerador">2</p><p>Tacos Campechanos</p></li>
            <li className="producto-list"><p className="numerador">3</p><p>Tacos Espaldilla</p></li>
            <li className="producto-list"><p className="numerador">2</p><p>Litros Consome</p></li>
            <li className="producto-list"><p className="numerador">1</p><p>Medio Consome</p></li>
            <li className="producto-list"><p className="numerador">1</p><p>Medio Kilo Costilla</p></li>
            <li className="producto-list"><p className="numerador">1</p><p>Cuarto de Kilo Maciza</p></li>
        </ul>
      </div>
    </div>
  );
}

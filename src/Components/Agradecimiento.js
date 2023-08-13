import React from "react";

export default function Greetings() {
  return (
    <div className="greets-container">
      <div>
        <img
          type="button"
          className="d"
          src={require(`../imgs/Vector.png`)}
          alt="burger-menu"
          width={50}
          height={50}
        ></img>
      </div>
      <div>
        <h3>Pago Completado Exitosamente</h3>
      </div>
      <div>
        <h4>Gracias por tu compra</h4>
      </div>
    </div>
  );
}

/*const Grr = (props) => (
    <div>
        hola 2
    </div>
)

export default Grr;*/

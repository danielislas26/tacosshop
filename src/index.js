import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CartProvider from "./CartContext";
import { HashRouter } from "react-router-dom";

import "./scss/app.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartProvider>
      
        <App />
      
    </CartProvider>
  </React.StrictMode>
);

/*<Propiedades 
    cadena="Esto es una cadena de texto" 
    numero={19} 
    booleano={true} 
    arreglo={[1,2,3]}
    objeto={{nombre:"john",correo:"johnmircha@gmail.com"}}
    elementoReact={<i>Esto es un elemento React</i>}
    funcion={(num) => num * num}
    componenteReact={<Horario msg="soy un componente pasado como prop"/>}
    />*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

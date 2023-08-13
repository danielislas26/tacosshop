import React from "react";
import { comida } from "./productsStore";

function Item(props) {
  return (

    
   
  
      props.comida === "Consome" ? (
        
       
          <div className="menu-item">
      <p>{props.tipo[0].title}</p>
      <div className="arrows-container">
        <button>
          <img
            src={require("../imgs/up-arrow.png")}
            alt="flecha"
            width={20}
            height={20}
          ></img>
        </button>
        <p className="menu-counter">0</p>
        <button>
          <img
            src={require("../imgs/down-arrow.png")}
            alt="flecha"
            width={20}
            height={20}
          ></img>
        </button>
      </div>
    </div>
        
      ): (<div> it's not working</div>)
    

  
  );
}

console.log("hola")

const Mob = (props) => {
  console.log("Hola 2")
  const comida = [
    {
        id:1,
        title: "consomes",
        tipos: [
            {   id:1,
                title: "chico",
                precio: 30,
            },
            {   id:2,
                title: "grande",
                precio: 50,
            },
        ]
    },
    {
        id:2,
        title: "tacos",
        tipos: [
            {   id:3,
                title: "costilla",
                precio: 25,
            },
            {   id:4,
                title: "falda",
                precio: 25,
            },
            
        ]
    },
    {
        id:3,
        title: "kilos",
        tipos: [
            {   id:5,
                title: "costilla",
                precio: 500,
            },
            {   id:6,
                title: "maciza",
                precio: 500,
            },
            {   id:7,
                title: "espaldilla",
                precio: 500,
            },
        ]
    }

]



return (
comida.map((plato,idx,arr) => (
  
  plato.id === props.id ? (
    
    plato.tipos.map((tipos) => (
      <div key={idx}>{tipos.title}</div>
    ))
  ): (<div></div>)
))


);

    }



export default Item;
// debes cambiar el Item por el Mob y descomentarlo de nada ;)
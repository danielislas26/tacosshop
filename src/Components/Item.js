import {React,useContext} from "react";
import { CartContext } from "../CartContext";
import { comida } from "./productsStore";


const Mob = (props) => {
  const product = props.product;
  const cart = useContext(CartContext);
  let tipos = props.Tipo.map((o)=>{ return o.id})
  
 /* let tipos = props.Tipos.map((tipo)=>{
    return tipo.id
  })*/
  const productQuantity = cart.getProductQuantity(props.Id);
  console.log(cart.items);
  return comida.map((plato, idx, arr) =>
    plato.id === props.Id ? (
      plato.tipos.map((tipos) => (
        <div className="menu-item" >
          <p>{tipos.title}</p>
          <div className="arrows-container">
            <button onClick={()=> cart.addOneToCart(tipos.id)}>
              <img
                src={require("../imgs/up-arrow.png")}
                alt="flecha"
                width={20}
                height={20}
              ></img>
            </button>
            <p className="menu-counter">{productQuantity}</p>
            <button onClick={()=> cart.removeOneFromCart(tipos.id)}>
              <img
                src={require("../imgs/down-arrow.png")}
                alt="flecha"
                width={20}
                height={20}
              ></img>
            </button>
          </div>
        </div>
      ))
    ) : (
      <div></div>
    )
  );
};

export default Mob;
// debes cambiar el Item por el Mob y descomentarlo de nada ;)

import {React,useContext} from "react";
import { CartContext } from "../CartContext";



const Mob = ({types}) => {
  
  const cart = useContext(CartContext);
//  let tipos = props.Tipo.map((o)=>{ return o.id})
  
 /* let tipos = props.Tipos.map((tipo)=>{
    return tipo.id
  })*/


 

  
    
     return types.map((tipo) => {
        const productQuantity = cart.getProductQuantity(tipo.subid)
        return (
        <div className="menu-item" key={tipo.subid} >
          <p>{tipo.title}</p>
          <div className="arrows-container">
            <button onClick={()=> cart.addOneToCart(tipo)}>
              <img
                src={require("../imgs/up-arrow.png")}
                alt="flecha"
                width={20}
                height={20}
              ></img>
            </button>
            <p className="menu-counter">{productQuantity}</p>
            <button onClick={()=> cart.removeOneFromCart(tipo)}>
              <img
                src={require("../imgs/down-arrow.png")}
                alt="flecha"
                width={20}
                height={20}
              ></img>
            </button>
          </div>
        </div>
      )})
    
};

export default Mob;
// debes cambiar el Item por el Mob y descomentarlo de nada ;)

import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import CartProduct from "./CartProduct";

const dt = new Date()
const day = dt.getDay()

function toDayDiscount(total){

 if(day <= 3 && total >= 400){
  return total*0.90
 } else if ( day > 3 && total >= 400 ) {
  return total*0.95
 } else {
  return total
 }

}

function able (day){
  if(day < 6){
    return true
  } else {
    return false
  }
}




function CartPoup() {

  const cart = useContext(CartContext);
  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  const checkout = async () => {
    await fetch('http://danielislas26.github.io/checkout', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({items: cart.items})
    }).then((response) => {
      return response.json();
    }).then((response) => {
      if(response.url) {
        window.location.assign(response.url);
      }
    })
  }
  return (
    <>
      <div className="Modal-Header">
        <p>Carrito de Compras</p>
      </div>
      <div className="Modal-Body">
        {productsCount > 0 ? (
          <>
            <p>Productos en tu carrito:</p>
            <div className="Products-Cart-Container">
              {cart.items.map((curretProduct, idx) => (
                <>
                
                  <CartProduct
                    key={idx}
                    id={curretProduct.subid}
                    quantity={curretProduct.quantity}
                    tipo={curretProduct.title}
                    
                  />
                </>
              ))}
            </div>
            <div className="Modal-Body-Conteo">
              <h2 className="total">${cart.getTotalCost().toFixed(2)}</h2>
              <h3 className="discount">-${(cart.getTotalCost().toFixed(2)-toDayDiscount(cart.getTotalCost().toFixed(2))).toFixed(2)}</h3>
              <h2>Total: ${toDayDiscount(cart.getTotalCost().toFixed(2))}</h2>
              <button  onClick={checkout} disabled={able()}>Comprar!</button>
            </div>
          </>
        ) : (
          <h2 className="void-cart">No hay productos en tu carrtito...</h2>
        )}
      </div>
    </>
  );
}

export { CartPoup };

/*
<div className="Modal-Header"> 
            <p>Carrito de Compras</p>
        </div>
        <div className="Modal-Body"> 
        {productsCount > 0 ? 
        <>
            <p>Productos en tu carrito:</p>
            {cart.items.map((curretProduct,idx) => (
                <h2>ok</h2>
            ))}
            <h2>Total: {cart.getTotalCost().toFixed(2)}</h2>
            <button>
                Comprar!
            </button>
        </>
        : <h2>There are no items in your cart</h2>}
            <ul>
                <li>compra</li>
                <li>compra</li>
            </ul>
        </div>

*/

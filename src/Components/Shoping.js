import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import { CardProduct } from "./CardProducts";
import CartProduct from "./CartProduct";

function CartPoup() {
  const cart = useContext(CartContext);
  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );
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
              <h2>Total: {cart.getTotalCost().toFixed(2)}</h2>
              <button>Comprar!</button>
            </div>
          </>
        ) : (
          <h2>There are no items in your cart</h2>
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

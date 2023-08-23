import { Context, useContext } from "react";
import { CartContext } from "../CartContext";
import { getProductData } from "./productsStore";

function CartProduct(props) {
    const cart = useContext(CartContext);
    const id = props.id;
    const quantity = props.quantity;
    const tipo = props.tipo;
    const productData = getProductData(id);

    return (
        <div className="Product-Container">
            <h3> {productData.title} de {tipo}</h3>
            <p>{quantity} total</p>
            <p>${ (quantity * productData.precio).toFixed(2)}</p>
            <button onClick={()=> cart.deleteFromCart(id)}>Remove</button>
            <hr></hr>
        </div>
    )
}

export default CartProduct;
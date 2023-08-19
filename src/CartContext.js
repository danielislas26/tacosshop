import { createContext, useState } from "react";
import { getProductData,productsArray } from "./Components/productsStore";



export const CartContext = createContext({
    items: [],
    getProductQuantity: () => {},
    getItemQuantity: () => {},
    addOneToCart: () => {},
    filter: () => {},
    removeOneFromCart: () => {},
    deleteFromCart: () => {},
    getTotalCost: () => {}
});

export function CartProvider({children}) {
    const [cartProducts, setCartProducts] = useState([]);
    
    // [ { id: 1 , quantity: 3 }, { id: 2, quantity: 1 } ]

    function getProductQuantity(id) {
        const quantity = cartProducts.find(product => product.subid === id)?.quantity;
        if (quantity === undefined) {
            return 0;
        }

        return quantity;
    }

    function getItemQuantity(id){
        let arr = cartProducts.filter(objeto => objeto.id === id )
        const sum = arr.reduce((acc,obj)=>{
          return acc + obj.quantity
        },0);
        return sum
    }
    
  
    function addOneToCart(obj) {

        const quantity = getProductQuantity(obj.subid);

        if (quantity === 0) { // product is not in cart
            setCartProducts(
                [
                    ...cartProducts,
                    {   
                        id: obj.id,
                        subid: obj.subid,
                        quantity: 1
                    }
                ]
            )
        } else { // product is in cart
            // [ { id: 1 , quantity: 3 }, { id: 2, quantity: 1 } ]    add to product id of 2
            setCartProducts(
                cartProducts.map(
                    product =>
                    product.subid === obj.subid                              // if condition
                    ? { ...product, quantity: product.quantity + 1 } // if statement is true
                    : product                                        // if statement is false
                )
            )
        }
    }

    function removeOneFromCart(obj) {
        const quantity = getProductQuantity(obj.subid);

        if(quantity == 1) {
            deleteFromCart(obj.subid);
        } else {
            setCartProducts(
                cartProducts.map(
                    product =>
                    // product.id es el id del producto añadido al carrito
                    product.subid === obj.subid                                // if condition
                    ? { ...product, quantity: product.quantity - 1 } // if statement is true
                    : product                                        // if statement is false
                )
            )
        }
    }



    function deleteFromCart(id) {
        // [] if an object meets a condition, add the object to array
        // [product1, product2, product3]
        // [product1, product3]
        setCartProducts(
            cartProducts =>
            cartProducts.filter(currentProduct => {
                return currentProduct.subid != id;
            })  
        )
    }

    function getTotalCost() {
        let totalCost = 0;
        cartProducts.map((cartItem) => {
            const productData = getProductData(cartItem.id);
            totalCost += (productData.price * cartItem.quantity);
        });
        return totalCost;
    }

    const contextValue = {
        items: cartProducts,
        getProductQuantity,
        getItemQuantity,
        addOneToCart,
        removeOneFromCart,
        deleteFromCart,
        getTotalCost
    }

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;


// CODE DOWN HERE

// Context (cart, addToCart, removeCart)
// Provider -> gives your React app access to all the things in your context
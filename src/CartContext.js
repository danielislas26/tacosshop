import { createContext, useState } from "react";
import { getProductData} from "./Components/productsStore";
import { types } from "./Components/productsStore";



export const CartContext = createContext({
    items: [],
    getProductQuantity: () => {},
    getItemQuantity: () => {},
    addOneToCart: () => {},
    drenado: () => {},
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
        if( obj.id !== 3 ) {
            if ( quantity === 0 ) {
                setCartProducts(
                    [
                        ...cartProducts,
                        {   
                            id: obj.id,
                            subid: obj.subid,
                            title: obj.title,
                            quantity: 1
                        }
                    ]
                )
            } else {
                setCartProducts(
                    cartProducts.map(
                        product =>
                        product.subid === obj.subid                              // if condition
                        ? { ...product, quantity: product.quantity + 1 } // if statement is true
                        : product                                        // if statement is false
                    )
                )
            }

        } else {
            if ( quantity === 0 ) {
                setCartProducts(
                    [
                        ...cartProducts,
                        {   
                            id: obj.id,
                            subid: obj.subid,
                            title: obj.title,
                            quantity: 1/4
                        }
                    ]
                )
            } else {
                setCartProducts(
                    cartProducts.map(
                        product =>
                        product.subid === obj.subid                              // if condition
                        ? { ...product, quantity: product.quantity + 1/4 } // if statement is true
                        : product                                        // if statement is false
                    )
                )
            }
        }

        

        
    }

    function removeOneFromCart(obj) {
        const quantity = getProductQuantity(obj.subid);
        if( obj.id !==3 ) {
            if( quantity === 1 ) {
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

        } else {
            if(quantity === 1/4) {
                deleteFromCart(obj.subid);
            } else {
                setCartProducts(
                    cartProducts.map(
                        product =>
                        // product.id es el id del producto añadido al carrito
                        product.subid === obj.subid                                // if condition
                        ? { ...product, quantity: product.quantity - 1/4 } // if statement is true
                        : product                                        // if statement is false
                    )
                )
            }
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
            const productData = getProductData(cartItem.subid);
            totalCost += (productData.precio * cartItem.quantity);
        });
        return totalCost;
    }

    function drenado(id) {
        let pricesArr = [];
        let arr = cartProducts.filter((platillo) => platillo.id === id);
        arr.map((item, i) => {
          let c = types.find((plato) => plato.subid === item.subid);
          pricesArr.push(c.precio * item.quantity);
        });
      
        let result = pricesArr.reduce((a, b) => {
          return a + b;
        }, 0);
      
        return result;
      }

    const contextValue = {
        items: cartProducts,
        getProductQuantity,
        getItemQuantity,
        addOneToCart,
        removeOneFromCart,
        deleteFromCart,
        drenado,
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
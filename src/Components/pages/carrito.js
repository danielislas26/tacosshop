import { React,useContext } from "react";
import { CartContext } from "../../CartContext";
import Casquillo from '../Casquillo';
import Conteo from '../Conteo';
import { Header } from '../Header';


const Carrito = () => {
    const cart = useContext(CartContext);
    console.log(cart.items)
    return(
        <>
            <div className='Carrito-plantilla'>
                <Header
                Estado={false}
                Menu="menu-burger"
                Cart="empty-cart"
                />
                <Casquillo 
                titulo="Taco Campechano"
                cantidad="5"
                precio="150"
                />
                <Casquillo
                titulo="Kilo Espaldilla"
                cantidad="1/2"
                precio="250"
                />
                <Casquillo
                titulo="Litro Consome"
                cantidad="2"
                precio="100"
                />
                <Casquillo
                titulo="kilo costilla"
                cantidad="1/4"
                precio="125"/>
                <Conteo/>
            </div>
        </>
    );
};

export default Carrito;


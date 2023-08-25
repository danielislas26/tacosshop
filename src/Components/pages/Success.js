import React from "react";
import Greetings from "../Agradecimiento";
import Articulos from "../Articulos";
import { Header } from "../Header";
import Info from "../Info";



const Succed = () => {
    return(
        <>
            <Header estado={false}/>
            <Greetings/>
            <Articulos/>
            <Info/>
            
        </>
    )
}

export default Succed;
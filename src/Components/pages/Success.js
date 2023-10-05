import React from "react";
import Greetings from "../Agradecimiento";

import { Header } from "../Header";
import Info from "../Info";
import { Imagen }  from "../Imagen";


const Success = () => {
    var dt = new Date();
         //console.log(("getDay() : " + dt.getDay() ));
let a = Array.from(Array(7).keys()).map((idx) => {const d = new Date(); d.setDate(d.getDate() - d.getDay() + idx); return d; });
let month = dt.toLocaleDateString('es-ES',{month: 'long'})
function getNextSaturday(date = new Date()) {
    const dateCopy = new Date(date.getTime());
    const nextSaturday = new Date(
      dateCopy.setDate(
        dateCopy.getDate() + ((7 - dateCopy.getDay() + 0) % 7 || 7),
      ),
    );
  
    //return nextSaturday.toLocaleDateString('es-ES',{weekday:'long'});
    return nextSaturday.getDate();
  }

  

   

    return(
        <>
            
            <Greetings/>
            <p className="Envio">Puedes pasar por tu pedido este <mark> Domingo {getNextSaturday(new Date())} de {month}</mark> </p>
            <Imagen img='success2.png'/>
            <Info/>
            
            
        </>
    )
}

export default Success;
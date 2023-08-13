import React from "react";
import {Barra,Pop} from "./Displayer";
import { productsArray } from "../Components/productsStore";
import { comida } from "../Components/productsStore";
import "../scss/app.css";
import { getByTitle } from "@testing-library/react";

/*const SideBar = (props) => 

<div className="Carrousel">


    <Barra
        Platillo="Kilo de Barbacoa"
        Puntuacion={24}
        Precio={500}
        Descripcion="Disfruta de un delicioso kilo de barbacoa hecho a la leña dentro de horno de piedra"
        Counter={8}
        de1="Campechano"
        de2="Costilla"
        de3="Espaldilla"
        de4="Lomo"
        de5="Maciza"
        de6="Panza"
        de7="Pescuezo"
        de8="Surtida"
        gramage={1/2}
    
        
    />
    <Barra
        Platillo="Tacos"
        Puntuacion={24}
        Precio={30}
        Descripcion="Deliciosos Tacos con carne suavecita y sabor a leña con dos toritllas"
        Counter={8}
        de1="Campechano"
        de2="Costilla"
        de3="Espaldilla"
        de4="Lomo"
        de5="Maciza"
        de6="Panza"
        de7="Pescuezo"
        de8="Surtida"
    />
    <Barra
        Platillo="Consome"
        Puntuacion={30}
        Precio={30}
        Counter={2}
        Descripcion="Delicioso Consome de Borrego con arroz y garbanzo"
        de1="1 Litro"
        de2="1/2 Litro"
    />
    <Barra
        Platillo="Tacos Dorados"
        Puntuacion={24}
        Precio={25}
        Counter={1}
        Descripcion="Ricos Tacos Dorados de Barbacoa con Crema y Queso Rayado"
        de1="Orden de 3"
        de2="1 Dorado"
        
    />
    


</div>
;*/

export default function Store() {
  return (
    <div className="Carrousel">
      {comida.map((product, idx) => (
        console.log("ok"),
        <Barra Platillo={product.title} Precio={product.price} Key={product.id} Puntuacion={product.score} Descripcion={product.description} Tipos={product.tipos}/>
        
      ))}
    </div>
  );
}

/*export default function Shop(){
    return (
        <div className="Carrousel">
            {console.log(productsArray[2].tamaños[1].tamaño)}

        </div>
    )
}*/

/*export default SideBar;*/

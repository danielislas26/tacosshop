import React from "react";
import Barra from './Displayer';
import "../scss/app.css"

const SideBar = (props) => <div className="Carrousel">

    <Barra
        Platillo="Kilo de Barbacoa"
        Puntuacion={24}
        Precio={500}
        Descripcion="Disfruta de un delicioso kilo de barbacoa hecho a la leña dentro de horno de piedra"
    />
    <Barra
        Platillo="Tacos"
        Puntuacion={24}
        Precio={500}
        Descripcion="Deliciosos Tacos con carne suavecita y sabor a leña con dos toritllas"
    />
    <Barra
        Platillo="Consome"
        Puntuacion={24}
        Precio={500}
        Descripcion="Delicioso Consome de Borrego con arroz y garbanzo"
    />
    <Barra
        Platillo="Tacos Dorados"
        Puntuacion={24}
        Precio={500}
        Descripcion="Ricos Tacos Dorados de Barbacoa con Crema y Queso Rayado"
    />


</div>;

export default SideBar 
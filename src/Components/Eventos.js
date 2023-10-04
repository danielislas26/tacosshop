import React from "react";

function Evento() {

    return(
        <div className="Evento-Container">
            <h3 className="Evento">
            Para Eventos
            </h3>
            <a className="Evento-Contacto" href="https://wa.me/525573381315">Contactanos al 55 73-38-13-15</a>
            <p className="Incluye">incluye:</p>
            <ul className="Evento-Ul">
                <li>Consome</li>
                <li>Barbacoa</li>
                <li>Cebolla/Cilantro/Limones</li>
                <li>Salsas</li>
            </ul>
        </div>
    )
}

export {Evento};
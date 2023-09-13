import React from "react";

const Imagen = ( props ) => { return(
    <>
        <div className="imagen-container">
            <img src={require(`../imgs/${props.img}`)}
                alt="Dinosaurs"
                width={280}
                height={280}>
            </img>
        </div>
    </>
)}

export { Imagen };
import React from "react";

function Instrucciones(){
    return(
        <div className="Instrucciones-Container">
            <div className="Pasos-Titulo-Container">
                <h3>Instrucciones de compra</h3>
            </div>
            <div className="Pasos-Container">
                <div className="Paso-Container">
                        <p className="Paso-number">1</p>
                        <p className="Paso-Texto">Agrega tus productos al carrito y paga con tarjeta, el descuento se aplicara en automatico</p>
                </div>
                <div className="Paso-Container">
                        <p className="Paso-number">2</p>
                        <p className="Paso-Texto">Recibiras un recibo en tu correo a tu nombre con los productos comprados</p>
                </div>
                <div className="Paso-Container">
                        <p className="Paso-number">3</p>
                        <p className="Paso-Texto">podras pasar el Siguente domingo 17 de septiembre a recoger tu pedido con ese numero de recibo o tu nombre y numero de telefono</p>
                </div>
                <div className="Paso-Container">
                        <p className="Paso-number">*</p>
                        <p className="Paso-Texto">Tambien puedes comprar directamente en tienda y pagar en efectivo el domingo, pero no sera valido el descuento</p>
                </div>
            </div>

        </div>
    )
}

export { Instrucciones };
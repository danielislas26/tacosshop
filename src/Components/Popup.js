import React,{ useState } from "react";
import "../scss/app.css";

export default function Modal() {
    const [modal,setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal)
    }

    return (
        <>
           
            <button
                onClick={toggleModal}
                className="btn-modal">
                    Open
            </button>
            
            {modal && (
                
                <div className="Menu-Popup-Container">

                <div className="Menu-Popup">
                   
                        <div className="Menu-Block l1-s-menu">
                            <label>Contacto</label>
                        </div>
                        <div className="Menu-Block l1-s-menu">
                            <label>Menu</label>
                        </div>
                        <div>
                            <label>Bienvenido</label>
                        </div>
                
                        <div className="Menu-Block l1-s-menu">
                            <label>Horarios</label>
                        </div>
                        <div className="Menu-Block l1-s-menu">
                            <label>Carrito</label>
                        </div>
                  
                </div>
                </div>
            )}
            
        </>
    );
}
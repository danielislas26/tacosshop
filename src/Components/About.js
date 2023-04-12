import React from "react";
import "../scss/app.css"
const Mapa = (props) => <div className="About-Container">
    
    
    <iframe className="Mapa" title="Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d940.1436413196309!2d-99.22706983422894!3d19.51693115260932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d202d160393569%3A0x67d0aaa601e6d34e!2sArmadora%20Nash%2034%2C%2054080%20Vista%20Hermosa%2C%20M%C3%A9x.!5e0!3m2!1sen!2smx!4v1679099582827!5m2!1sen!2smx"
              
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            />

<div className="About-text-container">

    <div className="Titulo-Container">
        <h3 className="Titulo-Text">Mas Sobre Nosotros</h3>
        <hr className="Linea"></hr>
    </div>
    <div className="TextoContainer">
        <div className="SubTitle">
            <label className="About-Title l1-s" >Ubicacion</label>
        </div>
        <div className="subText-Container">
            <label className="l1-s subText1" >Tlalnepantla Colonia Vista Hermosa Calle Armadora Nash No 34</label>
        </div>
        <div className="SubTitle">
            <label className="l1-s About-Title" >Historia</label>
        </div>
        <div className="subText-Container">
            <label className="subText2 l1-s" >Abrimos por primera vez un domingo del 2021 en vista hermosa donde traiamos la barbacoa desde hidalgo, actualmente la hacemos aqui mismo en vista hermosa en horno y a la leña sin gas y con carne 100% de borrego cuya receta lleva 3 generaciones.</label>
        </div>
    </div>
</div>

</div>;

export default Mapa;
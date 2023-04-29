import React from "react";
import "../scss/app.css";


const Header = (props) => 
<div className="Header-container">
  <div className="Icon-container">
    <img src={require("../imgs/menu-burger.png")} alt="burger-menu" width={31} height={31}></img>
  </div>
  <div className="Icon-container">
    {/*<img src={require("../imgs/babo-strech.png")} alt="los paquis logo" width={35} height={50}></img>*/}
  </div>
  <div className="Icon-container">
    
  </div>
  {/*<i className=" fa-solid fa-bars" width="50" height="50"></i>*/}
</div>


const Horario = (props) => <div>
  <h1>{props.msg}</h1>
  </div>;








export { Header,Horario}


/*function Horario(props){
  return<h1>{props.msg}</h1>
}

export default Horario;
*/



/*function Horario() {
    return (
  <h1>!!Abierto solo los Domingos de 8:30 a 1:30!!</h1>
    );
  }
  
  export default Horario;*/
import React, { useContext } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Popup from "reactjs-popup";
import { CartPoup } from "./Shoping";
import "../scss/app.css";
import { CartContext } from "../CartContext";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      estado: this.Estado,
    };
  }

  render() {
    if (this.props.Estado === true) {
      return <Des />;
    } else {
      return <Des2 />;
    }
  }
}

const Des = (props) => {
  const cart = useContext(CartContext);
  const productsCount = cart.items.length;

  document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", myFunction());

    let header = document.getElementById("myHeader");
    let sticky = header.offsetTop;
    console.log(sticky);
    function myFunction() {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    }
  });

  /* const sticky = header.offsetTop;

  function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }*/

  return (
    <div className="Header-container sticky" id="myHeader">
      <div className="Icon-container">
        <div className="example-warper">
          <Popup
            key={"bottom center"}
            trigger={
              <button type="button" className="button">
                <img
                  type="button"
                  className="butoon"
                  src={require(`../imgs/menu-burger.png`)}
                  alt="burger-menu"
                  width={30}
                  height={30}
                ></img>
              </button>
            }
            position="bottom left"
            on={["hover", "focus"]}
            arrow={"bottom left" !== "center center"}
          >
            <ul className="ul-menu">
              <div className="menu-item">
                <Link className="link"
                  to="About-Container"
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Contacto
                </Link>
              </div>
              <div className="menu-item">
                <Link className="link"
                  to="Instrucciones-Container"
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Instrucciones
                </Link>
              </div>
            </ul>
          </Popup>
        </div>
      </div>
      <div className="Icon-container">
        {/*<img src={require("../imgs/babo-strech.png")} alt="los paquis logo" width={35} height={50}></img>*/}
      </div>
      <div className="Icon-container">
        <Popup
          className="CartPopup"
          key={"bottom center"}
          trigger={
            <div>
              <div className="Items-Counter">
                <div className="Counter-Container">
                  <p>{productsCount}</p>
                </div>
              </div>
              <img
                type="button"
                className="d"
                src={require(`../imgs/NewEmpty.png`)}
                alt="burger-menu"
                width={38}
                height={38}
              ></img>
            </div>
          }
          modal
          nested
        >
          {(close) => (
            <div className="modal">
              <button className="close" onClick={close}>
                &times;
              </button>
              <CartPoup />
            </div>
          )}
        </Popup>
      </div>
      {/*<i className=" fa-solid fa-bars" width="50" height="50"></i>*/}
    </div>
  );
};

function Des2() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/home");
  }
  return (
    <div className="Header-container">
      <div className="Icon-container"></div>
      <div className="Icon-container">
        <button onClick={handleClick} className="home-button">
          <img
            src={require("../imgs/miniatura.png")}
            alt="miniatura"
            width={45}
            height={45}
          ></img>
        </button>
        {/*<img src={require("../imgs/babo-strech.png")} alt="los paquis logo" width={35} height={50}></img>*/}
      </div>
      <div className="Icon-container"></div>
      {/*<i className=" fa-solid fa-bars" width="50" height="50"></i>*/}
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

const Horario = (props) => (
  <div>
    <h1>{props.msg}</h1>
  </div>
);

const ToolTipPositions = () => (
  <div className="example-warper">
    <Popup
      key={"bottom center"}
      trigger={
        <button type="button" className="button">
          position
        </button>
      }
      position="bottom center"
      on={["hover", "focus"]}
      arrow={"bottom center" !== "center center"}
    >
      <ul className="Toolbar">
        <div className="Section">Menu</div>
        <div className="Section">Contacto</div>
        <div className="Section">Horario</div>
        <div className="Section">
          <p>Carrito</p>
        </div>
      </ul>
    </Popup>
  </div>
);

export { Header, Horario, ToolTipPositions };

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

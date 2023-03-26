import React from 'react';
import ReactDOM from 'react-dom/client';
import {Horario,Header} from './Components/Header';
import {Holder,Anuncio} from './Components/Holder';
import  SideBar from './Components/Sidebar';
import Mapa from './Components/About';
import Propiedades from './Components/propiedades';
import "./scss/app.scss";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <Holder/>
    <Anuncio/>
    <SideBar/>
    <Mapa/>
    <Horario msg="hola desde un componente con props"/>
    <Propiedades 
    cadena="Esto es una cadena de texto" 
    numero={19} 
    booleano={true} 
    arreglo={[1,2,3]}
    objeto={{nombre:"john",correo:"johnmircha@gmail.com"}}
    elementoReact={<i>Esto es un elemento React</i>}
    funcion={(num) => num * num}
    componenteReact={<Horario msg="soy un componente pasado como prop"/>}
    />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


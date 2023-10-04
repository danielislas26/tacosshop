import React from "react";
import { Evento } from "../Eventos";
import { Menu } from "../Menu";
import { Header } from "../Header";
import { Holder, Anuncio } from "../Holder";
import SideBar from "../Sidebar";
import Mapa from "../About";
import { Instrucciones } from "../Instrucciones";


function Home() {
  return (
    <React.StrictMode>
      <Header
      Estado={true}
      Cart={"empty-cart"}
      Menu={"menu-burger"}
      />
      <Menu></Menu>
      <Holder/>
      <Anuncio />
      <Evento />
      <SideBar />
      <Instrucciones id="section1"/>
      <Mapa/>
    </React.StrictMode>
  );
}

export default Home;

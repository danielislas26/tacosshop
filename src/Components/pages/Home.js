import React from "react";
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
      <SideBar />
      <Instrucciones id="section1"/>
      <Mapa/>
    </React.StrictMode>
  );
}

export default Home;

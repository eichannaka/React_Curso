import React from 'react'
import {CartWidget,MiComponente} from "./CartWidget" 


const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><a href="#home">Nosotros</a></li>
        <li><a href="#productos">Productos</a></li>
        <li><a href="#contact">Contacto</a></li>
        <li><a class="active" href="#">
        <MiComponente/>
        </a></li>
      </ul>
    </nav>
  );
};

export default Navbar;

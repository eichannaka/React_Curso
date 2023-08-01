import React from 'react';
import CartWidget from './CartWidget';
import './layout/Navbar.css';

const Navbar = () => {
  return (
    <nav className="nav-bar">
      <ul className="nav-list">
        <li className="nav-item">
          <a href="/">Nostros</a>
        </li>
        <li className="nav-item"> 
          <a href="/">Productos</a>
        </li>
        <li className="nav-item">
          <a href="/">Contacto</a>
        </li>
        <li className="nav-item">
          <a href="/"><CartWidget></CartWidget></a>
        </li>
      </ul>
    </nav>
  );
};
  
export default Navbar;

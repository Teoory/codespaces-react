import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';
import logo from './Logo.png';

const NavBar = () => {
  useEffect(() => {
    window.onscroll = function () {
      scrollFunction();
    };

    function scrollFunction() {
      const navbar = document.getElementById("navbar");

      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        navbar.style.backgroundColor = "#444444";
      } else {
        navbar.style.backgroundColor = "rgb(0, 0, 0, 0.15)";
      }

      if (document.body.clientWidth < 768) {
        navbar.style.backgroundColor = "none";
      }
    }

    if (document.body.clientWidth < 768) {
      const navbar = document.getElementById("navbar");
      navbar.style.backgroundColor = "none";
    }
  }, []);

  return (
      <header id="NBar">
        <nav className="navbar" id="navbar">
            <div className="navbar-container container">
                <input type="checkbox" name="" id=""/>
                <div className="hamburger-lines">
                    <span className="line line1"></span>
                    <span className="line line2"></span>
                    <span className="line line3"></span>
                </div>
                <ul className="menu-items">
                  <li> <a className="li-item" href="/#top-bg">Ana Sayfa</a> </li>
                  <li> <Link className="li-item" to="https://teoory.github.io/_u83jsonreader/">U83Game</Link> </li>
                  <li> <a className="li-item" href="#exp">Deneyim</a> </li>
                  <li> <Link className="li-item" to="https://discord.gg/CBhCPPh5Fv" target="_blank" >Discord</Link> </li>
                  <li> <a className="li-item" href="#about">Hakkimda</a> </li>
                  <li> <a className="li-item" href="#contact">Iletisim</a> </li>                  
                </ul>
                <a href="/" className="logo">
                  <img id="logo" src={logo} alt="Teory-Logo" className="logo"/>
                </a>
            </div>
        </nav>
  </header>
  )
}

export default NavBar;
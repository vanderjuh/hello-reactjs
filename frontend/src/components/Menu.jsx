import React from 'react'
import './css/menu.css'

export default props =>
    <nav id="topMenu">
        <div id="titleTopMenu"><a href="#header">Start Bootstrap</a></div>
        <button id="menuButton">
            <i className="fa fa-bars"></i>
        </button>
        <menu>
            <ul>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#team">Team</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </menu>
    </nav>
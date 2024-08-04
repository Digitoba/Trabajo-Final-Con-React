import React from "react";
import Header from './Header';
import Footer from './Footer';
import sextante from './img/sextante.png';
import globo from './img/planeta.png';
import libro from './img/libro.jpeg';
import pieza from './img/piezarara.jpeg'
import pava from './img/pava.jpeg';
import mapa from './img/mapa.jpeg';
import casco from './img/casco.jpeg';
import plumas from './img/OIG2.jpeg';

const Antiguedades = () => {
    return (
        <>
            <Header />
            <div id="menu-artefactos">
                <ul>
                    <a href="#"><li>Mágicos</li></a>
                    <a href="#"><li>Mundanos</li></a>
                    <a href="#"><li>Sin explicación</li></a>
                    <a href="#"><li>Libros</li></a>
                    <a href="#"><li>Armamentos</li></a>
                </ul>
            </div>
            
            <div class="grid-artefactos">
                <ul>
                    <li>
                        <h2>Pieza 1</h2>
                        <img src={ casco } alt=""></img>
                    </li>
                    <li>
                        <h2>Pieza 2</h2>
                        <img src={ libro } alt=""></img>
                    </li>
                    <li>
                        <h2>Pieza 3</h2>
                        <img src={ mapa } alt=""></img>
                    </li>
                    <li>
                        <h2>Pieza 4</h2>
                        <img src={ plumas } alt=""></img>
                    </li>
                    <li>
                        <h2>Pieza 5</h2>
                        <img src={ pava } alt=""></img>
                    </li>
                    <li>
                        <h2>Pieza 6</h2>
                        <img src={ pieza } alt=""></img>
                    </li>
                    <li>
                        <h2>Pieza 7</h2>
                        <img src={ globo } alt=""></img>
                    </li>
                    <li>
                        <h2>Pieza 8</h2>
                        <img src={ sextante } alt=""></img>
                    </li>
                </ul>
            </div>
            <Footer />
        </>
    )
}

export default Antiguedades
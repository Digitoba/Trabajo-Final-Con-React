import React from "react";
import Header from './Header';
import Footer from './Footer';
import barba from './img/barba.png';
import mujer from './img/mujer.jpg';
import gaucho from './img/gaucho.jpg';
import sextante from './img/sextante.png';
import globo from './img/planeta.png';
import libro from './img/libro.jpeg';
import pieza from './img/piezarara.jpeg'

const Index = () => {
    return (
    <>
    <Header />
    <main id="main">
        
        <section class="carta-presentacion">
            <article class="carta-texto">
                <h1>
                    La Cofradía, una puerta a un pasado onírico.
                </h1>
            </article>
        </section>

        <section class="separador-1">
            <article class="separador-texto">
                <h2>Nuestras piezas</h2>
                <p>La Cofradía es un gran gremio de aventureros que se encarga de coleccionar, comprar y vender los elementos, artefactos y artilugios más interesantes y perdidos de culturas milenarias que quizás nunca existieron. Estos son tan sólo algunos de nuestros más interesantes tesoros encontrados desde las costas de Tucún hasta el archipiélago de Kulap.</p>
            </article>
            <article class="grid-imagenes">
                <ul>
                    <li><img src={ globo } alt="globo-terraqueo"></img></li>
                    <li><img src={ sextante } alt="sextante"></img></li>
                    <li><img src={ libro } alt="libro"></img></li>
                    <li><img src= { pieza } alt="pieza-rara"></img></li>
                </ul>
            </article>
        </section>

        <section class="carta-nuestros-expertos">
            <h2>Nuestros principales expertos</h2>
            <p>
                La Cofradía Epoque se nutre del trabajo que llevan a cabo sus más acérrimos exploradores. Les presentamos a algunos de nuestros mejores.
            </p>
            <article class="experto1">
                <div class="experto1-texto">
                    <h2>Ángelo</h2>
                    <p>Pepe ipsum dolor sit amet consectetur adipisicing elit. Iusto aspernatur optio non consectetur in possimus temporibus ab, veritatis quis quia ipsum nobis facilis ratione, placeat cupiditate animi, nemo provident ducimus!</p>
                </div>
                <img class="experto1-foto" src={ barba } alt="retrato-pepe"></img>
            </article>
            <article class="experto2">
                <div class="experto2-texto">
                    <h2>Josefina</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, illum at reprehenderit quod totam quo nihil molestiae eius sit quis! Molestias sapiente voluptate ut at dolore quidem unde temporibus quia?</p>
                </div>
                <img class="experto2-foto" src={ mujer } alt="retrato-maria"></img>
            </article>
            <article class="experto3">
                <div class="experto3-texto">
                    <h2>Pedro</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde itaque illo amet? Itaque aspernatur expedita quaerat perferendis vel amet dolor nam hic facere culpa id, molestiae dolorum quibusdam in sit?</p>
                </div>
                <img class="experto3-foto" src={ gaucho } alt="retrato-juan"></img>
            </article>
        </section>

    </main>
    <Footer />
    </>
    )
}

export default Index
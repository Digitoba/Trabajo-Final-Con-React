import React from "react";
import Header from './Header';
import Footer from "./Footer";

const Contacto = () => {
    return (
        <>
        <Header />
            <div id="formulario">
                <h1>¿Quiere ser parte de la cofradía? Contáctenos</h1>
                <form id="formulario-cajas" action="https://formspree.io/f/mblrobjj" method="POST">
                    <label for="nombre">Nombre:</label>
                    <input type="text" placeholder="Nombre"></input>
                    <label for="correo electrónico">Correo electrónico:</label>
                    <input type="email" placeholder="Correo electrónico"></input><br></br><br></br>
                    <label for="porque-contacto">¿Por qué quiere contactarnos?</label><br></br>
                    <textarea name="porque-contacto" id="porque-contacto"></textarea><br></br>
                    <button type="submit">Enviar</button>
                </form>
            </div>
        <Footer />
        </>
    )
}

export default Contacto
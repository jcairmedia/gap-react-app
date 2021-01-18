import React, { Component } from 'react';

import iconCardifContigo from '../../assets/images/CardifContigoLogo.png';


class MainBanner extends Component
{
    render()
    {
        return (

            <section className="g-hero">

                <div className="g-hero__section">
                    <h1 className="a-title a-title--without-color">
                        Todos los beneficios de tu auto los encuentras aquí.
                    </h1>
                    <p className="a-lead a-lead--without-color">
                        Accede ahora a la primera plataforma que integra
                        servicios, herramientas y consejos para mantener tu auto en
                        las mejores condiciones
                    </p>
                    <a className="a-btn">
                        comenzar ahora
                    </a>
                </div>

                <div className="g-hero__section g-hero__section--image-background"> </div>

            </section>
        );
    }
}

export default MainBanner;
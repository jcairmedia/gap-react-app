import React, { Component } from 'react';

import iconCardifContigo from '../../assets/images/CardifContigoLogo.png';


class Welcome extends Component
{
    render()
    {
        return (
            <section className="g-start-here">
                <h1 className="a-call-to-action">
                    Nosotros te acompañamos
                    <br/>
                    para que nunca dejes de moverte.
                </h1>

                <a className="a-btn a-btn--background">
                    Empieza aquí
                </a>
            </section>
        );
    }
}

export default Welcome;
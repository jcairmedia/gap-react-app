import React, { Component } from 'react';

class Help extends Component
{
    render()
    {
        return (
            <section className="g-help-us">

                <div className="g-help-us__inner-container">

                    <div className="m-help-card">
                        <img className="a-icon" src="" alt="icono pregunta"/>
                            <h3> ¿Problemas para iniciar sesión? </h3>
                            <p>
                                ponte en contacto con nosotros, estamos para ayudarte
                            </p>
                    </div>

                    <div className="m-help-card">
                        <img className="a-icon" src="" alt="icono llamada"/>
                            <h3> Llama a nuestros centros de atención </h3>
                            <p>
                                CDMX y Área Metropolitana: 00-00-00-00
                            </p>
                            <p>
                                Resto de la República: 00-00-00-00
                            </p>
                    </div>

                    <div className="m-help-card">
                        <img className="a-icon" src="" alt="icono correo"/>
                            <h3> Escríbenos por correo </h3>
                            <p>
                                contacto@cardif.com.mx
                            </p>
                    </div>
                </div>
            </section>

    );
    }
}

export default Help;
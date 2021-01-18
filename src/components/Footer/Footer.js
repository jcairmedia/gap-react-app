import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (

            <>
                <section className="o-div-line">
                    <hr/>
                </section>

                <footer className="g-footer">

                    <img src="assets/images/CardifContigoLogo.png" alt="Cardif contigo"/>

                    <a href="/"> Términos y condiciones </a>
                    <a href="/"> Políticas de privacidad </a>
                    <a href="/"> Cardif Derechos reservados - Copyright 2020 </a>

                </footer>
            </>
        );
    }
}

export default Footer;
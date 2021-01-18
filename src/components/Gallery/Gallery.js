import React, { Component } from 'react';
import img_1 from '../../assets/images/carroUno.png'
import img_2 from '../../assets/images/carroDos.png'
import img_3 from '../../assets/images/carroTres.png'


class Gallery extends Component
{
    render()
    {
        return (
            <section className="g-gallery">
                <img src={img_1} alt="Cardif contigo"/>
                <img src={img_2} alt="Cardif contigo"/>
                <img src={img_3} alt="Cardif contigo"/>
            </section>
        );
    }
}

export default Gallery;
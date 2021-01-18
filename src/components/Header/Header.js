import React, { Component } from 'react';

import iconCardifContigo from '../../assets/images/CardifContigoLogo.png';


class Header extends Component
{
    render()
    {
        return (
            <div>
                <header className="g-header">
                    <img className="g-header__logo" src={ iconCardifContigo } alt="Cardif contigo"/>
                    <img className="g-header__logo" src={ iconCardifContigo } alt="Cardif contigo"/>
                </header>
            </div>
        );
    }
}

export default Header;
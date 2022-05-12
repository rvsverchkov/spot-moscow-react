import React from 'react';
import logoLink from '../../images/logo.svg'

function Header () {
    return (
        <header className="header">
            <div className='header__logo' src={logoLink}/>
            <button className="header__button">Войти</button>
        </header>
    )
}

export default Header;

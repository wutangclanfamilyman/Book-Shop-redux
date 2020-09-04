import React from 'react';
import cartIcon from './shopping-cart-solid.svg';

import './app-header.scss';

const Header = () => {
    return (
        <header className="header">
            <a className="header__link" href="/">
                Книги
            </a>
            <a className="header__link" href="/cart">
                <img className="header__cart" src={cartIcon} alt="cart"></img>
                Счет: 50 грн
            </a>
        </header>
    )
}

export default Header;
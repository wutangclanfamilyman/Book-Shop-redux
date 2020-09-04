import React from 'react';
import cartIcon from './shopping-cart-solid.svg';
import {Link} from 'react-router-dom';

import './app-header.scss';
import { connect } from 'react-redux';

const Header = ({totalPrice}) => {
    return (
        <header className="header">
            <Link className="header__link" to="/">
                Книги
            </Link>
            <Link className="header__link" to="/cart">
                <img className="header__cart" src={cartIcon} alt="cart"></img>
                Счет: {totalPrice} грн
            </Link>
        </header>
    )
}

const  mapStoreToProps = ({totalPrice}) => {
    return {
        totalPrice
    }
}

export default connect(mapStoreToProps)(Header);
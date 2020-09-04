import React from 'react';
import {connect} from 'react-redux';
import {deleteBookFromCart} from '../../actions';
import './cart-table.scss';

const CartTable = ({cart, deleteBookFromCart}) => {

    if(cart.length === 0) {
        return (
            <div className="cart-title">
                Ваша корзина пуста :(
            </div>
        )
    }

    return (
        <>
            <div className="cart-title">Ваш заказ:</div>
            <div className="cart-list">
                {
                    cart.map(item => {
                        const {id, title, price, qtty, image} = item;
                        return (
                            <div className="cart-item" key={id}>
                                <div className="cart-item__image">
                                    <img src={image} />
                                </div>
                                <div className="cart-item__title">
                                    {title}
                                </div>
                                <div className="cart-item__price">
                                    {price} грн * {qtty}
                                </div>
                                <div onClick={() => deleteBookFromCart(id)} className="cart__close">&times;</div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )

}

const mapStateToProps = ({cart}) => {
    return {
        cart
    }
}

const mapDispatchToProps = {
    deleteBookFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(CartTable);
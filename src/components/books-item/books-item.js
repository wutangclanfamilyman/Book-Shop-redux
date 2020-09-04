import React from 'react';
import {Link} from 'react-router-dom';
import './books-item.scss';

const BooksItem = ({booksItem, onAddedToCart}) => {

    const {id, title, pages, price, author, image} = booksItem;

    return (
        <li className="books-item" key={id}>
            <div className="books-item__title">{title}</div>
            <div className="books-item__image">
                <img src={image}/>
            </div>
            <div className="books-item__author">Автор: {author}</div>
            <div className="books-item__price">Цена: {price} грн</div>
            <div className="books-item__pages">К-ство страниц: {pages} с.</div>
            <div className="books-item__controls">
                <Link to={`/${id}`} className="btn-details">Описание</Link>
                <button onClick={(e) => {
                    e.preventDefault();
                    onAddedToCart()
                }} className="btn-buy">Купить</button>
            </div>
        </li>
    )
}

export default BooksItem;
import React from 'react';
import './books-item.scss';

const BooksItem = (booksItem) => {

    console.log(booksItem)
    const {id, title, pages, price, author, image} = booksItem.booksItem;

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
                <a className="btn-details">Описание</a>
                <button className="btn-buy">Купить</button>
            </div>
        </li>
    )
}

export default BooksItem;
import React, { Component } from 'react';
import {connect} from 'react-redux';
import Spinner from '../spinner';
import Error from '../error';
import WithBooksService from '../hoc';
import {Link} from 'react-router-dom';
import {booksError, booksRequested, booksLoaded, addBookToCart} from '../../actions';
import './itemPage.scss';

class ItemPage extends Component {

    componentDidMount() {
        if(this.props.booksItems.length === 0) {
            this.props.booksRequested();

            const {BooksService} = this.props;
            BooksService.getBooksItems()
                .then(res => this.props.booksLoaded(res))
                .catch(error => this.props.booksError())
        }
    }
    
    render() {

        const {loading, error, booksItems} = this.props;
        
        if(loading) {
            return (
                <Spinner />
            )
        }
        if(error) {
            return (
                <Error />
            )
        }

        const item = booksItems.find(el => +el.id === +this.props.match.params.id);

        const {id, title, description, pages, author, price, image} = item;

        return (
            <div className="item-page">
                <div className="item-page__image">
                    <img src={image} />
                </div>
                <div className="item-page__content">
                    <div className="item-page__title">{title}</div>
                    <div className="item-page__descr">Описание: <span>{description}</span></div>
                    <div className="item-page__pages">Количество страниц: <span>{pages} стр.</span></div>
                    <div className="item-page__author">Автор: <span>{author}</span></div>
                    <div className="item-page__price">Цена: <span>{price} грн</span></div>
                    <div className="item-page__controls">
                        <Link to={`/`} className="btn-details">Назад</Link>
                        <button onClick={() => this.props.addBookToCart(id)} className="btn-buy">Купить</button>
                    </div>
                </div>
            </div>
        )
    }

}

const mapStateToProps = (state) =>   {
    return {
        booksItems: state.books,
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = {
    booksLoaded,
    booksError,
    booksRequested,
    addBookToCart
}

export default WithBooksService()(connect(mapStateToProps, mapDispatchToProps)(ItemPage))
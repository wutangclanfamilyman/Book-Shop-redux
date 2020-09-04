import React, {Component} from 'react';
import BooksItem from '../books-item';
import {connect} from 'react-redux';
import WithBooksService from '../hoc';
import {booksLoaded, booksRequested, booksError, addBookToCart} from '../../actions';
import Spinner from '../spinner';
import Error from '../error';
import './books-list.scss';

class BooksList extends Component {

    componentDidMount() {
        this.props.booksRequested();

        const {BooksService} = this.props;
        BooksService.getBooksItems()
            .then(res => this.props.booksLoaded(res))
            .catch(() => this.props.booksError())
    }

    render() {

        const {booksItems, loading, error, addBookToCart} = this.props;

        if(loading) {
            return <Spinner/>
        }
        if(error) {
            return <Error/>
        }

        const items = booksItems.map(bookItem => {
            return <BooksItem key={bookItem.id} onAddedToCart={() => {addBookToCart(bookItem.id)}} booksItem={bookItem} />
        });

        return (
            <View items={items} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        booksItems: state.books,
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps =  {
    booksLoaded,
    booksRequested,
    booksError,
    addBookToCart
};

const View = ({items}) => {

    return (
        <ul className="books-list">
            {items}
        </ul>
    ) 
}

export default WithBooksService()(connect(mapStateToProps, mapDispatchToProps)(BooksList));
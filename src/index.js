import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import {Provider} from 'react-redux';
import BooksService from './services/booksService';
import BooksServiceContext from './components/books-service-context';
import store from './store';
import './index.scss';

const booksService = new BooksService();

ReactDOM.render(
    <Provider store={store}>
        <BooksServiceContext.Provider value={booksService}>
            <App/>
        </BooksServiceContext.Provider>
    </Provider>, 
    document.getElementById('app')
)
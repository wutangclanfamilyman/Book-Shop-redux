import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import {Provider} from 'react-redux';
import BooksService from './services/booksService';
import {BrowserRouter as Router} from 'react-router-dom';
import BooksServiceContext from './components/books-service-context';
import store from './store';
import './index.scss';

const booksService = new BooksService();

ReactDOM.render(
    <Provider store={store}>
        <BooksServiceContext.Provider value={booksService}>
            <Router>
                <App/>
            </Router>
        </BooksServiceContext.Provider>
    </Provider>, 
    document.getElementById('app')
)
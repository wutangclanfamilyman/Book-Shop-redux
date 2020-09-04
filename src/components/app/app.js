import React from 'react';
import {Main, Cart, ItemPage} from '../pages';
import Header from '../app-header';
import './app.scss';

const App = () => {
    return (
        <div className="wrapper">
            <Header/>
            <Main />
        </div>
    )
}

export default App;
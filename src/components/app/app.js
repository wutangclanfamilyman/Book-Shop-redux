import React from 'react';
import {MainPage, CartPage, ItemPage} from '../pages';
import Header from '../app-header';
import {Switch, Route} from 'react-router-dom';
import './app.scss';

const App = () => {
    return (
        <div className="wrapper">
            <Header/>
            <Switch>
                <Route path={'/'} exact component={MainPage} />
                <Route path={'/cart'} exact component={CartPage} />
                <Route path={'/:id'} exact component={ItemPage} />
            </Switch>
        </div>
    )
}

export default App;
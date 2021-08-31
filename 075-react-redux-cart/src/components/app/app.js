import React from 'react';
import {MainPage, CartPage} from '../pages';
import AppHeader from '../app-header';
import {Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import Background from './food-bg.jpg';


const App = ({items}) => {

    let arr = items.map(item => item = item.price);
    
    return (
        <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
            <AppHeader items={arr}/>
            <Switch>
                <Route 
                    path="/"
                    component={MainPage}
                    exact/>
                <Route
                    path="/cart"
                    component={CartPage}
                    />
            </Switch>
        </div>
    )
}


const mapStateToProps = ({items}) => {
    return {
        items
    }
};

export default connect(mapStateToProps)(App);



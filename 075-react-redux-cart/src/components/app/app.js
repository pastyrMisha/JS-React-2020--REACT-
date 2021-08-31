import React from 'react';
import {MainPage, CartPage} from '../pages';
import AppHeader from '../app-header';
import {Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import Background from './food-bg.jpg';


const App = ({price}) => {

let total = price.map(item => item = item.price);

let sum= 0;

for(let i=0; i< total.length; i++){
    sum = sum + total[i];
}

    return (
        <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
            <AppHeader total={sum}/>
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


const mapStateToProps = ({price}) => {
    return {
        price
    }
};

export default connect(mapStateToProps)(App);



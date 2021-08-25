import React from 'react';
import {MainPage, CartPage} from '../pages';
import AppHeader from '../app-header';
import WithRestroService from '../hoc';

import Background from './food-bg.jpg';

const App = ({RestroService}) => {
    console.log(RestroService.getMenuItems());
    return (
        <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
            <AppHeader total={50}/>
            <MainPage/>
            <CartPage/>
        </div>
    )
}

export default WithRestroService()(App);
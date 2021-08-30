import React from 'react';
import {MainPage, CartPage} from '../pages';
import AppHeader from '../app-header';
import {Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
// import {addedToCart} from '../../actions';
import Background from './food-bg.jpg';


const App = ({items}) => {

console.log({items});
//     items.map(element => {
//         console.log(element.price);
// });

// items.map(item => {
//     const {price} = item;
//     return console.log(item); 
// })


    return (
        <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
            <AppHeader total={[]}/>
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

// const mapDispatchToProps = {
//     addedToCart
// };



export default connect(mapStateToProps)(App);
// export default App;


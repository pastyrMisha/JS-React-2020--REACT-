import React from 'react';
import {MainPage, CartPage} from '../pages';
import AppHeader from '../app-header';
import {Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import Background from './food-bg.jpg';


const App = ({items}) => {

  
        
// for (let i = 0; i < items.length; i++) {
//     console.log(items[i].price);
// }
    


// arr.forEach(element => {
//     return console.log(element.price);
// });
    
console.log({items});
//  console.log(item.price);

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

export default connect(mapStateToProps)(App);
// export default App;


import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer';
// import {inc, dec, rnd} from './actions'; //Упростим:
// import * as actions from './actions';
import App from './components/app';


const store = createStore(reducer);


// const {inc, dec, rnd} = bindActionCreators(actions, dispatch);

// const update = () => {
    ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('root'));
// }
// update();

// store.subscribe(update);

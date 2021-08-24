```javascript
import {createStore, bindActionCreators} from 'redux';
import reducer from './reducer';
// import {inc, dec, rnd} from './actions'; //Упростим:
import * as actions from './actions';

const store = createStore(reducer);
const {dispatch} = store;

// const bindActionCreator = (creator, dispatch) => (...args) => {
//     dispatch(creator(...args));
// }
// const incDispatch = bindActionCreator(inc, dispatch);
// const decDispatch = bindActionCreator(dec, dispatch);
// const rndDispatch = bindActionCreator(rnd, dispatch);
// //Написали втроенную ф-ию redux руками, а теперь используем bindActionCreators:
// const incDispatch = bindActionCreators(inc, dispatch);
// const decDispatch = bindActionCreators(dec, dispatch);
// const rndDispatch = bindActionCreators(rnd, dispatch);

// actions = {
//     inc: inc,
//     dec: dec,
//     rnd: rnd
// }

const {inc, dec, rnd} = bindActionCreators(actions, dispatch);

// const {incDispatch, decDispatch, rndDispatch} = bindActionCreators(
//     {
//         incDispatch: inc,
//         decDispatch: dec,
//         rndDispatch: rnd
//     }
//     , dispatch);
// const decDispatch = bindActionCreators(dec, dispatch);
// const rndDispatch = bindActionCreators(rnd, dispatch);

document.getElementById('inc').addEventListener('click', inc);

document.getElementById('dec').addEventListener('click', dec);

document.getElementById('rnd').addEventListener('click', () => {
    const value =  Math.floor(Math.random() * 10);
    rnd(value); 
});

const update = () => {
    document.getElementById('counter').textContent = store.getState();
}

store.subscribe(update);
```
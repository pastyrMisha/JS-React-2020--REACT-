import {createStore, bindActionCreators} from 'redux';
import reducer from './reducer';
import {inc, dec, rnd} from './actions';

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



const incDispatch = bindActionCreators(
    {
        incDispatch: inc;
        
    }
);
// const decDispatch = bindActionCreators(dec, dispatch);
// const rndDispatch = bindActionCreators(rnd, dispatch);

document.getElementById('inc').addEventListener('click', incDispatch);

document.getElementById('dec').addEventListener('click', decDispatch);

document.getElementById('rnd').addEventListener('click', () => {
    const value =  Math.floor(Math.random() * 10);
    rndDispatch(value); 
});

const update = () => {
    document.getElementById('counter').textContent = store.getState();
}

store.subscribe(update);

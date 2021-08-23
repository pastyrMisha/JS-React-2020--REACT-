```javascript
// const initialState = 0;

// const reducer = (state, action) => {
//   if(action.type === 'INC') {
//     return state + 1;
//   }
//   return 0;
// }

// let state = reducer(initialState, {type: 'INC'});
// console.log(state);
// state = reducer(state, {type: 'INC'});
// console.log(state);




// const reducer = (state = 0, action) => {
//   switch (action.type) {
//     case 'INC':
//         return state + 1;
//     default:
//         return state;
//   }
// }

// let state = reducer(undefined, {});

// state = reducer(state, {type: 'INC'});
// console.log(state);
// state = reducer(state, {type: 'INC'});
// console.log(state);


```
// //REDUX:
```javascript
import {createStore} from 'redux';

const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'INC':
        return state + 1;
    default:
        return state;
  }
}
```javascript
const store = createStore(reducer);
```
// let state = reducer(undefined, {}); // //- в store уже есть эта переменная. Там создан store, который содержит в себе и reducer и состояния state.
// console.log(store.getState());

// store.dispatch({type: 'INC'}) // //- нужен,чтобы запустить reducer с тем state, который есть у нас в store и с тем action, который мы ему передали.
```javascript
// console.log(store.getState());
// store.dispatch({type: 'INC'})
// console.log(store.getState());
// store.dispatch({type: 'INC'})
// console.log(store.getState());

store.subscribe(() => {
    console.log(store.getState());
})
```
// //- ф-ия subscribe это ф-ия подписки на store. Каждый раз, когда изменяется store, то будет вызываться callback-функция внутри (console.log(store.getState()) 1, 2 и 3)
```javascript
store.dispatch({type: 'INC'});
store.dispatch({type: 'INC'});
store.dispatch({type: 'INC'});
```
```javascript
// let state = reducer(undefined, {});

// state = reducer(state, {type: 'INC'});
// console.log(state);
// state = reducer(state, {type: 'INC'});
// console.log(state);
```
import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
// import {bindActionCreators} from 'redux';
 
const Counter = ({counter, inc, dec, rnd}) => {
    return (
        <div className="jumbotron">
            <h1>{counter}</h1>
            <button onClick={dec} className="btn btn-primary">DEC</button>
            <button onClick={inc} className="btn btn-primary">INC</button>
            <button onClick={rnd} className="btn btn-primary">RND</button>
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        counter : state
    }
}
// const mapDispatchToProps = (dispatch) => {
//     // const {inc, dec, rnd} = bindActionCreators(actions, dispatch);
//     return bindActionCreators(actions, dispatch);
//     // return {
//     //     inc,
//     //     dec,
//     //     // rnd: () => {
//     //     //     const value = Math.floor(Math.random() * 10);
//     //     //     rnd(value)
//     //     // }
//     //     rnd
//     // }
// }
// //Если нет сложных - можем передать просто actions вместо mapDispatchToProps ниже:
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
export default connect(mapStateToProps, actions)(Counter);
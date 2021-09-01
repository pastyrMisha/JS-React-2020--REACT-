import React from 'react';
import cartIcon from './shopping-cart-solid.svg';
import './app-header.scss';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

const AppHeader = () => {
    // let total = 0;

    // for(let i = 0; i< items.length; i++){
    //     total = total + items[i];
    // }

    return (
        <header className="header">
            <Link to = {'/'} className="header__link">Menu</Link>
            <Link to = "/cart" className="header__link">
                <img className="header__cart" src={cartIcon} alt="cart"></img>
                Total: {0} $
            </Link>
        </header>
    )
};


const mapStateToProps = (state) => {
    return {
        menuItems: state.menu,
        loading: state.loading
    }
}

export default connect(({total}) => {() => total})(AppHeader);
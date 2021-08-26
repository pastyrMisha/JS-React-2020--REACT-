import React, {Component} from 'react';
import MenuListItem from '../menu-list-item';
import {connect} from 'react-redux';
import WithRestroService from '../hoc';
import {menuLoaded, menuRequested} from '../../actions';
import Spinner from '../spinner';
import './menu-list.scss';

class MenuList extends Component {
    componentDidMount() {
        this.props.menuRequested();


        const {RestroService} = this.props;
        RestroService.getMenuItems()
        .then(res => this.props.menuLoaded(res));
    }

    render() {
        const {menuItems, loading} = this.props;
            
        if(loading) {
            return <Spinner/>
        }

        return (
            <ul className="menu__list">
                {
                    menuItems.map(menuItem => {
                        return <MenuListItem key={menuItem.id} menuItem={menuItem}/>
                    })
                }
            </ul>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        menuItems: state.menu,
        loading: state.loading
    }
}
// const mapDispatchToProps = (dispatch) => {
//     return {
//         menuLoaded: (newMenu) => {
//             dispatch({
//                 type: 'MENU_LOADED',
//                 payload: newMenu
//             })
//         }
//     }
// }
// const mapDispatchToProps = (dispatch) => {
//     return {
//         menuLoaded: (newMenu) => {
//             dispatch(menuLoaded(newMenu))
//         }
//     }
// }
const mapDispatchToProps = {
    menuLoaded,
    menuRequested
};

export default WithRestroService()(connect(mapStateToProps, mapDispatchToProps)(MenuList));
import React, {Component} from 'react';
import './itemList.css';
import Spinner from '../spinner';



export default class ItemList extends Component {


    state = {
        itemList: null
    }

componentDidMount() {
    const {getData} = this.props;

   getData()
        .then( (itemList) => {
            this.setState({
                itemList
            })
        })
}

renderItem(arr) {
    return arr.map((item) => {
        
        // const {id} = item;
        const label = this.props.renderItem(item);
        console.log(41 + arr.indexOf(item));
        
        return (
            <li
                key={41 + arr.indexOf(item) }
                className="list-group-item"
                onClick={ () => this.props.onItemSelected(41 + arr.indexOf(item))}>
                {label}
            </li>
        )
        
    })
}


    render() {
        
        const {itemList} = this.state;

        if (!itemList) {
            return <Spinner/>
        }
        const items = this.renderItem(itemList);
        
        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}
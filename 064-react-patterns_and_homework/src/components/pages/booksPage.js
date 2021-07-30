import React, {Component} from 'react';
import ItemList from '../itemList';
import ItemDetails, {Field} from '../itemDetails';
import ErrorMessage from '../errorMessage';
import gotService from '../../services/gotService';
import RowBlock from '../rowBlock';

export default class BooksPage extends Component {

    gotService = new gotService();

    state = {
        selectedBook: 10,
        error: false
    }

    onItemSelected = (id) => {
        this.setState({
            selectedBook: id
        }) 
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    render () {

        if (this.state.error) {
            return <ErrorMessage/>
        }

        const itemList = (
            <ItemList 
            onItemSelected={this.onItemSelected}
            getData={this.gotService.getAllBooks}
            renderItem={({name, publisher}) => `${name} (${publisher})`}/>
        )

        const itemDetails = (
            <ItemDetails booksId={this.state.selectedBook}>
                <Field field='publisher' label='Publisher'/>
                <Field field='released' label='Released'/>
                 <Field field='numberOfPages' label='Number of pages'/>
            </ItemDetails>
        )

        return (
            <RowBlock left={itemList} right={itemDetails}/>
        )
    }
}
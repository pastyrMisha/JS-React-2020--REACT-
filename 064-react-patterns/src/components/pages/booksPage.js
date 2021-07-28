import React, {Component} from 'react';
import ItemList from '../itemList';
import CharDetails, {Field} from '../charDetails';
import ErrorMessage from '../errorMessage';
import gotService from '../../services/gotService';
import RowBlock from '../rowBlock';

export default class BooksPage extends Component {

    gotService = new gotService();

    state = {
        selectedBook: 5,
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
            renderItem={({name, gender}) => `${name} (${gender})`}/>
        )

        const charDetails = (
            <CharDetails charId={this.state.selectedBook}>
                <Field field='gender' label='Gender'/>
                <Field field='born' label='Born'/>
                <Field field='died' label='Died'/>
                <Field field='culture' label='Culture'/>
            </CharDetails>
        )

        return (
            <RowBlock left={itemList} right={charDetails}/>
        )
    }
}
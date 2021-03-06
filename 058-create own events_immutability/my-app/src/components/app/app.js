import React, {Component} from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css';
import styled from 'styled-components';

const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 800px;
`;

const StyledAppBlock = styled(AppBlock)`
    background-color: transparent;
`

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : [
                {label: 'Going to learn React', important: true, id: '1'},
                {label: 'That is so good', important: false, id: '2'},
                {label: 'I need a break...', important: false, id: '3'}
             ]
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);

        this.maxId = 4;
    }

deleteItem(id) {
    this.setState(({data}) => {
        const index = data.findIndex(elem => elem.id === id)
        // data.splice(index, 1);
        // return {
        //     data: data
        // } // Меняем data вручную! Это ошибка (!)

        // const before = data.slice(0, index);
        // const after = data.slice(index + 1);
        // const newArr = [...before, ...after];
        // Запишем чище:
        const newArr = [...data.slice(0, index), ...data.slice(index + 1)];

        //  STATE НАПРЯМУЮ МЫ НЕ ИЗМЕНЯЕМ (!)
        return {
            data: newArr 
        }
    });
}

addItem(body) {
    const newItem = {
        label: body,
        important: false,
        id: this.maxId++
    }
    this.setState(({data}) => {
        const newArr = [...data, newItem];
        return {
            data: newArr
        }
    });
}

    render() {
        return (
            <StyledAppBlock>
            <AppHeader/>
            <div className="search-panel d-flex">
                <SearchPanel/>
                <PostStatusFilter/>
            </div>
            <PostList 
                posts={this.state.data} 
                onDelete={this.deleteItem}/>
            <PostAddForm
                onAdd={this.addItem}/>
            </StyledAppBlock>
        )
}
}
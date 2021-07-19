import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css';
import '../app-header/app-header.css';
import '../post-add-form/post-add-form.css';


import '../post-status-filter/post-status-filter.css';
import '../search-panel/search-panel.css';

const App = () => {

     const data = [
        {label: 'Going to learn React', important: true, id: 'qwqw'},
        {label: 'That is so good', important: false, id: 'werr'},
        {label: 'I need a break...', important: false, id: 'fdfdf'}
     ];

    return (
        <div className="app">
        <AppHeader/>
        <div className="search-panel d-flex">
            <SearchPanel/>
            <PostStatusFilter/>
        </div>
        <PostList posts={data} />
        <PostAddForm/>
        </div>
    )
}

export default App;
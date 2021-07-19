import React from 'react';

import PostListItem from '../post-list-item';
import './post-list.css';

const PostList = ({posts}) => {

    const elements = posts.map((item) => {
        const {id, ...itemProps} = item;
        return (
            <li key={id} className='list-group-item'>
                 {/* <PostListItem
                  label={item.label} 
                  important={item.important} />  */}
                  {/* Новый синтаксис: */}
                  <PostListItem {...itemProps} />
            </li>
        )
    })

    return (
        <ul className="app-list list-group">
            {/* Подход неверный (в 0 ячейке переданный может быть и вовсе не объект): */}
            {/* <PostListItem label={posts[0].label} important={posts[0].important} /> */}
            {/* <PostListItem label='That is so good' />
            <PostListItem label='I need a break...' /> */}
            {elements}
        </ul>
    )
}

export default PostList;
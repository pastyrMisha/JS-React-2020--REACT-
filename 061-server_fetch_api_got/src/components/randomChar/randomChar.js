import React, {Component} from 'react';
import './randomChar.css';
import gotService from '../../services/gotService';

export default class RandomChar extends Component {

    gotService = new gotService();
    state = {
        name: null,
        gender: null,
        born: null,
        died: null,
        culture: null
    }

    updateChar() {
        
    }

    render() {

        const {name, gender, born, died, culture} = this.state;

        return (
            <div className="random-block rounded">
                <h4>Random Character: {name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Gender </span>
                        <span>{gender}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Born </span>
                        <span>{born}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Died </span>
                        <span>{died}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Culture </span>
                        <span>{culture}</span>
                    </li>
                </ul>
            </div>
        );
    }
}

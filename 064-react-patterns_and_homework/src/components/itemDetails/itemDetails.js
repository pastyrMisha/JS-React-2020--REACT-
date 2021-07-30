import React, {Component} from 'react';
import './itemDetails.css';
import gotService from '../../services/gotService';

const Field = ({item, field, label}) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </li>
    )
}

export {
    Field
}
export default class ItemDetails extends Component {

    gotService = new gotService();

    state = {
        item: null
    }

    componentDidMount() {
        
        this.updateChar();
        this.updateBook();
        this.updateHouse();
    }

    componentDidUpdate(prevProps) {
        if(this.props.charId !== prevProps.charId && this.props.charId) {
            this.updateChar();
        }
        if(this.props.booksId !== prevProps.booksId && this.props.booksId) {
            this.updateBook();
        }
        if(this.props.houseId !== prevProps.houseId && this.props.houseId) {
            this.updateHouse();
        }
    }

    updateChar() {
        const {charId} = this.props;
        if(!charId) {
            return;
        }

        this.gotService.getCharacter(charId)
            .then((item) => {
                this.setState({item})
            })

    }

    updateBook () {
        const {booksId} = this.props;
        if(!booksId) {
            return;
        }

        this.gotService.getBook(booksId)
            .then((item) => {
                this.setState({item})
            })

    }

    updateHouse () {
        const {houseId} = this.props;
        if(!houseId) {
            return;
        }

        this.gotService.getHouse(houseId)
            .then((item) => {
                this.setState({item})
            })

    }

    render() {

        if(!this.state.item) {
            return <span className='select-error'>Please select a character</span>
        }
        const {item} = this.state;
        const {name} = item;

        return (
            <div className="char-details rounded">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                   {
                       React.Children.map(this.props.children, (child) => {
                            return React.cloneElement(child, {item})
                           
                       })
                   }
                </ul>
            </div>
        );
    }
}

//  React.Children.map – встроенный в реакт метод, похожий на map, но как child может прийти все что угодно (объект, массив, ф-ия и т.д.)
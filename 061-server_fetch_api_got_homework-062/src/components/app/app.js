import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import ErrorMessage from '../errorMessage';
import styled from 'styled-components';


const ToogleButton = styled.button`
    color: #fff;
    background-color: blue;
    padding: 10px 20px;
    margin-bottom: 40px;
    outline: none;
    border: 3px solid transparent;
    border-radius: 0.25rem;
`;

export default class App extends Component {

    state = {
        ShowRandomChar: true,
        error: false
    }

    toogleRandomChar = (state) => {
        this.setState({
                ShowRandomChar: !this.state.ShowRandomChar
        });
    }



    render () {

        if (this.state.error) {
            return <ErrorMessage/>
        }

      const char = this.state.ShowRandomChar ? <RandomChar/> : null;

      

    return (
        <> 
            <Container>
                <Header />
            </Container>
            <Container>
                <Row>
                    <Col lg={{size: 5, offset: 0}}>
                    {char}
                    </Col>
                </Row>
                <Row>
                <Col lg={{size: 5, offset: 0}}>
                <ToogleButton onClick={this.toogleRandomChar}>Toogle random character</ToogleButton>
                </Col>
                </Row>
                <Row>
                    <Col md='6'>
                        <ItemList />
                    </Col>
                    <Col md='6'>
                        <CharDetails />
                    </Col>
                </Row>
            </Container>
        </>
    );
    }
};
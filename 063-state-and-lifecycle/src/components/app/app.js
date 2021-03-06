import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from '../errorMessage';
import CharacterPage from '../characterPage';
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

componentDidCatch() {
    console.log('error');
    this.setState({
        error: true
    })
}

    toogleRandomChar = (state) => {
        this.setState({
                ShowRandomChar: !this.state.ShowRandomChar
        });
    }




    render () {
      const char = this.state.ShowRandomChar ? <RandomChar/> : null;

      if (this.state.error) {
        return <ErrorMessage/>
    }


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
             <CharacterPage/>
             <CharacterPage/>
             <CharacterPage/>
            </Container>
        </>
    );
    }
};
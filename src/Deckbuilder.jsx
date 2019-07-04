import React, { Component } from 'react';
import { CardForm } from './CardBuilder';
import styled from 'styled-components';
class DeckBuilder extends Component {
  render = () => {
    return (
      <>
        <Container>
          <Header>Create a deck</Header>
          <CardForm />
        </Container>
      </>
    );
  };
}

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  height: 50px;
  margin: 20px auto;
  padding: 10px;
  background-color: #3c3c3c;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

const Container = styled.div`
  width: 97%;
  text-align: center;
  margin: auto;
  padding-bottom: 10px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 1px 5px -1px rgba(0, 0, 0, 0.2);
`;

export default DeckBuilder;

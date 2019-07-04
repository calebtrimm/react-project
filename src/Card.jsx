import React, { Component } from 'react';
import './main.css';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

class DeckOfCards extends Component {
  render = () => {
    return (
      <Deck>
        <Header>
          <p>{this.props.title}</p>
        </Header>
        <PlayBtn>
          <PlayLink to={'/deck/' + this.props.id}>Play</PlayLink>
        </PlayBtn>
      </Deck>
    );
  };
}

const Deck = styled.div`
  width: 250px;
  border: 1px solid lightgray;
  border-radius: 5px;
  margin: 20px;
`;

const PlayBtn = styled.div`
  display: flex;
  color: white;
  align-items: center;
  justify-content: center;
  background-color: dodgerblue;
  border-radius: 5px;
  width: 80%;
  padding: 10px;
  margin: 20px auto;
  font-size: 0.9rem;
`;

const PlayLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

const Header = styled.div`
  width: 100%;
  font-size: 1.5rem;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background-color: #3c3c3c;
  color: white;
  text-align: center;
`;

export { DeckOfCards };

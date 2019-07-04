import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import './main.css';
import Navbar from './Nav.jsx';
import DeckBuilder from './Deckbuilder.jsx';
import styled from 'styled-components';
import SearchResults from './SearchResults';
import QuizCard from './QuizCard.jsx';

const Nav = styled(Navbar)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: dodgerblue;
  width: 100%;
  height: 65px;
`;

let renderHome = () => {
  return (
    <div>
      <Nav />
      <Container>
        <SearchResults />
      </Container>
    </div>
  );
};

let renderDeckBuilder = () => {
  return (
    <div>
      <Nav />
      <DeckBuilder />
    </div>
  );
};

let renderPlay = routerData => {
  let gameId = routerData.match.params.id;
  return (
    <div>
      <Nav />
      <div />
      <QuizCard id={gameId} />
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Route exact={true} path="/" render={renderHome} />
      <Route exact={true} path="/deck-builder" render={renderDeckBuilder} />
      <Route exact={true} path="/deck/:id" render={renderPlay} />
    </BrowserRouter>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export default App;

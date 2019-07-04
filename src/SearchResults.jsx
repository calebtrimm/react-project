import { connect } from 'react-redux';
import React, { Component } from 'react';
import { DeckOfCards } from './Card.jsx';

class Query extends Component {
  render = () => {
    let results = this.props.decks.filter(deck => {
      return (
        deck.title.toLowerCase().includes(this.props.query) ||
        deck.title.includes(this.props.query)
      );
    });
    return (
      <>
        {results.map(result => {
          return (
            <div>
              <DeckOfCards title={result.title} id={result.id} />
            </div>
          );
        })}
      </>
    );
  };
}
let mapStateToProps = st => {
  return { query: st.searchQuery, decks: st.decks };
};

const SearchResults = connect(mapStateToProps)(Query);

export default SearchResults;

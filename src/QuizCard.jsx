import { connect } from 'react-redux';
import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

class Quiz extends Component {
  handleNextQuestion = evt => {
    let currentDeck = this.props.decks.filter(deck => {
      return deck.id === Number(this.props.id);
    });
    let currentCard = currentDeck[0].cards[this.props.cardIndex];
    this.props.dispatch({
      type: 'NEXT_QUESTION',
      choice: evt.target.value,
      answer: currentCard.answer
    });
  };
  playAgain = evt => {
    this.props.dispatch({
      type: 'PLAY_AGAIN'
    });
  };
  render = () => {
    let currentDeck = this.props.decks.filter(deck => {
      return deck.id === Number(this.props.id);
    });
    let currentCard = currentDeck[0].cards[this.props.cardIndex];
    if (this.props.cardIndex <= currentDeck[0].cards.length - 1) {
      return (
        <div>
          <Box>
            {currentCard.question}
            <div>
              {currentCard.choices.map(choice => {
                return (
                  <BlueButton onClick={this.handleNextQuestion} value={choice}>
                    {choice}
                  </BlueButton>
                );
              })}
            </div>
          </Box>
        </div>
      );
    } else {
      return (
        <div>
          <Box>
            <Header>Results</Header>
            {currentDeck[0].cards.map(card => {
              let idx = currentDeck[0].cards.indexOf(card);
              let textColor = {
                color: 'default'
              };
              this.props.playerAnswers[idx] === this.props.correctAnswers[idx]
                ? (textColor.color = 'green')
                : (textColor.color = 'red');
              return (
                <div>
                  <h3>{card.question}</h3>
                  <Answer>
                    Correct Answer: {this.props.correctAnswers[idx]}
                  </Answer>
                  <h4 style={textColor}>
                    {' '}
                    Your Answer: {this.props.playerAnswers[idx]}
                  </h4>
                </div>
              );
            })}
            <PlayBtn>
              <PlayLink to="/" onClick={this.playAgain}>
                Play again{' '}
              </PlayLink>
            </PlayBtn>
          </Box>
        </div>
      );
    }
  };
}

const mapStateToProps = st => {
  return {
    decks: st.decks,
    cardIndex: st.cardIndex,
    playerAnswers: st.playerAnswers,
    correctAnswers: st.correctAnswers
  };
};

const PlayBtn = styled.div`
  display: flex;
  color: white;
  align-items: center;
  justify-content: center;
  background-color: dodgerblue;
  border-radius: 5px;
  width: 20%;
  padding: 10px;
  margin: 20px auto;
  font-size: 0.9rem;
`;

const PlayLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

const Answer = styled.h4`
  color: green;
`;
const Header = styled.div`
  padding: 10px 0;
  width: 100%;
  font-size: 1.5rem;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background-color: #3c3c3c;
  color: white;
  text-align: center;
`;

const Box = styled.div`
  & h4 {
    text-align: left;
    margin-left: 10px;
  }
  & h3 {
    margin-left: 10px;
    text-align: left;
  }
  border: 1px solid #b2b2b2;
  border-radius: 5px;
  width: 60%;
  margin: 20px auto;
  text-align: center;
`;

const BlueButton = styled.button`
  background-color: dodgerblue;
  color: white;
  margin: 10px auto;
  width: 80%;
  height: 30px;
  padding: 5px;
  border-radius: 8px;
  border: none;
`;

const QuizCard = connect(mapStateToProps)(Quiz);

export default QuizCard;

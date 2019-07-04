import { connect } from 'react-redux';
import React, { Component } from 'react';
import styled from 'styled-components';

class BlankCardForm extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      title: '',
      question: '',
      choices: ['', ''],
      answer: ''
    };
  }

  handleQuestion = evt => {
    this.setState({ question: evt.target.value });
  };

  handleChoiceString = evt => {
    this.setState({
      choices: choices.concat(evt.target.value)
    });
  };

  handleAddChoice = evt => {
    this.setState({
      choices: this.state.choices.concat('')
    });
  };
  handleRemoveChoice = () => {
    this.setState({
      choices: this.state.choices.slice(0, -1)
    });
  };
  handleAnswer = evt => {
    this.setState({ answer: evt.target.value });
  };
  render = () => {
    return (
      <QuestionBox>
        <h3>Question {this.props.questionIdx}</h3>
        <FancyInput />
        {this.state.choices.map((choice, idx) => {
          return (
            <div>
              <SpreadBox>
                <Title>Choice {idx}</Title>
                <span>
                  <label htmlFor={idx}>Mark as answer</label>
                  <RadioBtn
                    type="radio"
                    name="answer"
                    id={idx}
                    onChange={this.handleAnswer}
                  />
                </span>
              </SpreadBox>
              <FancyInput />
            </div>
          );
        })}
        <AddRemoveBtn
          onClick={this.handleAddChoice}
          value={this.props.questionIdx}
        >
          Add Choice
        </AddRemoveBtn>
        <AddRemoveBtn onClick={this.handleRemoveChoice}>
          Remove Choice
        </AddRemoveBtn>
      </QuestionBox>
    );
  };
}

class DeckCreationForm extends Component {
  handleTitle = evt => {
    this.props.dispatch({
      type: 'ADD_TITLE',
      titleString: evt.target.value
    });
  };
  handleCardForm = () => {
    this.props.dispatch({
      type: 'ADD_CARD',
      card: { question: '', choices: ['', ''], answer: '' }
    });
  };
  handleSubmitCard = () => {
    this.props.dispatch({
      type: 'SUBMIT_CARD',
      titleString: this.props.titleString,
      question: this.props.question,
      choices: []
    });
  };
  render = () => {
    let deck = this.props.currentDeck;
    return (
      <CreateDeckContainer>
        <span>
          <h4>Title</h4>
          <FancyInput type="text" onChange={this.handleTitle} />
        </span>
        {deck.map((card, idx) => {
          return (
            <Box>
              <CardGenForm
                questionIdx={idx}
                className={this.props.className}
                question={card.question}
                choices={card.choices}
                answer={card.answer}
              />
            </Box>
          );
        })}

        <div>
          <AddCardBtn onClick={this.handleCardForm}>Add Card</AddCardBtn>
        </div>
        <div>
          <Submit type="submit" onClick={this.handleSubmitCard}>
            Submit
          </Submit>
        </div>
      </CreateDeckContainer>
    );
  };
}

const mapStateToProps = st => {
  return {
    currentDeck: st.newCards
  };
};

const CardForm = connect(mapStateToProps)(DeckCreationForm);
const QuestionForm = connect(mapStateToProps)(BlankCardForm);

const SpreadBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CreateDeckContainer = styled.div`
  margin: 20px auto;
  border: none;
  width: 60%;
`;

const RadioBtn = styled.input`
  position: relative;
  right: 0;
`;

const Box = styled.div`
  border: 1px solid #b2b2b2;
  border-radius: 5px;
  width: 80%;
  margin: 20px auto;
`;

const CardGenForm = styled(QuestionForm)`
  margin: 20px auto;
  border: none;
`;

const QuestionBox = styled.div`
  text-align: left;
  width: 90%;
  margin: auto;
`;

const FancyInput = styled.input`
  background-color: white;
  margin: 10px auto;
  width: 100%;
  height: 25px;
  border-radius: 5px;
  border: 1px solid #b2b2b2;
`;

const AddCardBtn = styled.button`
  background-color: white;
  margin: 10px auto;
  width: 80%;
  height: 30px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #b2b2b2;
`;

const AddRemoveBtn = styled.button`
  display: block;
  background-color: white;
  margin: 10px auto;
  width: 30%;
  height: 30px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #b2b2b2;
`;

const Submit = styled.button`
  background-color: dodgerblue;
  color: white;
  margin: 10px auto;
  width: 80%;
  height: 30px;
  padding: 5px;
  border-radius: 5px;
  border: none;
`;

const Title = styled.h4`
  display: inline-block;
  margin: 0;
`;

export { CardForm, QuestionForm };

import { createStore } from 'redux';
import { initialDecks } from './data';
const initialState = {
  searchQuery: '',
  decks: initialDecks,
  currentDeck: initialDecks,
  cardIndex: 0,
  createdQuestionsDeck: {
    id: 2,
    title: '',
    cards: []
  },
  newCards: [],
  playerAnswers: [],
  correctAnswers: []
};

let reducer = (state, action) => {
  if (action.type === 'PLAY_AGAIN') {
    return {
      ...state,
      playerAnswers: (state.playerAnswers = []),
      correctAnswers: (state.correctAnswers = []),
      cardIndex: (state.cardIndex = 0)
    };
  }
  if (action.type === 'ADD_CARD') {
    return {
      ...state,
      newCards: state.newCards.concat(action.card)
    };
  }
  if (action.type === 'ADD_TITLE') {
    return {
      ...state,
      createdQuestionsDeck: {
        ...state.createdQuestionsDeck,
        title: action.titleString
      }
    };
  }
  if (action.type === 'ADD_CHOICE_FIELD') {
    return {
      ...state,
      newCards: {
        ...state.newCards,
        choices: [...state.newCards[action.idx].choices.concat('')]
      }
    };
  }
  if (action.type === 'REFINE_SEARCH') {
    return { ...state, searchQuery: action.search };
  }
  if (action.type === 'NEXT_QUESTION') {
    return {
      ...state,
      cardIndex: (state.cardIndex = state.cardIndex + 1),
      playerAnswers: state.playerAnswers.concat(action.choice),
      correctAnswers: state.correctAnswers.concat(action.answer)
    };
  }
  if (action.type === 'SUBMIT_CARD') {
    return {
      ...state,
      decks: [...state.decks.concat(state.createdQuestionsDeck)]
    };
  }
  return state;
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

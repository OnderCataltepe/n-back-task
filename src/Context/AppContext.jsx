import { createContext, useReducer } from 'react';

export const AppContext = createContext();
const initialState = {
  container: true,
  welcome: true,
  info: false,
  trial: false,
  ready: false,
  real: false,
  result: false
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'start':
      return { ...state, welcome: false, info: true };
    case 'continue':
      return { ...state, container: false, info: false, trial: true };
    case 'ready':
      return { ...state, container: true, trial: false, ready: true };
    case 'real':
      return { ...state, container: false, ready: false, real: true };
    case 'result':
      return { ...state, container: true, real: false, result: true };
    case 'reset':
      return initialState;
  }
};

const resultState = {
  correctNumber: 0,
  wrongNumber: 0,
  totalNumber: 7,
  correctTimes: [],
  wrongTimes: []
};
const resultReducer = (state, action) => {
  switch (action.type) {
    case 'correct':
      return {
        ...state,
        correctNumber: state.correctNumber + 1,
        correctTimes: [...state.correctTimes, action.value]
      };
    case 'wrong':
      return {
        ...state,
        wrongNumber: state.wrongNumber + 1,
        wrongTimes: [...state.wrongTimes, action.value]
      };
    case 'reset':
      return resultState;
  }
};

export const AppContextProvider = ({ children }) => {
  const [pageState, dispatch] = useReducer(reducer, initialState);
  const [results, resultDispatch] = useReducer(resultReducer, resultState);
  const pageValues = { pageState, dispatch };
  const resultValues = { results, resultDispatch };

  return <AppContext.Provider value={{ pageValues, resultValues }}>{children}</AppContext.Provider>;
};

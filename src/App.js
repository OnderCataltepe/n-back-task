import './App.css';
import { useReducer } from 'react';
import Container from './Components/Container/Container';
import Info from './Components/Info/Info';
import WelcomePage from './Components/WelcomePage/WelcomePage';
import Trial from './Components/Trial/Trial';
import Confirm from './Components/Confirm/Confirm';
import Results from './Components/Result/Results';

const exampleSet = ['A', 'C', 'A', 'A', 'D', 'G', 'E', 'G', 'F', 'H'];
const realSet = [
  'K',
  'J',
  'A',
  'J',
  'A',
  'L',
  'D',
  'L',
  'B',
  'L',
  'F',
  'M',
  'F',
  'A',
  'N',
  'A',
  'D',
  'N',
  'D',
  'G'
];

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
function App() {
  const [pageState, dispatch] = useReducer(reducer, initialState);
  const [results, resultDispatch] = useReducer(resultReducer, resultState);
  const pageValues = { pageState, dispatch };
  const resultValues = { results, resultDispatch };
  return (
    <div className="App">
      <Container pageState={pageState}>
        <WelcomePage pageValues={pageValues} />
        <Info pageValues={pageValues} />
        <Confirm pageValues={pageValues} />
        {pageState.result && <Results resultValues={resultValues} pageValues={pageValues} />}
      </Container>
      {pageState.trial && (
        <Trial pageValues={pageValues} set={exampleSet} resultValues={resultValues} />
      )}
      {pageState.real && (
        <Trial resultValues={resultValues} pageValues={pageValues} set={realSet} />
      )}
    </div>
  );
}

export default App;

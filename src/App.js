import './App.css';
import { useReducer } from 'react';
import Container from './Components/Container';
import Info from './Components/Info';
import WelcomePage from './Components/WelcomePage';
import Warning from './Components/Warning';

const initialState = {
  container: true,
  welcome: true,
  info: false,
  warning: false,
  trial: false
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'start':
      return { container: true, welcome: false, info: true, warning: false, trial: false };
    case 'continue':
      return { container: true, welcome: false, info: false, warning: true, trial: false };
    case 'trial':
      return { container: false, welcome: false, info: false, warning: false, trial: true };
  }
};
function App() {
  const [pageState, dispatch] = useReducer(reducer, initialState);
  const values = { pageState, dispatch };
  return (
    <div className="App">
      <Container>
        <WelcomePage values={values} />
        <Info values={values} />
        <Warning values={values} />
      </Container>
    </div>
  );
}

export default App;

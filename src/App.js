import './App.css';
import { useReducer } from 'react';
import Container from './Components/Container';
import Info from './Components/Info';
import WelcomePage from './Components/WelcomePage';

const initialState = {
  container: true,
  welcome: true,
  info: false,
  trial: false
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'start':
      return { container: true, welcome: false, info: true, trial: false };
    case 'continue':
      return { container: false, welcome: false, info: false, trial: false };
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
      </Container>
    </div>
  );
}

export default App;

import './App.scss';
import { useContext } from 'react';
import { AppContext } from './Context/AppContext';
import { Container, Info, WelcomePage, Trial, Confirm, Results } from 'Components';
import { EXAMPLE_SET, REAL_SET } from './Constants';

function App() {
  const { pageValues } = useContext(AppContext);
  const { pageState } = pageValues;

  return (
    <div className="App">
      {pageState.container && (
        <Container>
          {pageState.welcome && <WelcomePage />}
          {pageState.info && <Info />}
          {pageState.ready && <Confirm />}
          {pageState.result && <Results />}
        </Container>
      )}
      {pageState.trial && <Trial set={EXAMPLE_SET} />}
      {pageState.real && <Trial set={REAL_SET} />}
    </div>
  );
}

export default App;

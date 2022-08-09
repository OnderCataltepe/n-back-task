import { useEffect } from 'react';
import styles from './WelcomePage.module.css';
const WelcomePage = ({ values }) => {
  const { pageState, dispatch } = values;

  useEffect(() => {
    console.log(pageState.welcome);
  }, []);
  const startHandler = () => {
    dispatch({ type: 'start' });
  };
  return (
    pageState.welcome && (
      <div className={styles.welcomeDiv}>
        <h1>2-BACK TASK</h1>
        <div>
          <button onClick={startHandler}>Start</button>
        </div>
      </div>
    )
  );
};

export default WelcomePage;

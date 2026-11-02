import styles from './WelcomePage.module.scss';
import Button from '../Button/Button';
import { useContext } from 'react';
import { AppContext } from '../../Context/AppContext';

const WelcomePage = () => {
  const { pageValues } = useContext(AppContext);
  const { dispatch } = pageValues;

  return (
    <div className={styles.welcomeDiv}>
      <h1>2-BACK TASK</h1>
      <div>
        <Button onClick={() => dispatch({ type: 'start' })} text="Start" />
      </div>
    </div>
  );
};

export default WelcomePage;

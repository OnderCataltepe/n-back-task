import styles from './WelcomePage.module.css';
import Button1 from './Button1';
const WelcomePage = ({ pageValues }) => {
  const { pageState, dispatch } = pageValues;

  return (
    pageState.welcome && (
      <div className={styles.welcomeDiv}>
        <h1>2-BACK TASK</h1>
        <div>
          <Button1 onClick={() => dispatch({ type: 'start' })} value="Start" />
        </div>
      </div>
    )
  );
};

export default WelcomePage;

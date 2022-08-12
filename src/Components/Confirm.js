import styles from './Confirm.module.css';
import Button1 from './Button1';
const Confirm = ({ pageValues }) => {
  const { pageState, dispatch } = pageValues;

  const getRealTest = () => {
    dispatch({ type: 'real' });
  };

  if (!pageState.ready) {
    return null;
  }
  return (
    <div className={styles.container}>
      <p>
        You have finished the trial test. The real test includes 20 letters. Click the button when
        you are ready.
      </p>

      <Button1 onClick={getRealTest} value="Start the Real Test" />
    </div>
  );
};

export default Confirm;

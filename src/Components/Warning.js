import styles from './Warning.module.css';
const Warning = ({ values }) => {
  const { pageState, dispatch } = values;
  return (
    pageState.warning && (
      <div className={styles.warningDiv}>
        <h3>Are you Ready?</h3>
        <div className={styles.startDiv}>
          <button
            onClick={() => {
              dispatch({ type: 'trial' });
            }}>
            Start
          </button>
        </div>
        <button className={styles.backButton} onClick={() => dispatch({ type: 'start' })}>
          &laquo; Back
        </button>
      </div>
    )
  );
};

export default Warning;

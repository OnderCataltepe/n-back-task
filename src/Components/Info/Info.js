import styles from './Info.module.css';
const Info = ({ pageValues }) => {
  const { pageState, dispatch } = pageValues;

  return (
    pageState.info && (
      <div className={styles.infoDiv}>
        <p>
          You will see a sequence of letters on the screen. Each letter will be displayed for a few
          seconds. You need to decide if the letter you see is the same as the letter you saw two
          letters ago. If the letter you see on the screen is the same as the two letters before,
          click it with the mouse. If you answered correctly, the color of the frame around the
          letter will be green. If you answered incorrectly, it will be red.
        </p>
        <br /> <br />
        <p>
          We will do a practice test first. The duration of the trial test is shorter than the
          normal test period. After the trial test, you can move on to the real test.
        </p>
        <div className={styles.buttonDiv}>
          <button onClick={() => dispatch({ type: 'continue' })}>
            <span>Start the trial test</span>
          </button>
        </div>
      </div>
    )
  );
};

export default Info;

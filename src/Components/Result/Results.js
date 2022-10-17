import styles from './Results.module.css';
import Button1 from '../Button/Button1';
import { useState } from 'react';
const Results = ({ resultValues, pageValues }) => {
  const { results, resultDispatch } = resultValues;
  const { dispatch } = pageValues;

  const [isShow, setIsShow] = useState(false);

  const resetHandler = () => {
    dispatch({ type: 'reset' });
    resultDispatch({ type: 'reset' });
  };
  const showResultHandler = () => {
    setIsShow(true);
  };

  if (!isShow) {
    return <Button1 onClick={showResultHandler} value="Show The Result" />;
  }
  return (
    <div className={styles.resultDiv}>
      <h3>Result</h3>
      <table>
        <thead>
          <tr>
            <th className={styles.greenn}>The number of correct matches</th>
            <th className={styles.greenn}>Correct Reaction Times(ms)</th>
            <th className={styles.redd}>The number of wrong matches</th>
            <th className={styles.redd}>Wrong Reaction Times(ms)</th>
            <th className={styles.greyy}>Number of missed letters</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{results.correctNumber}</td>
            <td>
              {results.correctTimes.map((item, index) => {
                return <p key={index}>{item}</p>;
              })}
            </td>
            <td>{results.wrongNumber}</td>
            <td>
              {results.wrongTimes.map((item, index) => {
                return <p key={index}>{item}</p>;
              })}
            </td>
            <td>{results.totalNumber - results.correctNumber}</td>
          </tr>
        </tbody>
      </table>
      <button className={styles.returnButton} onClick={resetHandler}>
        &laquo; Return to first page
      </button>
    </div>
  );
};

export default Results;

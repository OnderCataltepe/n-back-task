import styles from './Results.module.scss';
import Button from '../Button/Button';
import { useState } from 'react';
import { useContext } from 'react';
import { AppContext } from '../../Context/AppContext';

const Results = () => {
  const { pageValues, resultValues } = useContext(AppContext);
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
    return <Button onClick={showResultHandler} text="Show The Result" />;
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

      <Button onClick={resetHandler} text="Return first page" />
    </div>
  );
};

export default Results;

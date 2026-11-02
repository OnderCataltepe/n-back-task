import { useEffect, useState, useRef } from 'react';
import styles from './Trial.module.scss';
import { useContext } from 'react';
import { AppContext } from '../../Context/AppContext';

const Trial = ({ set }) => {
  const { pageValues, resultValues } = useContext(AppContext);
  const { pageState, dispatch } = pageValues;
  const { resultDispatch } = resultValues;
  const letterSet = set;
  const [value, setValue] = useState('');
  const [valueIndex, setValueIndex] = useState(0);
  const [invisible, setInvisible] = useState(true);
  const [borderColor, setBorderColor] = useState('grey');
  const [initialTime, setInıtıalTime] = useState(null);
  const [isClicked, setIsClicked] = useState(false);
  const visibleRef = useRef();
  const nextRef = useRef();

  const resetData = () => {
    const time = new Date();
    setIsClicked(false);
    setInıtıalTime(time);
    setBorderColor('grey');
    setInvisible(true);
    setValue(letterSet[valueIndex]);
  };

  useEffect(() => {
    if (valueIndex !== letterSet.length) {
      resetData();
      visibleRef.current = setTimeout(() => {
        setInvisible(false);
      }, 500);
      nextRef.current = setTimeout(() => {
        setValueIndex((prev) => prev + 1);
      }, 3000);
    } else if (valueIndex === letterSet.length && pageState.trial) {
      dispatch({ type: 'ready' });
    } else if (valueIndex === letterSet.length && pageState.real) {
      dispatch({ type: 'result' });
    }
    return () => {
      clearTimeout(visibleRef.current);
      clearTimeout(nextRef.current);
    };
  }, [valueIndex]);

  const clickHandler = () => {
    if (!isClicked && pageState.trial) {
      if (value === letterSet[valueIndex - 2]) {
        setBorderColor('green');
      } else {
        setBorderColor('red');
      }
      setIsClicked(true);
    }
    if (!isClicked && pageState.real) {
      const clickedTime = new Date();

      if (value === letterSet[valueIndex - 2]) {
        setBorderColor('green');
        resultDispatch({ type: 'correct', value: clickedTime - initialTime });
      } else {
        setBorderColor('red');
        resultDispatch({ type: 'wrong', value: clickedTime - initialTime });
      }
      setIsClicked(true);
    }
  };
  return (
    <div
      data-testid="custom-element"
      className={`${styles.trialContainer} ${styles[borderColor]}`}
      onClick={clickHandler}>
      <p data-testid="custom-paragraph" className={invisible ? null : styles.invisible}>
        {value}
      </p>
    </div>
  );
};

export default Trial;

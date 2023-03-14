import styles from './Info.module.scss';
import Button from '../Button/Button';
import { useContext } from 'react';
import { AppContext } from '../../Context/AppContext';
import { INFO_TEXT_ARR } from '../../Constants';

const Info = () => {
  const { pageValues } = useContext(AppContext);
  const { dispatch } = pageValues;

  return (
    <div className={styles.infoDiv}>
      {INFO_TEXT_ARR.map((txt, index) => (
        <p key={index}>
          {txt} <br /> <br />
        </p>
      ))}

      <div className={styles.buttonDiv}>
        <Button onClick={() => dispatch({ type: 'continue' })} text="Start Trial Test" />
      </div>
    </div>
  );
};

export default Info;

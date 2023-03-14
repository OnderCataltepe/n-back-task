import styles from './Confirm.module.scss';
import Button from '../Button/Button';
import { useContext } from 'react';
import { AppContext } from '../../Context/AppContext';
import { CONFIRM_TXT } from '../../Constants';

const Confirm = () => {
  const { pageValues } = useContext(AppContext);
  const { dispatch } = pageValues;

  return (
    <div className={styles.container}>
      <p>{CONFIRM_TXT}</p>

      <Button onClick={() => dispatch({ type: 'real' })} text="Start the Real Test" />
    </div>
  );
};

export default Confirm;

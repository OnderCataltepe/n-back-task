import styles from './Button1.module.css';
const Button1 = ({ value, onClick }) => {
  return (
    <button onClick={onClick} className={styles.buttonn}>
      {value}
    </button>
  );
};

export default Button1;

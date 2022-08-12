import styles from './Container.module.css';
const Container = (props) => {
  return props.pageState.container && <div className={styles.container}>{props.children}</div>;
};

export default Container;

import styles from './ButtonAnimationGray.module.css';

const ButtonAnimationGray = props => {
  return (
    <a href={props.href} className={styles.a}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <div className={styles.btn}>{props.title}</div>
    </a>
  );
};

export default ButtonAnimationGray;

import styles from './SliderDots.module.css';
import classNames from 'classnames';

const SliderDots = () => {
  return (
    <div className={styles.wrapper}>
      <div className={classNames(styles.slider_dot, styles.active_dot)}></div>
      <div className={styles.slider_dot}></div>
      <div className={styles.slider_dot}></div>
      <div className={styles.slider_dot}></div>
    </div>
  );
};

export default SliderDots;

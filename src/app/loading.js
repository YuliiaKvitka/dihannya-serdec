import styles from './Loading.module.css';

const Loading = () => {
  return (
    <div className={styles.loading_wrapper}>
      <div class={styles.loading}>
        <div class={styles.dot}></div>
        <div class={styles.dot}></div>
        <div class={styles.dot}></div>
      </div>
    </div>
  );
};

export default Loading;

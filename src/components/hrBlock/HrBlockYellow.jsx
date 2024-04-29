import styles from './HrBlock.module.css';

const HrBlockYellow = () => {
  return (
    <div className={styles.hr_block_yellow}>
      <hr className={styles.hr_white} />
    </div>
  );
};

export default HrBlockYellow;

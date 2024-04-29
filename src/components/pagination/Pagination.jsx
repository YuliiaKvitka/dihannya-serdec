import Image from 'next/image';
import Arrow from './arrow.png';
import styles from './Pagination.module.css';

const Pagination = () => {
  return (
    <div className={styles.block_arrow}>
      <div className={styles.arrow_btn}>
        <button className={styles.btn} title='scroll left'>
          <Image src={Arrow} alt='' />
        </button>
      </div>
      <div className='  flex gap-2'>
        <div className={styles.slider_dot & styles.active_dot}></div>
        <div className={styles.slider_dot}>
          <span>1</span>
        </div>
        <div className={styles.slider_dot}>
          <span>2</span>
        </div>
        <div className={styles.slider_dot}>
          <span>3</span>
        </div>
        <div className={styles.slider_dot}>
          <span>4</span>
        </div>
        <div className={styles.slider_dot}>
          <span>5</span>
        </div>
        <div className={styles.slider_dot}>
          <span>6</span>
        </div>
      </div>
      <div className={styles.arrow_btn}>
        <button className={styles.btn} title='scroll right'>
          <Image className={styles.arrowReverse} src={Arrow} alt='' />
        </button>
      </div>
    </div>
  );
};

export default Pagination;

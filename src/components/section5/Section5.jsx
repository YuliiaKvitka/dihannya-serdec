import ButtonAnimation from '../buttonAnimation/ButtonAnimation';

import HrBlockBlue from '../hrBlock/HrBlockBlue';
import RunningLine from '../runningLine/RunningLine';
import SliderDots from '../sliderDots/SliderDots';
import styles from './Section5.module.css';
import './style.css';

const Section5 = () => {
  return (
    <section id='partners' className={styles.section}>
      <h2 className='heading2'>Наші партнери</h2>
      <div className='mt-5 mb-10'>
        <HrBlockBlue />
      </div>
      <div className={styles.slider}>
        <div className={styles.wrapper}>
          <RunningLine />
          <SliderDots />
        </div>
      </div>

      <div className={styles.btn}>
        <ButtonAnimation href='/projects' title='стати партнером' />
      </div>
    </section>
  );
};

export default Section5;

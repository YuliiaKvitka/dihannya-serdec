import styles from './Section4.module.css';
import SliderProjects from '../slider/SliderProjects';
import ButtonAnimationGray from '../buttonAnimation/ButtonAnimationGray';
import Image from 'next/image';
import Heart from './../../../public/assets/heart/h1.svg';
import Heart1 from './../../../public/assets/heart/h2.svg';
import HrBlockBlue from '../hrBlock/HrBlockBlue';

const Section4 = () => {
  return (
    <section className={styles.section}>
      <h2 className='heading2'>Наші проекти</h2>
      <div className='mt-5 mb-10'>
        <HrBlockBlue />
      </div>
      <div className={styles.slider}>
        <SliderProjects />

        <div className={styles.btn}>
          <ButtonAnimationGray href='/projects' key='15' title='усі проєкти' />
        </div>
      </div>
      <Image className={styles.heart} src={Heart} alt='' />
      <Image className={styles.heart1} src={Heart1} alt='' />
      <Image className={styles.heart2} src={Heart1} alt='' />
    </section>
  );
};

export default Section4;

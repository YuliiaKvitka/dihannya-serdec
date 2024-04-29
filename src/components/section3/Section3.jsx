import Image from 'next/image';

import styles from './Section3.module.css';
import BgWhite from './../../../public/assets/hero/rec-white.png';
import Bird3 from './../../../public/assets/bird/bird3.png';
import HrBlockYellow from '../hrBlock/HrBlockYellow';
import ButtonAnimation from '../buttonAnimation/ButtonAnimation';

const Section3 = () => {
  return (
    <section className={styles.wrapper}>
      <Image className={styles.bgWhiteReverse} src={BgWhite} alt='' />
      <Image className={styles.bgWhite} src={BgWhite} alt='' />
      <Image className={styles.bird3} src={Bird3} alt='' />
      <h2 className='heading2__white'>Наша діяльність у цифрах</h2>
      <div className='mt-5 mb-10'>
        {' '}
        <HrBlockYellow />
      </div>
      <div className={styles.wrapper_p}>
        <p className='p__text__white'>
          За весь час діяльності фонду, до нас доєдналися багато людей та
          організацій, завдяки яким ми змогли реалізувати багато благодійних
          проєктів.
        </p>
      </div>
      <div className={styles.table}>
        <div className={styles.item}>
          <span className='span_accent'>750000+</span>
          <p className='pp__text__white'>Осіб отримало допомогу</p>
        </div>
        <div className={styles.item}>
          <span className='span_accent'>10000+</span>
          <p className='pp__text__white'>Людей евакуйовано з гарячих точок</p>
        </div>
        <div className={styles.item}>
          <span className='span_accent'>8500+</span>
          <p className='pp__text__white'>Продуктів харчування</p>
        </div>
        <div className={styles.item}>
          <span className='span_accent'>320+</span>
          <p className='pp__text__white'>Благодійних проектів реалізовано</p>
        </div>
      </div>
      <div className={styles.button}>
        <ButtonAnimation yellow key={'1'} title='Допомогти' href='/#contacts' />
      </div>
    </section>
  );
};

export default Section3;

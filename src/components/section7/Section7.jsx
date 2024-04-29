import React from 'react';
import styles from './Section7.module.css';
import Image from 'next/image';
import Contact11 from './../../../public/assets/ua/photo-2@1x.jpeg';
import Contact12 from './../../../public/assets/ua/photo-2@2x.jpeg';
import Contact21 from './../../../public/assets/ua/photo-3@1x.jpeg';
import Contact22 from './../../../public/assets/ua/photo-3@2x.jpeg';
import Phone from '../phone/Phone';
import Heart2 from './../../../public/assets/heart/heart2.png';
import HrBlockBlue from '../hrBlock/HrBlockBlue';

const Section7 = () => {
  return (
    <section id='contacts' className={styles.section}>
      <h2 className='heading2'>Наші контакти</h2>
      <div className='mt-5 mb-10'>
        <HrBlockBlue />
      </div>
      <div className={styles.contacts}>
        <div className={styles.img}>
          <Image
            src={Contact11}
            srcSet={Contact12}
            alt=''
            width={191}
            height={306}
          />
          <h4 className={styles.job}>Голова фонду</h4>
          <h5 className={styles.name}>Мажара Анна Миколаївна</h5>
          <h5 className={styles.name}>
            <Phone key='3' tel='+380637916415' />
          </h5>
        </div>
        <div className={styles.img}>
          <Image
            src={Contact21}
            srcSet={Contact22}
            alt=''
            width={191}
            height={306}
          />
          <h4 className={styles.job}>Директор фонду</h4>
          <h5 className={styles.name}>Лаушкін Олександр Сергійович</h5>
          <h5 className={styles.name}>
            <Phone key='4' tel='+380734701101' />
          </h5>
        </div>
      </div>

      <Image
        className={styles.heart2}
        src={Heart2}
        alt=''
        width={122}
        height={130}
      />
    </section>
  );
};

export default Section7;

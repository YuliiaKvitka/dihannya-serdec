import React from 'react';

import styles from './HeroSection.module.css';
import Image from 'next/image';
import LogoBig from '/public/assets/logo/logoBig.svg';

import Bird1 from '/public/assets/bird/bird1.png';
import Bird2 from '/public/assets/bird/bird2.png';
import SocialIconsYellow from '../socialIconsYellow/SocialIconsYellow';

import ButtonAnimation from '../buttonAnimation/ButtonAnimation';

const HeroSection = () => {
  return (
    <section className={styles.wrapper}>
      <Image
        className={styles.bird1}
        src={Bird1}
        alt=''
        width={127}
        height={147}
      />
      <Image
        className={styles.bird2}
        src={Bird2}
        alt=''
        width={177}
        height={131}
      />
      <SocialIconsYellow />
      {/* ---------------- */}
      <div className={styles.heroContent}>
        <div>
          <Image src={LogoBig} alt='' />
        </div>
        <div className='flex flex-col'>
          <div className={styles.content}>
            <h3 className={styles.heading2}>
              благодійна організація “Благодійний Фонд”
            </h3>
            <h1 className={styles.heading1}>
              Дихання <span className={styles.accent}>Сердець</span>
            </h1>
            <p className={styles.text}>
              Благодійна організація «Благодійний фонд «Дихання сердець» є
              українською неурядовою організацією, що почала свою діяльність у
              2016 році. Основною метою фонду визначено благодійну
              діяльність/майнову допомогу для досягнення цілей визначених
              Статутом організації.
            </p>
          </div>

          <div className={styles.buttons}>
            <ButtonAnimation href='/#contacts' yellow title='Допомогти' />
            <ButtonAnimation href='/projects' title='стати партнером' />
          </div>
        </div>
      </div>
      {/* ---------------------------- */}
    </section>
  );
};

export default HeroSection;

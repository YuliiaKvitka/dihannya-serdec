import React from 'react';
import styles from './Footer.module.css';
import Logo from '../logo/Logo';
import SocialIconsBlue from '../socialIconsBlue/SocialIconsBlue';
import MenuList from '../menuList/MenuList';
import Phone from '../phone/Phone';
import Email from '../email/Email';
import ButtonCall from '../buttonCall/ButtonCall';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.logoIcons}>
          <Link href='/'>
            {' '}
            <Logo />
          </Link>
          <SocialIconsBlue />
        </div>
        <div className={styles.menu}>
          <MenuList />
        </div>
        <div className={styles.contact}>
          <Phone key='2' tel='+380990431423' />
          <Email />
          <div className={styles.btn}>
            <ButtonCall />
          </div>
        </div>
      </div>
      <div className={styles.rec}></div>
    </div>
  );
};

export default Footer;

/* <Image
  className={styles.bgWhite}
  src={BgWhite}
  alt=''
  width={1920}
  height={310}
/>; 
}*/

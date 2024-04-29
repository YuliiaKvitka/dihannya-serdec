import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Fb from '/public/assets/social/facebook.svg';
import Ig from '/public/assets/social/instagram.svg';
import Tg from '/public/assets/social/telegram.svg';
import styles from './SocialIconsBlue.module.css';

const SocialIconsBlue = () => {
  return (
    <div className={styles.social}>
      <Link className={styles.link} href='#'>
        <Image src={Fb} alt='' width={34} height={34} />
      </Link>
      <Link className={styles.link} href='#'>
        <Image src={Ig} alt='' width={34} height={34} />
      </Link>
      <Link className={styles.link} href='#'>
        <Image src={Tg} alt='' width={34} height={34} />
      </Link>
    </div>
  );
};

export default SocialIconsBlue;

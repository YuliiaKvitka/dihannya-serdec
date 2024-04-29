import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Fb from '/public/assets/social/facebook.png';
import Ig from '/public/assets/social/instagram.png';
import Tg from '/public/assets/social/telegram.png';
import styles from './SocialIconsYellow.module.css';

const SocialIconsYellow = () => {
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

export default SocialIconsYellow;

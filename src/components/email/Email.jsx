import Image from 'next/image';
import React from 'react';
import EmailImg from './../../../public/assets/email/email.png';
import Link from 'next/link';
import styles from './Email.module.css';

const Email = () => {
  return (
    <div className={styles.email}>
      {/* <Image src={EmailImg} alt='' width={24} height={24} /> */}
      <Link
        className={styles.emailLink}
        href='mailto:breathingofhearts@gmail.com'
      >
        breathingofhearts@gmail.com
      </Link>
    </div>
  );
};

export default Email;

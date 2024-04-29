import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ButtonCall from '../buttonCall/ButtonCall';
import styles from './Phone.module.css';
import Call from './../../../public/assets/call/call.png';

const Phone = props => {
  return (
    <div className={styles.phone}>
      {/* <Image src={Call} alt='' width={24} height={24} /> */}
      <Link className={styles.callLink} href={`props.tel`}>
        {props.tel}
      </Link>
    </div>
  );
};

export default Phone;

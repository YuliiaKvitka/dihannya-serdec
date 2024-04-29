import Image from 'next/image';
import styles from './Logo.module.css';
import LogoImg from './../../../public/assets/logo/logo.svg';
import Group1 from './../../../public/assets/logo/group1.png';
import Group2 from './../../../public/assets/logo/group2.png';

const Logo = () => {
  return (
    <div className={styles.logo}>
      <Image src={LogoImg} alt='' />

      <div className={styles.logoGroup}>
        <Image src={Group1} alt='' width={133.07} height={11.16} />
        <Image src={Group2} alt='' width={154} height={13.49} />
      </div>
    </div>
  );
};

export default Logo;

import styles from './Header.module.css';

import Image from 'next/image';
import Link from 'next/link';
import ButtonCall from '../buttonCall/ButtonCall';
import Logo from '../logo/Logo';
import MenuList from '../menuList/MenuList';
import Phone from '../phone/Phone';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.wrapper}>
        <Link href='/'>
          <Logo />
        </Link>
        <MenuList />
        <div className={styles.call}>
          <Phone key='1' tel='+380990431423' />
          <ButtonCall />
        </div>
      </div>
    </div>
  );
};

export default Header;

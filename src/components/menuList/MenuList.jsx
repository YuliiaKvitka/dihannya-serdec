import Link from 'next/link';
import React from 'react';
import styles from './MenuList.module.css';

const MenuList = () => {
  return (
    <div className={styles.menuList}>
      <Link className={styles.itemMenu} href='/#about'>
        Хто ми
      </Link>
      <Link className={styles.itemMenu} href='/projects'>
        Проєкти
      </Link>
      <Link className={styles.itemMenu} href='/#partners'>
        Партнери
      </Link>
      <Link className={styles.itemMenu} href='/#contacts'>
        Контакти
      </Link>
      <Link className={styles.itemMenu} href='/gallery'>
        Галерея
      </Link>
    </div>
  );
};

export default MenuList;

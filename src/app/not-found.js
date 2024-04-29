import React from 'react';
import styles from './NotFound.module.css';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';

const NotFound = () => {
  return (
    <>
      <Header />
      <div class={styles.room}>
        <div class={styles.cuboid}>
          <div class={styles.side}></div>
          <div class={styles.side}></div>
          <div class={styles.side}></div>
        </div>
        <div class={styles.oops}>
          <h2>OOPS!</h2>
          <p>We can&prime;t find the page that you&prime;re looking for :(</p>
        </div>
        <div class={styles.centerLine}>
          <div class={styles.hole}>
            <div class={styles.ladderShadow}></div>
            <div class={styles.ladder}></div>
          </div>
          <div class={styles.four}>4</div>
          <div class={styles.four}>4</div>
          <div class={styles.btn}>
            <a href='/'>BACK TO HOME</a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;

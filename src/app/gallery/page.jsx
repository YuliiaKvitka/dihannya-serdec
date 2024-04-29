import HrBlockBlue from '@/components/hrBlock/HrBlockBlue';
import styles from './Gallery.module.css';
import Image from 'next/image';
import Img11 from './../../../public/assets/galleryPage/1@1x.jpeg';
import Img12 from './../../../public/assets/galleryPage/1@2x.jpeg';
import Pagination from '@/components/pagination/Pagination';

const Gallery = () => {
  return (
    <div className={styles.section}>
      <h2 className={styles.title}>Галерея</h2>
      <div className='mt-5 mb-10'>
        <HrBlockBlue />
      </div>

      <div className={styles.wrapper}>
        <Pagination />
        <div className={styles.photoBlock}>
          <Image className={styles.img} src={Img11} srcSet={Img12} alt='' />
          <Image className={styles.img} src={Img11} srcSet={Img12} alt='' />
          <Image className={styles.img} src={Img11} srcSet={Img12} alt='' />
          <Image className={styles.img} src={Img11} srcSet={Img12} alt='' />
          <Image className={styles.img} src={Img11} srcSet={Img12} alt='' />
          <Image className={styles.img} src={Img11} srcSet={Img12} alt='' />
          <Image className={styles.img} src={Img11} srcSet={Img12} alt='' />
          <Image className={styles.img} src={Img11} srcSet={Img12} alt='' />
          <Image className={styles.img} src={Img11} srcSet={Img12} alt='' />
          <Image className={styles.img} src={Img11} srcSet={Img12} alt='' />
          <Image className={styles.img} src={Img11} srcSet={Img12} alt='' />
          <Image className={styles.img} src={Img11} srcSet={Img12} alt='' />
          <Image className={styles.img} src={Img11} srcSet={Img12} alt='' />
          <Image className={styles.img} src={Img11} srcSet={Img12} alt='' />
          <Image className={styles.img} src={Img11} srcSet={Img12} alt='' />
          <Image className={styles.img} src={Img11} srcSet={Img12} alt='' />
        </div>
        <div className={styles.block_arrow_bottom}>
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default Gallery;

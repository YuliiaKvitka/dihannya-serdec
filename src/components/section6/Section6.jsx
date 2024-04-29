import Image from 'next/image';

import styles from './Section6.module.css';
import BgWhite from './../../../public/assets/hero/rec-white.png';
import Img11 from './../../../public/assets/gallery/1@1x.jpeg';
import Img21 from './../../../public/assets/gallery/2@1x.jpeg';
import Img31 from './../../../public/assets/gallery/3@1x.jpeg';
import Img41 from './../../../public/assets/gallery/4@1x.jpeg';
import Img51 from './../../../public/assets/gallery/5@1x.jpeg';
import Img12 from './../../../public/assets/gallery/1@2x.jpeg';
import Img22 from './../../../public/assets/gallery/2@2x.jpeg';
import Img32 from './../../../public/assets/gallery/3@2x.jpeg';
import Img42 from './../../../public/assets/gallery/4@2x.jpeg';
import Img52 from './../../../public/assets/gallery/5@2x.jpeg';
import HrBlockYellow from '../hrBlock/HrBlockYellow';
import Heart3 from './../../../public/assets/heart/heart-ua.png';
import ButtonAnimation from '../buttonAnimation/ButtonAnimation';
import Link from 'next/link';

const Section6 = () => {
  return (
    <section className={styles.wrapper}>
      <Image className={styles.bgWhiteReverse} src={BgWhite} alt='' />
      <Image className={styles.bgWhite} src={BgWhite} alt='' />

      <h2 className='heading2__white'>Галерея</h2>
      <div className='mt-5 mb-10'>
        <HrBlockYellow />
      </div>
      <Image className={styles.heart3} src={Heart3} alt='' />
      <div className={styles.gallery}>
        <div>
          <Image
            className='rounded-tl-lg-[20px] w-[278px] h-[510px] m-0'
            src={Img11}
            srcSet={Img12}
            alt=''
            width={278}
            height={510}
          />
        </div>
        <div className='flex flex-col '>
          <div className='flex'>
            <div className=''>
              <Image
                className='m-0 w-[510px] h-[255px]'
                src={Img21}
                srcSet={Img22}
                alt=''
                width={510}
                height={255}
              />
            </div>
            <div className=''>
              <Image
                className='w-[278px] h-[255px] rounded-tr-lg-[20px] m-0'
                src={Img31}
                srcSet={Img32}
                alt=''
                width={278}
                height={255}
              />
            </div>
          </div>
          <div className='flex'>
            <div className=''>
              <Image
                className='m-0 w-[278px] h-[255px]'
                src={Img41}
                srcSet={Img42}
                alt=''
                width={278}
                height={250}
              />
            </div>
            <div className=''>
              <Image
                className='m-0 w-[510px] h-[255px]'
                src={Img51}
                srcSet={Img52}
                alt=''
                width={510}
                height={255}
              />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.button}>
        <Link href='/gallery'>
          <ButtonAnimation title='Галерея фото' />
        </Link>
      </div>
    </section>
  );
};

export default Section6;

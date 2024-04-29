'use client';
import { useEffect } from 'react';
import './style.css';
import './pagination.css';
import Image from 'next/image';
import Img1 from './../../../public/assets/partners/1.png';
import Img2 from './../../../public/assets/partners/2.png';
import Img3 from './../../../public/assets/partners/3.png';
import Img4 from './../../../public/assets/partners/4.png';
import Img5 from './../../../public/assets/partners/5.png';

const RunningLine = () => {
  useEffect(() => {
    const root = document.documentElement;
    const marqueeElementsDisplayed = parseInt(
      getComputedStyle(root).getPropertyValue('--marquee-elements-displayed'),
      10
    );
    const marqueeContent = document.querySelector('ul.marquee-content');

    root.style.setProperty(
      '--marquee-elements',
      marqueeContent.children.length
    );

    for (let i = 0; i < marqueeElementsDisplayed; i++) {
      marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
    }
  }, []); // Пустой массив зависимостей указывает, что эффект выполняется только при монтировании

  return (
    <>
      <div className='marquee'>
        <ul className='marquee-content'>
          {/* Добавьте сюда элементы, которые должны скроллиться */}
          <li>
            <Image src={Img1} alt='' />
          </li>

          <li>
            <Image src={Img2} alt='' />
          </li>

          <li>
            <Image src={Img3} alt='' />
          </li>

          <li>
            <Image src={Img4} alt='' />
          </li>

          <li>
            <Image src={Img5} alt='' />
          </li>
        </ul>
      </div>
      {/* <div className='justify-center mt-[40px] mb-[40px] flex gap-2'>
        <div className='slider_dot active_dot'></div>
        <div className='slider_dot'></div>
        <div className='slider_dot'></div>
        <div className='slider_dot'></div>
      </div> */}
    </>
  );
};

export default RunningLine;

'use client';
import Image from 'next/image';
import axios from 'axios';
import slides from '/public/data/slides.json';
import styles from './SliderProjects.module.css';

import Arrow from './arrow.png';
import Card from './card/Card';

import SliderDots from '../sliderDots/SliderDots';
import Link from 'next/link';
import { useState } from 'react';

const baseURL = '/public/data/slides.json';

const SliderProjects = () => {
  const [projects, setProjects] = useState([]);
  axios.get(baseURL).then(res => {
    console.log(res.data);
  });

  const slideLeft = () => {
    let slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 380;
  };

  const slideRight = () => {
    let slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 380;
  };

  return (
    <>
      <div className={styles.slider_wrapper}>
        <div className={styles.arrow_btn}>
          <button
            className={styles.btn}
            title='scroll left'
            onClick={slideLeft}
          >
            <Image src={Arrow} alt='' />
          </button>
        </div>

        <div className={styles.slider}>
          {slides.map(item => (
            <>
              <Link key={item.id} href={`/projects/${item.id}`}>
                <Card
                  key={item.id}
                  img={item.img}
                  imgBig={item.imgBig}
                  title={item.title}
                  desc={item.desc}
                  projectId={item.projectId}
                  text={item.text}
                />
              </Link>
            </>
          ))}
        </div>
        <div className={styles.arrow_btn}>
          <button
            className={styles.btn}
            title='scroll right'
            onClick={slideRight}
          >
            <Image className={styles.arrowReverse} src={Arrow} alt='' />
          </button>
        </div>
      </div>
      <SliderDots />
    </>
  );
};
export default SliderProjects;

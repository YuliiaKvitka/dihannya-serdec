import Card from '@/components/slider/card/Card';
import styles from './Projects.module.css';
import axios from 'axios';
import slides from './../../../public/data/slides.json';
import HrBlockBlue from '@/components/hrBlock/HrBlockBlue';

import Pagination from '@/components/pagination/Pagination';
import Link from 'next/link';

const baseURL = './../../../public/data/slides.json';

const Projects = () => {
  axios.get(baseURL).then(res => {
    console.log(res.data);
  });
  return (
    <div className={styles.section}>
      <h2 className={styles.title}>Projects</h2>
      <div className='mt-5 mb-10'>
        <HrBlockBlue />
      </div>

      <div className={styles.wrapper}>
        <Pagination />
        <div className={styles.slider_wrapper}>
          <div className={styles.slider}>
            {slides.map(item => (
              <Link key={item.id} href={`/projects/${item.id}`}>
                <Card
                  key={item.id}
                  img={item.img}
                  imgBig={item.imgBig}
                  title={item.title}
                  desc={item.desc}
                  id={item.id}
                  projectId={item.id}
                  text={item.text}
                />
              </Link>
            ))}
          </div>
        </div>
        <div className={styles.block_arrow_bottom}>
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default Projects;

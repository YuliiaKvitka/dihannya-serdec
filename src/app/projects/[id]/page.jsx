'use client';
import { useRouter } from 'next/router';
import slides from './../../../../public/data/slides.json';
import Image from 'next/image';
import styles from './Project.module.css';

import { notFound } from 'next/navigation';
import ButtonSliderYellow from '@/components/buttonSlider/ButtonSliderYellow';

// Функция для получения данных по идентификатору
const getProjectById = id => {
  return slides.find(slide => slide.id.toString() === id);
};

const ProjectPage = ({ params }) => {
  const project = getProjectById(params.id);

  // Если проект не найден, возвращаем страницу 404
  if (!project) {
    notFound();
  }

  return (
    <div>
      <Image
        src={project.imgBig}
        alt={project.title}
        width={1920}
        height={389}
      />
      <div className={styles.block}>
        <h1 className={styles.title}>{project.title}</h1>
        <div className={styles.hr_block}>
          <hr className={styles.hr_black} />
        </div>
        <p className={styles.desc}>{project.desc}</p>
        <div className={styles.btnLeft}>
          <ButtonSliderYellow align='left' href='/#contacts' />
        </div>
        <p className={styles.desc}>{project.text}</p>
      </div>
    </div>
  );
};

export default ProjectPage;

// import Image from 'next/image';
// import { useParams } from 'next/navigation';
// import { useEffect, useState } from 'react';

// const ProjectPage = () => {
//   const { projectId } = useParams();
//   const [project, setProject] = useState(null);

//   useEffect(() => {
//     const baseURL = './../../../public/data/slides.json';

//     fetch(`http://localhost:3000/data/slides.json/${projectId}`).then(project =>
//       setProject(project)
//     );
//   }, [projectId]);

//   return (
//     <div>
//       Details about Project {projectId}
//       {project && (
//         <>
//           <Image src={project.imgBig} alt='' width={1920} height={389} />
//           <h2 className='heading2'>
//             {project.title} {projectId}
//           </h2>
//           <p className=''> {project.text}</p>
//         </>
//       )}
//     </div>
//   );
// };
// export default ProjectPage;

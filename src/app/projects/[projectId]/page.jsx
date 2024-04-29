'use client';

import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const ProjectPage = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const baseURL = './../../../public/data/slides.json';

    fetch(`http://localhost:3000/data/slides.json/${projectId}`).then(project =>
      setProject(project)
    );
  }, [projectId]);

  return (
    <div>
      Details about Project {projectId}
      {project && (
        <>
          <Image src={project.imgBig} alt='' width={1920} height={389} />
          <h2 className='heading2'>
            {project.title} {projectId}
          </h2>
          <p className=''> {project.text}</p>
        </>
      )}
    </div>
  );
};
export default ProjectPage;

import { useMemo, useState } from 'react';
import styles from './Projects.module.css';
import { projectsData } from '../data/projectsData';
import { Project } from '../components/Project';

export const Projects = () => {
  const [selectedOption, setSelectedOption] = useState('all');
  const [projects, setProjects] = useState(projectsData);

  const filteredProjects = useMemo(() => {
    if (selectedOption === 'all') return projects;

    return projects.filter((project) => project.category === selectedOption);
  }, [selectedOption, projects]);

  const onRadioChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <section id="projects" className={styles.projects}>
      <h3 className={styles.projects__title}>Mis Proyectos</h3>

      <div className={styles.radios}>
        <label className={styles.radio}>
          <input
            type="radio"
            name="radio"
            value="all"
            onChange={onRadioChange}
            checked={selectedOption === 'all'}
            className={styles.radio__input}
          ></input>
          <span className={styles.radio__name}>Todos</span>
        </label>

        <label className={styles.radio}>
          <input
            type="radio"
            name="radio"
            value="fullstack"
            onChange={onRadioChange}
            checked={selectedOption === 'fullstack'}
            className={styles.radio__input}
          ></input>
          <span className={styles.radio__name}>FullStack</span>
        </label>

        <label className={styles.radio}>
          <input
            type="radio"
            name="radio"
            value="frontend"
            onChange={onRadioChange}
            checked={selectedOption === 'frontend'}
            className={styles.radio__input}
          ></input>
          <span className={styles.radio__name}>FrontEnd</span>
        </label>

        <label className={styles.radio}>
          <input
            type="radio"
            name="radio"
            value="landingpage"
            onChange={onRadioChange}
            checked={selectedOption === 'landingpage'}
            className={styles.radio__input}
          ></input>
          <span className={styles.radio__name}>Landing Pages</span>
        </label>
      </div>

      <ul className={styles.projects__list}>
        {filteredProjects.map((project) => {
          return <Project key={project.id} {...project}></Project>;
        })}
      </ul>
    </section>
  );
};

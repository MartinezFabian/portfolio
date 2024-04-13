import { useState } from 'react';
import styles from './Projects.module.css';

export const Projects = () => {
  const [selectedOption, setSelectedOption] = useState('all');

  const onRadioChange = (e) => {
    setSelectedOption(e.target.value);
    console.log(selectedOption);
  };

  return (
    <section id="projects" className={styles.projects}>
      <h3 className={styles.projects__title}>Mis Proyectos Destacados</h3>

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
      </div>
    </section>
  );
};

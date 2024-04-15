import styles from './Project.module.css';
import { Chrome } from './icons/Chrome';
import { Github } from './icons/Github';

export const Project = ({ id, title, description, images, technologies, github, demo }) => {
  return (
    <article className={styles.project}>
      <picture className={styles.project__picture}>
        <source srcSet={images[0]} type="image/avif" />
        <source srcSet={images[1]} type="image/webp" />
        <source srcSet={images[2]} type="image/jpeg" />
        <img
          loading="lazy"
          decoding="async"
          src={images[2]}
          alt={title + ' image'}
          width="500"
          height="300"
          className={styles.project__img}
        />
      </picture>

      <div className={styles.project__content}>
        <h3 className={styles.project__title}>{title}</h3>
        <p className={styles.project__description}>{description}</p>

        <div className={styles.project__technologies}>
          {technologies.map((technology) => {
            return (
              <p key={technology + id} className={styles.technology}>
                {technology}
              </p>
            );
          })}
        </div>

        <div className={styles.project__links}>
          {github.length > 0 ? (
            <a href={github} target="_blank" rel="noreferrer" className={styles.project__link}>
              Github
              <Github width="16" height="16"></Github>
            </a>
          ) : null}

          {demo.length > 0 ? (
            <a href={demo} target="_blank" rel="noreferrer" className={styles.project__link}>
              Demo
              <Chrome width="16" height="16"></Chrome>
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
};

import styles from './Project.module.css';

export const Project = ({ id, title, description, images, technologies, github, demo }) => {
  return (
    <article className={styles.project}>
      <picture>
        <source srcSet={images[0]} type="image/avif" />
        <source srcSet={images[1]} type="image/webp" />
        <source srcSet={images[2]} type="image/jpeg" />
        <img
          className={styles.project__img}
          loading="lazy"
          decoding="async"
          src={images[2]}
          alt={title + ' image'}
          width="500"
          height="300"
        />
      </picture>

      <h3 className={styles.project__title}>{title}</h3>
      <p className={styles.project__description}>{description}</p>

      <div className={styles.project__technologies}>
        {technologies.map((technology) => {
          return (
            <p key={technology + id} className={styles.project__technology}>
              {technology}
            </p>
          );
        })}
      </div>

      <div className={styles.project__links}>
        {github.length > 0 ? (
          <a href={github} target="_blank" rel="noreferrer" className={styles.project__link}>
            Github
          </a>
        ) : null}

        {demo.length > 0 ? (
          <a href={demo} target="_blank" rel="noreferrer" className={styles.project__link}>
            Demo
          </a>
        ) : null}
      </div>
    </article>
  );
};

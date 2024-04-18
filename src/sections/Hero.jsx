import styles from './Hero.module.css';

export const Hero = () => {
  return (
    <main id="hero" className={styles.hero + ' ' + 'animate__animated animate__fadeIn'}>
      <section className={styles.hero__portrait}>
        <picture>
          <source srcSet="/img/portrait.avif" type="image/avif" />
          <source srcSet="/img/portrait.webp" type="image/webp" />
          <source srcSet="/img/portrait.png" type="image/png" />
          <img
            className={styles.hero__img}
            loading="lazy"
            decoding="async"
            src="/img/portrait.png"
            alt="Fotografía de Fabian Martinez"
            width="500"
            height="300"
          />
        </picture>
      </section>

      <section className={styles.hero__content}>
        <div className={styles.hero__container}>
          <p className={styles.hero__subtitle}>Soy Fabian Martinez 👋</p>

          <h1 className={styles.hero__title}>Full-stack Developer</h1>
        </div>

        <p className={styles.hero__description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae itaque dignissimos maxime
          numquam quod libero inventore excepturi voluptatibus consequuntur! Vero delectus ab enim
          quidem odit earum ipsa provident debitis fugit.
        </p>

        <div className={styles.hero__buttons}>
          <button className={styles.hero__btn}>
            <svg
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid"
              viewBox="0 0 256 256"
            >
              <path
                d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453"
                fill="#ffff"
              />
            </svg>
            Mi LinkedIn
          </button>
          <button className={`${styles.hero__btn} ${styles['hero__btn--dark']}`}>
            <svg xmlns="http://www.w3.org/2000/svg" height="22" viewBox="0 -960 960 960" width="22">
              <path
                d="M320-240h320v-80H320v80Zm0-160h320v-80H320v80ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z"
                fill="#ffff"
              />
            </svg>
            Descargar CV
          </button>
        </div>
      </section>
    </main>
  );
};

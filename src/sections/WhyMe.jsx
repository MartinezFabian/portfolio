import styles from './WhyMe.module.css';

export const WhyMe = () => {
  return (
    <section className={styles.whyme}>
      <h2 className={styles.whyme__title}>3 Razones para elegirme</h2>

      <div className={styles.whyme__cards}>
        <article className={styles.card}>
          <div>
            <div className={styles.card__icon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="40"
                viewBox="0 -960 960 960"
                width="40"
              >
                <path
                  d="M560-564v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-600q-38 0-73 9.5T560-564Zm0 220v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-380q-38 0-73 9t-67 27Zm0-110v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-490q-38 0-73 9.5T560-454ZM260-320q47 0 91.5 10.5T440-278v-394q-41-24-87-36t-93-12q-36 0-71.5 7T120-692v396q35-12 69.5-18t70.5-6Zm260 42q44-21 88.5-31.5T700-320q36 0 70.5 6t69.5 18v-396q-33-14-68.5-21t-71.5-7q-47 0-93 12t-87 36v394Zm-40 118q-48-38-104-59t-116-21q-42 0-82.5 11T100-198q-21 11-40.5-1T40-234v-482q0-11 5.5-21T62-752q46-24 96-36t102-12q58 0 113.5 15T480-740q51-30 106.5-45T700-800q52 0 102 12t96 36q11 5 16.5 15t5.5 21v482q0 23-19.5 35t-40.5 1q-37-20-77.5-31T700-240q-60 0-116 21t-104 59ZM280-494Z"
                  fill="#ffff"
                />
              </svg>
            </div>
          </div>
          <h3 className={styles.card__title}>Autodidacta</h3>
          <p className={styles.card__description}>
            Mi habilidad para aprender y adaptarme a nuevas tecnologías con facilidad me distingue.
            Creo firmemente en la importancia de establecer bases sólidas, lo que me permite crecer
            constantemente y enfrentar nuevos desafíos técnicos con confianza.
          </p>
        </article>

        <article className={styles.card}>
          <div>
            <div className={styles.card__icon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="40"
                viewBox="0 -960 960 960"
                width="40"
              >
                <path
                  d="M40-120v-80h880v80H40Zm120-120q-33 0-56.5-23.5T80-320v-440q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v440q0 33-23.5 56.5T800-240H160Zm0-80h640v-440H160v440Zm0 0v-440 440Z"
                  fill="#ffff"
                />
              </svg>
            </div>
          </div>
          <h3 className={styles.card__title}>Desarrollo integral de aplicaciones web</h3>
          <p className={styles.card__description}>
            Desde el diseño del modelo entidad-relación (MER) hasta la implementación del front end,
            puedo llevar a cabo todo el proceso de desarrollo de una aplicación web. Desde la
            creación de la base de datos en un Sistema Gestor de Base de Datos hasta la construcción
            de una API Rest, mi experiencia abarca todas las etapas del desarrollo de una aplicación
            web.
          </p>
        </article>

        <article className={styles.card}>
          <div>
            <div className={styles.card__icon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="40"
                viewBox="0 -960 960 960"
                width="40"
              >
                <path
                  d="M480-120 200-272v-240L40-600l440-240 440 240v320h-80v-276l-80 44v240L480-120Zm0-332 274-148-274-148-274 148 274 148Zm0 241 200-108v-151L480-360 280-470v151l200 108Zm0-241Zm0 90Zm0 0Z"
                  fill="#ffff"
                />
              </svg>
            </div>
          </div>
          <h3 className={styles.card__title}>Formación universitaria</h3>
          <p className={styles.card__description}>
            Graduado de la Tecnicatura Universitaria en Programación en la{' '}
            <a target="_blank" href="https://www.utn.edu.ar/">
              Universidad Tecnológica Nacional (UTN)
            </a>
            , cuento con una sólida formación académica que respalda mis habilidades técnicas.
          </p>
        </article>
      </div>
    </section>
  );
};

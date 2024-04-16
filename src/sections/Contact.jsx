import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from './Contact.module.css';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const { VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY } =
      import.meta.env;

    emailjs
      .sendForm(VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, form.current, {
        publicKey: VITE_EMAILJS_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <section id="contact" className={styles.contact}>
      <h3 className={styles.contact__title}>Contactar conmigo</h3>

      <form ref={form} onSubmit={sendEmail} className={styles.contact__form}>
        <div className={styles.contact__field}>
          <label className={styles.contact__label}>Name</label>
          <input
            type="text"
            name="user_name"
            placeholder="Escriba su nombre"
            className={styles.contact__input}
          />
        </div>

        <div className={styles.contact__field}>
          <label className={styles.contact__label}>Email</label>
          <input
            type="email"
            name="user_email"
            placeholder="Escriba su email"
            className={styles.contact__input}
          />
        </div>

        <div className={styles.contact__field}>
          <label className={styles.contact__label}>Message</label>
          <textarea
            name="message"
            placeholder="Escriba su mensaje"
            className={styles.contact__textarea}
            rows="6"
          />
        </div>

        <button type="submit" className={styles.contact__submit}>
          Enviar
          <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 -960 960 960" width="18">
            <path
              d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z"
              fill="#fff"
            />
          </svg>
        </button>
      </form>
    </section>
  );
};

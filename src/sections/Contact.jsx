import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from './Contact.module.css';
import { useForm } from 'react-hook-form';

export const Contact = () => {
  const form = useRef();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const sendEmail = handleSubmit((data) => {
    const { VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY } =
      import.meta.env;

    emailjs
      .sendForm(VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, form.current, {
        publicKey: VITE_EMAILJS_PUBLIC_KEY,
      })
      .then(
        () => {
          setShowSuccess(true);

          setTimeout(() => {
            setShowSuccess(false);
          }, 4000);

          reset();
        },
        (error) => {
          console.log('FAILED...', error.text);

          setShowError(true);

          setTimeout(() => {
            setShowError(false);
          }, 4000);
        }
      );
  });

  return (
    <section id="contact" className={styles.contact}>
      <h3 className={styles.contact__title}>Contactarme</h3>

      <form ref={form} onSubmit={sendEmail} className={styles.contact__form}>
        <div className={styles.contact__field}>
          <label className={styles.contact__label}>Nombre</label>
          <input
            type="text"
            name="user_name"
            placeholder="Escriba su nombre"
            className={styles.contact__input}
            {...register('user_name', {
              required: { value: true, message: 'El nombre es requerido' },
              maxLength: { value: 30, message: 'El nombre no debe exceder los 30 caracteres' },
              minLength: { value: 3, message: 'El nombre debe tener al menos 3 caracteres' },
            })}
          />

          {errors.user_name ? (
            <span className={styles.contact__error}>{errors.user_name.message}</span>
          ) : null}
        </div>

        <div className={styles.contact__field}>
          <label className={styles.contact__label}>Email</label>
          <input
            type="email"
            name="user_email"
            placeholder="Escriba su email"
            className={styles.contact__input}
            {...register('user_email', {
              required: { value: true, message: 'El email es requerido' },
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: 'El email es incorrecto',
              },
            })}
          />

          {errors.user_email ? (
            <span className={styles.contact__error}>{errors.user_email.message}</span>
          ) : null}
        </div>

        <div className={styles.contact__field}>
          <label className={styles.contact__label}>Mensaje</label>
          <textarea
            name="message"
            placeholder="Escriba su mensaje"
            className={styles.contact__textarea}
            rows="6"
            {...register('message', {
              required: { value: true, message: 'El mensaje es requerido' },
              maxLength: { value: 1200, message: 'El mensaje no debe exceder los 1200 caracteres' },
              minLength: { value: 60, message: 'El mensaje debe tener al menos 60 caracteres' },
            })}
          />
          {errors.message ? (
            <span className={styles.contact__error}>{errors.message.message}</span>
          ) : null}
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

      {showSuccess ? (
        <div className={styles.success}>
          <div className={styles.success__icon}>
            <svg
              fill="none"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="m12 1c-6.075 0-11 4.925-11 11s4.925 11 11 11 11-4.925 11-11-4.925-11-11-11zm4.768 9.14c.0878-.1004.1546-.21726.1966-.34383.0419-.12657.0581-.26026.0477-.39319-.0105-.13293-.0475-.26242-.1087-.38085-.0613-.11844-.1456-.22342-.2481-.30879-.1024-.08536-.2209-.14938-.3484-.18828s-.2616-.0519-.3942-.03823c-.1327.01366-.2612.05372-.3782.1178-.1169.06409-.2198.15091-.3027.25537l-4.3 5.159-2.225-2.226c-.1886-.1822-.4412-.283-.7034-.2807s-.51301.1075-.69842.2929-.29058.4362-.29285.6984c-.00228.2622.09851.5148.28067.7034l3 3c.0983.0982.2159.1748.3454.2251.1295.0502.2681.0729.4069.0665.1387-.0063.2747-.0414.3991-.1032.1244-.0617.2347-.1487.3236-.2554z"
                fill="#393a37"
                fillRule="evenodd"
              ></path>
            </svg>
          </div>
          <div className={styles.success__title}>El email fue enviado correctamente.</div>
        </div>
      ) : null}

      {showError ? (
        <div className={styles.error}>
          <div className={styles.error__icon}>
            <svg
              fill="none"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m13 13h-2v-6h2zm0 4h-2v-2h2zm-1-15c-1.3132 0-2.61358.25866-3.82683.7612-1.21326.50255-2.31565 1.23915-3.24424 2.16773-1.87536 1.87537-2.92893 4.41891-2.92893 7.07107 0 2.6522 1.05357 5.1957 2.92893 7.0711.92859.9286 2.03098 1.6651 3.24424 2.1677 1.21325.5025 2.51363.7612 3.82683.7612 2.6522 0 5.1957-1.0536 7.0711-2.9289 1.8753-1.8754 2.9289-4.4189 2.9289-7.0711 0-1.3132-.2587-2.61358-.7612-3.82683-.5026-1.21326-1.2391-2.31565-2.1677-3.24424-.9286-.92858-2.031-1.66518-3.2443-2.16773-1.2132-.50254-2.5136-.7612-3.8268-.7612z"
                fill="#393a37"
              ></path>
            </svg>
          </div>
          <div className={styles.error__title}>Error al enviar el email.</div>
        </div>
      ) : null}
    </section>
  );
};

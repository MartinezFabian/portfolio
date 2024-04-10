import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import styles from './Navbar.module.css';

export const Navbar = () => {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive((prevState) => !prevState);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  const handleResize = () => {
    if (window.innerWidth <= 500) {
      closeMenu();
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu();
    }
  }, []);

  return (
    <nav className={`${styles.navbar}  ${navActive ? 'active' : ''}`}>
      <h3 className={styles.navbar__logo__name}>Fabian Martinez.</h3>

      <a
        className={`${styles.nav__hamburger} ${navActive ? styles.active : ''}`}
        onClick={toggleNav}
      >
        <span className={styles.nav__hamburger__line}></span>
        <span className={styles.nav__hamburger__line}></span>
        <span className={styles.nav__hamburger__line}></span>
      </a>
      <div className={`${styles.navbar__items} ${navActive ? styles.active : ''}`}>
        <ul>
          <li>
            <Link
              onClick={closeMenu}
              activeClass={styles['navbar__content--active']}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="hero"
              className={styles.navbar__content}
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass={styles['navbar__content--active']}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="MyPortfolio"
              className={styles.navbar__content}
            >
              Mis Proyectos
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass={styles['navbar__content--active']}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="AboutMe"
              className={styles.navbar__content}
            >
              Sobre Mi
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass={styles['navbar__content--active']}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="testimonial"
              className={styles.navbar__content}
            >
              Mis Skills
            </Link>
          </li>
        </ul>
      </div>

      <Link
        onClick={closeMenu}
        activeClass={styles['navbar__content--active']}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        to="Contact"
        className={styles.btn}
      >
        Contactarme
      </Link>
    </nav>
  );
};

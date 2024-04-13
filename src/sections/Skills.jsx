import { Bash } from '../components/icons/Bash';
import { CSS } from '../components/icons/CSS';
import { Express } from '../components/icons/Express';
import { Firebase } from '../components/icons/Firebase';
import { Git } from '../components/icons/Git';
import { Github } from '../components/icons/Github';
import { Html } from '../components/icons/Html';
import { IntelliJIDEA } from '../components/icons/IntelliJIDEA';
import { JavaScript } from '../components/icons/JavaScript';
import { Jest } from '../components/icons/Jest';
import { Linux } from '../components/icons/Linux';
import { MaterialUI } from '../components/icons/MaterialUI';
import { MySQL } from '../components/icons/MySQL';
import { Node } from '../components/icons/Node';
import { ReactIcon } from '../components/icons/ReactIcon';
import { ReactQuery } from '../components/icons/ReactQuery';
import { ReactRouter } from '../components/icons/ReactRouter';
import { Redux } from '../components/icons/Redux';
import { SQLServer } from '../components/icons/SQLServer';
import { Sass } from '../components/icons/Sass';
import { VisualStudio } from '../components/icons/VisualStudio';
import { VisualStudioCode } from '../components/icons/VisualStudioCode';
import styles from './Skills.module.css';

export const Skills = () => {
  return (
    <section id="skills" className={styles.skills}>
      <h3 className={styles.skills__title}>Habilidades Técnicas</h3>

      <div className={styles.skills__container}>
        <section className={styles.skills__section}>
          <h3 className={styles.skills__subtitle}>Frontend</h3>

          <ul className={styles.skills__list}>
            <li className={styles.skill}>
              <div className={styles.skill__svg}>
                <Html width="40" height="40"></Html>
              </div>
              <p className={styles.skill__name}>HTML</p>
            </li>

            <li className={styles.skill}>
              <div className={styles.skill__svg}>
                <CSS width="40" height="40"></CSS>
              </div>
              <p className={styles.skill__name}>CSS</p>
            </li>

            <li className={styles.skill}>
              <div className={styles.skill__svg}>
                <Sass width="40" height="40"></Sass>
              </div>
              <p className={styles.skill__name}>Sass</p>
            </li>

            <li className={styles.skill}>
              <div className={styles.skill__svg}>
                <JavaScript width="40" height="40"></JavaScript>
              </div>
              <p className={styles.skill__name}>JavaScript</p>
            </li>

            <li className={styles.skill}>
              <div className={styles.skill__svg}>
                <ReactIcon width="40" height="40"></ReactIcon>
              </div>
              <p className={styles.skill__name}>React</p>
            </li>

            <li className={styles.skill}>
              <div className={styles.skill__svg}>
                <ReactRouter width="40" height="40"></ReactRouter>
              </div>
              <p className={styles.skill__name}>React Router</p>
            </li>

            <li className={styles.skill}>
              <div className={styles.skill__svg}>
                <ReactQuery width="40" height="40"></ReactQuery>
              </div>
              <p className={styles.skill__name}>React Query</p>
            </li>

            <li className={styles.skill}>
              <div className={styles.skill__svg}>
                <Redux width="40" height="40"></Redux>
              </div>
              <p className={styles.skill__name}>Redux</p>
            </li>

            <li className={styles.skill}>
              <div className={styles.skill__svg}>
                <MaterialUI width="40px" height="40px"></MaterialUI>
              </div>
              <p className={styles.skill__name}>Material UI</p>
            </li>
          </ul>
        </section>

        <section className={styles.skills__section}>
          <h3 className={styles.skills__subtitle}>Backend</h3>
          <ul className={styles.skills__list}>
            <li className={styles.skill}>
              <div className={styles.skill__svg}>
                <Node width="60px" height="60px"></Node>
              </div>
              <p className={styles.skill__name}>Node.js</p>
            </li>

            <li className={styles.skill}>
              <div className={styles.skill__svg}>
                <Express width="40px" height="40px"></Express>
              </div>
              <p className={styles.skill__name}>Express.js</p>
            </li>

            <li className={styles.skill}>
              <div className={styles.skill__svg}>
                <MySQL width="40px" height="40px"></MySQL>
              </div>
              <p className={styles.skill__name}>MySQL</p>
            </li>

            <li className={styles.skill}>
              <div className={styles.skill__svg}>
                <SQLServer width="40px" height="40px"></SQLServer>
              </div>
              <p className={styles.skill__name}>SQL Server</p>
            </li>

            <li className={styles.skill}>
              <div className={styles.skill__svg}>
                <Firebase width="40px" height="40px"></Firebase>
              </div>
              <p className={styles.skill__name}>Firebase</p>
            </li>
          </ul>
        </section>

        <section className={styles.skills__section}>
          <h3 className={styles.skills__subtitle}>Tools</h3>
          <ul className={styles.skills__list}>
            <li className={styles.skill}>
              <div className={styles.skill__svg}>
                <Jest width="40px" height="40px"></Jest>
              </div>
              <p className={styles.skill__name}>Jest</p>
            </li>

            <li className={styles.skill}>
              <div className={styles.skill__svg}>
                <Git width="40px" height="40px"></Git>
              </div>
              <p className={styles.skill__name}>Git</p>
            </li>

            <li className={styles.skill}>
              <div className={styles.skill__svg}>
                <Github width="40px" height="40px"></Github>
              </div>
              <p className={styles.skill__name}>Github</p>
            </li>

            <li className={styles.skill}>
              <div className={styles.skill__svg}>
                <Bash width="40px" height="40px"></Bash>
              </div>
              <p className={styles.skill__name}>Terminal</p>
            </li>

            <li className={styles.skill}>
              <div className={styles.skill__svg}>
                <Linux width="40px" height="40px"></Linux>
              </div>
              <p className={styles.skill__name}>Linux</p>
            </li>

            <li className={styles.skill}>
              <div className={styles.skill__svg}>
                <VisualStudioCode width="40px" height="40px"></VisualStudioCode>
              </div>
              <p className={styles.skill__name}>Visual Studio Code</p>
            </li>

            <li className={styles.skill}>
              <div className={styles.skill__svg}>
                <VisualStudio width="40px" height="40px"></VisualStudio>
              </div>
              <p className={styles.skill__name}>Visual Studio</p>
            </li>

            <li className={styles.skill}>
              <div className={styles.skill__svg}>
                <IntelliJIDEA width="40px" height="40px"></IntelliJIDEA>
              </div>
              <p className={styles.skill__name}>IntelliJ IDEA</p>
            </li>
          </ul>
        </section>
      </div>
    </section>
  );
};

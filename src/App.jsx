import { Contact } from './sections/Contact';
import { Hero } from './sections/Hero';
import { Navbar } from './sections/Navbar';
import { Projects } from './sections/Projects';
import { Skills } from './sections/Skills';
import { WhyMe } from './sections/WhyMe';

export const App = () => {
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <Hero></Hero>
      <WhyMe></WhyMe>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
    </>
  );
};

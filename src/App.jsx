import { Hero } from './sections/Hero';
import { Navbar } from './sections/Navbar';
import { Projects } from './sections/Projects';
import { Skills } from './sections/Skills';
import { WhyMe } from './sections/WhyMe';

export const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <WhyMe></WhyMe>
      <Skills></Skills>
      <Projects></Projects>
    </>
  );
};

import { Hero } from '../components/Hero';
import { Projects } from '../components/Projects';
import { Skills } from '../components/Skills';
import { WorkProcess } from '../components/WorkProcess';
import { About } from '../components/About';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

export function Home() {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white">
      <Hero />
      <Projects />
      <Skills />
      <WorkProcess />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

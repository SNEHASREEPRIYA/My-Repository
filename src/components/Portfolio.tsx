import Navigation from './Navigation';
import Hero from './Hero';
import About from './About';
import Education from './Education';
import Skills from './Skills';
import Projects from './Projects';
import Hackathons from './Hackathons';
import Achievements from './Achievements';
import Contact from './Contact';
import Footer from './Footer';

const Portfolio = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Hackathons />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  );
};

export default Portfolio;
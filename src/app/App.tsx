import { useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Expertise } from './components/Expertise';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Speaking } from './components/Speaking';
import { Contacts } from './components/Contacts';
import { Footer } from './components/Footer';
import { ScrollProgress } from './components/ScrollProgress';

export default function App() {
  useEffect(() => {
    // Set dark mode permanently
    document.documentElement.classList.add('dark');
  }, []);

  const scrollToContacts = () => {
    const element = document.getElementById('contacts');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <ScrollProgress />
      <Header />
      <main>
        <Hero onContactClick={scrollToContacts} />
        <About />
        <Expertise />
        <Experience />
        <Projects />
        <Speaking />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}

import { useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Expertise } from './components/Expertise';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Speaking } from './components/Speaking';
import { Footer } from './components/Footer';
import { ScrollProgress } from './components/ScrollProgress';

export default function App() {
  useEffect(() => {
    // Set dark mode permanently
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Experience />
        <Projects />
        <Speaking />
      </main>
      <Footer />
    </div>
  );
}

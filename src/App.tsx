import { MotionConfig } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Benefits from './components/Benefits';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Vision from './components/Vision';
import Footer from './components/Footer';

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div id="top" className="min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Benefits />
          <Services />
          <HowItWorks />
          <Vision />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}

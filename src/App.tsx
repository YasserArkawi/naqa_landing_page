import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Benefits from './components/Benefits';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import Vision from './components/Vision';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-slate-900 font-sans selection:bg-brand-200">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Benefits />
        <Services />
        <HowItWorks />
        <Vision />
        {/* <FinalCTA /> */}
      </main>
      <Footer />
    </div>
  );
}



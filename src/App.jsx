import Navbar from './components/layout/Navbar.jsx';
import Footer from './components/layout/Footer.jsx';
import Hero from './components/sections/Hero.jsx';
import Stats from './components/sections/Stats.jsx';
import PracticeAreas from './components/sections/PracticeAreas.jsx';
import Process from './components/sections/Process.jsx';
import Testimonials from './components/sections/Testimonials.jsx';
import Contact from './components/sections/Contact.jsx';
import WhatsAppFloat from './components/ui/WhatsAppFloat.jsx';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <PracticeAreas />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}

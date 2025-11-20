import Hero from '../components/Hero.jsx';
import Navbar from "../components/Navbar.jsx"
import About from '../components/About.jsx';
import ServicesGrid from '../components/ServicesGrid.jsx';
// import Contact from '../components/Contact.jsx';
import Footer from '../components/Footer.jsx';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <ServicesGrid />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}

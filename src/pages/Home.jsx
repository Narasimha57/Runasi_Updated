import Hero from '../components/Hero.jsx';
import About from '../components/About.jsx';
import ServicesGrid from '../components/ServicesGrid.jsx';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';

function Home() {
  return (
    <div className="min-h-screen">
      <Navbar/>
      <Hero />
      <About />
      <ServicesGrid />
      <Footer />
    </div>
  );
}

export default Home;

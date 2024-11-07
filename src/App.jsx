import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Achievemets from "./components/Achievemets";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
export default function App() {
  return (
    <main className="overflow-x-hidden bg-black tracking-tighter text-gray-200 antialiased">
      <Navbar />
      <HeroSection />
      <About />
      <Projects />
      <Skills />
      <Achievemets />
      <Testimonials />
      <Footer />
    </main>
  );
}

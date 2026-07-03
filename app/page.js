import { LangProvider } from "../components/LangProvider";
import Background from "../components/Background";
import Reveal from "../components/Reveal";
import Boot from "../components/Boot";
import TopBar from "../components/TopBar";
import Hero from "../components/Hero";
import Ticker from "../components/Ticker";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <LangProvider>
      <Background />
      <Boot />
      <TopBar />
      <main>
        <Hero />
        <Ticker />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
      <Reveal />
    </LangProvider>
  );
}

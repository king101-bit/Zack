import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Path from "./components/Path";
import Approach from "./components/Approach";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-[1180px] px-5">
        <Hero />
        <About />
        <Path />
        <Approach />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

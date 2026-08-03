import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import GitHubSection from "@/components/GitHubSection";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";

export default function Home() {
  return (
    <main className="relative">
      <Cursor />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <GitHubSection />
      <Resume />
      <Contact />
      <Footer />
    </main>
  );
}

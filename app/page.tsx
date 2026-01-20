import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Projects from "@/components/Projects/Projects";
import Skills from "@/components/Skills/Skills";
import Contacts from "@/components/Contacts/Contacts";

export default function Home() {
  return (
    <main className="w-full relative">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contacts />
    </main>
  );
}

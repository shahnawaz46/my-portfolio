import ReactParticle from "@/components/ReactParticle";
import { Navbar, Banner, About, Skills, Project, Contact } from "@/components";

export default function Home() {
  return (
    <div>
      <ReactParticle />
      <Navbar />
      <Banner />
      <About />
      <Skills />
      <Project />
      <Contact />
    </div>
  );
}

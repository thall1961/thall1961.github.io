import '../App.css';
import Explainer from '../components/explainer';
import Hero from '../components/hero';
import Layout from "../components/layout.jsx";
import Logos from '../components/logos';
import { Navigation } from '../components/navigation';
import ProjectShowcase from '../components/projectShowcase';
import { ScrollSection } from '../components/scrollSection';
import { ThemeProvider } from "../context/ThemeContext";
import { companies, workItems } from '../data/work';

function Root() {
  return (
    <ThemeProvider>
      <Layout>
        <>
          <Navigation />
          <ScrollSection id="hero">
            <Hero/>
          </ScrollSection>
          <ScrollSection className="mb-48 lg:mb-72 xl:mb-80">
            <Logos/>
          </ScrollSection>
          <ScrollSection id="companies" className="mt-48 lg:mt-72 xl:mt-80 min-h-screen">
            <h1 className="text-md font-black uppercase tracking-tight text-gray-900 mb-12 p-4 rounded bg-black text-white">Companies</h1>
            <ProjectShowcase projects={companies} />
          </ScrollSection>
          <ScrollSection id="projects" className="mt-48 lg:mt-72 xl:mt-80 min-h-screen">
            <h1 className="text-md font-black uppercase tracking-tight text-gray-900 mb-12 p-4 rounded bg-black text-white">Projects</h1>
            <ProjectShowcase projects={workItems} />
          </ScrollSection>
          <ScrollSection id="about" className="mt-48 lg:mt-72 xl:mt-80 min-h-screen">
            <h1 className="text-md font-black uppercase tracking-tight text-gray-900 mb-12 p-4 rounded bg-black text-white">About Me</h1>
            <Explainer/>
          </ScrollSection>
        </>
      </Layout>
    </ThemeProvider>
  );
}

export default Root;

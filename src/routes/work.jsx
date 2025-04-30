import Layout from "../components/layout.jsx";
import { Navigation } from "../components/navigation.jsx";
import ProjectShowcase from "../components/projectShowcase.jsx";
import { companies, workItems } from "../data/work";

export default function Work() {
  const sortedWorkItems = workItems.sort(
    (a, b) => b.yearFounded - a.yearFounded
  );
  const allProjects = [...sortedWorkItems, ...companies];
  
  return (
    <Layout>
      <Navigation />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h1 className="text-md font-black uppercase tracking-tight text-gray-900 mb-12 p-4 rounded bg-black text-white">Work</h1>
        <ProjectShowcase projects={allProjects} />
      </div>
    </Layout>
  );
}

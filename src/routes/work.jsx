import Layout from "../components/layout.jsx";
import ProjectShowcase from "../components/projectShowcase.jsx";
import { companies, workItems } from "../data/work";

export default function Work() {
  const sortedWorkItems = workItems.sort(
    (a, b) => b.yearFounded - a.yearFounded
  );
  const allProjects = [...sortedWorkItems, ...companies];
  
  return (
    <Layout>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-12">
          My Work
        </h1>
        <ProjectShowcase projects={allProjects} />
      </div>
    </Layout>
  );
}

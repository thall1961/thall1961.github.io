import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { WorkItem } from './workItem';

export default function ProjectShowcase({ projects }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isFiltering, setIsFiltering] = useState(false);

  // Extract unique technologies from all projects
  const technologies = ['all', ...new Set(projects.flatMap(project => project.technologies || []))];

  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredProjects(projects);
    } else {
      setIsFiltering(true);
      const timer = setTimeout(() => {
        setFilteredProjects(projects.filter(project => 
          project.technologies?.includes(activeFilter)
        ));
        setIsFiltering(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [activeFilter, projects]);

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2 justify-center mb-8">
        {technologies.map((tech, index) => (
          <button
            key={tech}
            onClick={() => setActiveFilter(tech)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
              ${activeFilter === tech 
                ? 'bg-black text-white scale-110' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              } animate-fade-in`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {tech}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-300 ${isFiltering ? 'opacity-50' : 'opacity-100'}`}>
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className={`relative group transition-all duration-300 transform
              ${hoveredIndex === index 
                ? 'scale-105 z-10' 
                : 'hover:scale-102'
              } animate-fade-in-up`}
            style={{ animationDelay: `${index * 100}ms` }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-black/5 rounded-lg transition-opacity duration-300 group-hover:opacity-100 opacity-0" />
            <div className="relative bg-white p-6 rounded-lg shadow-lg h-full transition-all duration-300 group-hover:shadow-xl">
              <WorkItem {...project} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

ProjectShowcase.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      logo: PropTypes.string,
      lifeSpan: PropTypes.string,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      stats: PropTypes.array,
      currentState: PropTypes.string,
      highlights: PropTypes.arrayOf(PropTypes.string),
      content: PropTypes.string,
      technologies: PropTypes.arrayOf(PropTypes.string)
    })
  ).isRequired
}; 
import { useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import Signature from "../assets/signature.png";

export function Navigation() {
  const [activeSection, setActiveSection] = useState('hero');
  const location = useLocation();
  const isHomepage = location.pathname === '/';
  const isWorkPage = location.pathname === '/work';

  const sections = [
    { id: 'hero', label: 'Home', path: '/' },
    { id: 'companies', label: 'Companies', path: '/companies' },
    { id: 'projects', label: 'Projects', path: '/projects' },
    { id: 'about', label: 'About', path: '/about' }
  ];

  useEffect(() => {
    if (isHomepage) {
      const handleScroll = () => {
        const scrollPosition = window.scrollY + 100; // Offset for header
        const sections = document.querySelectorAll('section[id]');
        
        sections.forEach(section => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(section.id);
          }
        });
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    } else {
      // Set active section based on current path
      const currentSection = sections.find(section => section.path === location.pathname);
      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    }
  }, [isHomepage, location.pathname, sections]);

  const scrollToSection = (sectionId) => {
    if (isHomepage) {
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 80; // Adjust this value based on your header height
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between min-h-24">
          <nav className={`${isWorkPage ? 'block' : 'hidden lg:block'} p-6 lg:px-8 relative z-10`}>
            <div className="flex lg:flex-1 justify-between">
              <Link to="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Tom Hall | Developer</span>
                <img src={Signature} alt="" width="150" className="dark:invert" />
              </Link>
              {/* <ThemeToggle /> */}
            </div>
          </nav>
          {!isWorkPage && (
            <div className="flex justify-center space-x-8 py-4 absolute left-0 right-0 top-0 bottom-0">
              {sections.map((section) => (
                <Link
                  key={section.id}
                  to={section.path}
                  onClick={(e) => {
                    if (isHomepage) {
                      e.preventDefault();
                      scrollToSection(section.id);
                    }
                  }}
                  className={`text-sm font-medium transition-colors duration-200 px-3 py-2 rounded-md
                    ${activeSection === section.id 
                      ? 'bg-black text-white' 
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    }`}
                >
                  {section.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
} 
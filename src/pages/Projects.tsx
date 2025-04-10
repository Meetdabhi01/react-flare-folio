
import { useState, useEffect } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  liveUrl: string;
  repoUrl: string;
}

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [animateCards, setAnimateCards] = useState<boolean>(true);

  const allProjects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Dashboard',
      description: 'A responsive admin dashboard for e-commerce websites with analytics, product management, and order tracking.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js'],
      category: 'web',
      liveUrl: 'https://example.com',
      repoUrl: 'https://github.com'
    },
    {
      id: 2,
      title: 'Personal Finance App',
      description: 'A mobile-first web application that helps users track expenses, set budgets, and visualize spending habits.',
      image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['React', 'Redux', 'Firebase', 'Styled Components'],
      category: 'mobile',
      liveUrl: 'https://example.com',
      repoUrl: 'https://github.com'
    },
    {
      id: 3,
      title: 'Recipe Finder Platform',
      description: 'A web application for discovering recipes based on available ingredients, dietary restrictions, and nutritional goals.',
      image: 'https://images.unsplash.com/photo-1505935428862-770b6f24f629?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      category: 'web',
      liveUrl: 'https://example.com',
      repoUrl: 'https://github.com'
    },
    {
      id: 4,
      title: 'Weather Forecast App',
      description: 'A weather application that provides current conditions and forecasts for locations worldwide with a clean, intuitive interface.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['React', 'OpenWeather API', 'Geolocation', 'CSS Modules'],
      category: 'mobile',
      liveUrl: 'https://example.com',
      repoUrl: 'https://github.com'
    },
    {
      id: 5,
      title: 'Task Management System',
      description: 'A productivity tool for organizing tasks, setting priorities, and tracking progress with team collaboration features.',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['React', 'TypeScript', 'Firebase', 'Material UI'],
      category: 'web',
      liveUrl: 'https://example.com',
      repoUrl: 'https://github.com'
    },
    {
      id: 6,
      title: 'Photography Portfolio',
      description: 'A minimalist portfolio website for photographers to showcase their work with image galleries and contact form.',
      image: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['React', 'CSS Grid', 'Framer Motion', 'Netlify'],
      category: 'design',
      liveUrl: 'https://example.com',
      repoUrl: 'https://github.com'
    },
    {
      id: 7,
      title: 'News Aggregator',
      description: 'A web application that collects news from various sources and presents them in a unified, customizable interface.',
      image: 'https://images.unsplash.com/photo-1504465039710-0f49c0a47eb7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['React', 'News API', 'Context API', 'CSS Modules'],
      category: 'web',
      liveUrl: 'https://example.com',
      repoUrl: 'https://github.com'
    },
    {
      id: 8,
      title: 'Healthcare Mobile App',
      description: 'A mobile application for scheduling medical appointments, accessing health records, and communicating with healthcare providers.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['React Native', 'Redux', 'Firebase Auth', 'Expo'],
      category: 'mobile',
      liveUrl: 'https://example.com',
      repoUrl: 'https://github.com'
    },
    {
      id: 9,
      title: 'Real Estate Listings',
      description: 'A platform for browsing property listings with advanced search filters, interactive maps, and inquiry forms.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['React', 'Node.js', 'MongoDB', 'Google Maps API'],
      category: 'web',
      liveUrl: 'https://example.com',
      repoUrl: 'https://github.com'
    }
  ];

  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'web', label: 'Web Development' },
    { value: 'mobile', label: 'Mobile Apps' },
    { value: 'design', label: 'UI/UX Design' }
  ];

  const filteredProjects = activeCategory === 'all'
    ? allProjects
    : allProjects.filter(project => project.category === activeCategory);

  const handleCategoryChange = (category: string) => {
    setAnimateCards(false);
    setTimeout(() => {
      setActiveCategory(category);
      setAnimateCards(true);
    }, 300);
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    // Animation for elements when they come into view
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));

    return () => {
      animatedElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen pt-20">
      <section className="py-16 bg-gradient-to-b from-portfolio-purple/10 to-white">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-portfolio-dark animate-on-scroll">My Projects</h1>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8 animate-on-scroll">
            Explore my portfolio of web and mobile applications, each built with a focus on responsive design, accessibility, and modern technologies.
          </p>
        </div>
      </section>

      <section className="section-container">
        <div className="mb-12 flex flex-wrap justify-center gap-3 animate-on-scroll">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => handleCategoryChange(category.value)}
              className={cn(
                "px-5 py-2 rounded-full transition-all duration-300",
                activeCategory === category.value
                  ? "bg-portfolio-purple text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              )}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className={cn(
                "card group hover:translate-y-[-5px] transition-all duration-300",
                animateCards ? "opacity-100 transform-none" : "opacity-0 translate-y-4",
                "animate-on-scroll"
              )}
              style={{ 
                transitionDelay: `${animateCards ? index * 0.1 : 0}s`,
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="relative overflow-hidden h-52">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full flex justify-between items-center">
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white hover:text-portfolio-teal transition-colors"
                      aria-label="View live demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a 
                      href={project.repoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white hover:text-portfolio-teal transition-colors"
                      aria-label="View GitHub repository"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-portfolio-dark">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;

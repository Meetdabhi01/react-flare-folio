
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  repoUrl: string;
}

const Projects = () => {
  const featuredProjects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Dashboard',
      description: 'A responsive admin dashboard for e-commerce websites with analytics, product management, and order tracking.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js'],
      liveUrl: 'https://example.com',
      repoUrl: 'https://github.com'
    },
    {
      id: 2,
      title: 'Personal Finance App',
      description: 'A mobile-first web application that helps users track expenses, set budgets, and visualize spending habits.',
      image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['React', 'Redux', 'Firebase', 'Styled Components'],
      liveUrl: 'https://example.com',
      repoUrl: 'https://github.com'
    },
    {
      id: 3,
      title: 'Recipe Finder Platform',
      description: 'A web application for discovering recipes based on available ingredients, dietary restrictions, and nutritional goals.',
      image: 'https://images.unsplash.com/photo-1505935428862-770b6f24f629?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      liveUrl: 'https://example.com',
      repoUrl: 'https://github.com'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="section-container">
        <div className="flex justify-between items-end mb-12">
          <h2 className="section-title slide-in-left">Featured Projects</h2>
          <Link to="/projects" className="hidden md:flex items-center text-portfolio-purple hover:underline fade-in-fast">
            <span>View All Projects</span>
            <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="card hover-3d shine"
              style={{ transitionDelay: `${index * 0.1}s` }}
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
                <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
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
        
        <div className="mt-10 text-center md:hidden">
          <Link to="/projects" className="btn-outline inline-flex items-center">
            <span>View All Projects</span>
            <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;

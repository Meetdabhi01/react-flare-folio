
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-portfolio-purple">
          Portfolio<span className="text-portfolio-coral">.</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-1">
          <Link 
            to="/" 
            className={cn(
              "navbar-link",
              location.pathname === "/" && "text-portfolio-purple"
            )}
          >
            Home
          </Link>
          <Link 
            to="/projects" 
            className={cn(
              "navbar-link",
              location.pathname === "/projects" && "text-portfolio-purple"
            )}
          >
            Projects
          </Link>
          <Link 
            to="/contact" 
            className={cn(
              "navbar-link",
              location.pathname === "/contact" && "text-portfolio-purple"
            )}
          >
            Contact
          </Link>
          <a 
            href="/resume.pdf" 
            className="btn-outline ml-3"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </nav>
        
        {/* Mobile Menu Toggle */}
        <div 
          className={`hamburger-menu md:hidden ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div 
        className={cn(
          "md:hidden bg-white absolute top-full left-0 right-0 shadow-md transition-all duration-300 overflow-hidden",
          isMenuOpen ? "max-h-64" : "max-h-0"
        )}
      >
        <div className="flex flex-col p-4 space-y-3">
          <Link 
            to="/" 
            className={cn(
              "px-3 py-2 hover:bg-gray-100 rounded-md",
              location.pathname === "/" && "text-portfolio-purple font-medium"
            )}
          >
            Home
          </Link>
          <Link 
            to="/projects" 
            className={cn(
              "px-3 py-2 hover:bg-gray-100 rounded-md",
              location.pathname === "/projects" && "text-portfolio-purple font-medium"
            )}
          >
            Projects
          </Link>
          <Link 
            to="/contact" 
            className={cn(
              "px-3 py-2 hover:bg-gray-100 rounded-md",
              location.pathname === "/contact" && "text-portfolio-purple font-medium"
            )}
          >
            Contact
          </Link>
          <a 
            href="/resume.pdf" 
            className="btn-primary w-full text-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

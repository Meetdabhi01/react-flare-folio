
import { useState, useEffect } from 'react';
import { ArrowDown, Download } from 'lucide-react';
import { cn } from '@/lib/utils';

const Hero = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const rotatingTexts = ['Front-End Developer', 'UI/UX Enthusiast', 'Web Designer'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % rotatingTexts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center pt-16 relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Decorative elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 right-[5%] w-80 h-80 rounded-full bg-portfolio-teal opacity-5 animate-pulse"></div>
        <div className="absolute top-1/3 left-[10%] w-64 h-64 rounded-full bg-portfolio-purple opacity-5 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 right-[15%] w-56 h-56 rounded-full bg-portfolio-coral opacity-5 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-gradient-to-r from-portfolio-purple to-portfolio-teal opacity-5"></div>
      </div>
      
      <div className="section-container z-10 flex flex-col md:flex-row items-center">
        <div className="md:w-3/5 mb-10 md:mb-0">
          <div className="relative">
            <div className="absolute -left-6 -top-6 w-12 h-12 border-t-2 border-l-2 border-portfolio-teal opacity-70"></div>
            <p className="text-portfolio-teal font-medium mb-2 animate-fade-in">Hello, I'm</p>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-portfolio-dark animate-fade-in" style={{ animationDelay: '0.2s' }}>
              John Doe
            </h1>
            <div className="h-10 mb-6 relative overflow-hidden">
              <p 
                className="text-xl md:text-3xl font-medium text-portfolio-purple animate-fade-in absolute"
                style={{ animationDelay: '0.4s' }}
              >
                {rotatingTexts[currentTextIndex]}
              </p>
            </div>
            <div className="absolute -right-6 -bottom-6 w-12 h-12 border-b-2 border-r-2 border-portfolio-coral opacity-70"></div>
          </div>
          
          <p className="text-gray-600 mb-8 max-w-lg animate-fade-in leading-relaxed" style={{ animationDelay: '0.6s' }}>
            I build exceptional and accessible digital experiences for the web. Focused on creating clean, user-friendly interfaces with modern technologies.
          </p>
          
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <a href="/resume.pdf" className="relative overflow-hidden group btn-primary flex items-center space-x-2" target="_blank" rel="noopener noreferrer">
              <span className="relative z-10">Download CV</span>
              <Download size={16} className="relative z-10" />
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </a>
            <a href="#contact" className="relative overflow-hidden group btn-outline">
              <span className="relative z-10">Contact Me</span>
              <div className="absolute inset-0 bg-portfolio-purple opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </a>
          </div>
        </div>
        
        <div className="md:w-2/5 flex justify-center">
          <div className="relative w-64 h-64 md:w-96 md:h-96 animate-fade-in" style={{ animationDelay: '1s' }}>
            {/* Profile picture with decorative elements */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-portfolio-purple via-portfolio-teal to-portfolio-coral opacity-15 animate-pulse"></div>
            <div className="absolute inset-[15px] rounded-full border-2 border-dashed border-portfolio-teal opacity-30 animate-spin" style={{ animationDuration: '30s' }}></div>
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80" 
              alt="John Doe" 
              className="rounded-full h-full w-full object-cover border-4 border-white shadow-lg relative z-10"
            />
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-portfolio-coral rounded-full opacity-70 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-portfolio-teal rounded-full opacity-70 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-sm font-medium text-gray-500 hover:text-portfolio-purple transition-colors duration-300"
        aria-label="Scroll to About section"
      >
        <span className="mb-2 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-portfolio-purple after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:transition-all hover:after:w-full">Scroll Down</span>
        <ArrowDown className="animate-bounce" size={20} />
      </button>
    </section>
  );
};

export default Hero;

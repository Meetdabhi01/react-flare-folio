
import { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';
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
    <section className="min-h-screen flex items-center pt-16 relative overflow-hidden bg-gradient-to-br from-white to-gray-100">
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-20 right-[-10%] w-96 h-96 rounded-full bg-portfolio-purple opacity-5"></div>
        <div className="absolute bottom-20 left-[-10%] w-72 h-72 rounded-full bg-portfolio-teal opacity-5"></div>
      </div>
      
      <div className="section-container z-10 flex flex-col md:flex-row items-center">
        <div className="md:w-3/5 mb-10 md:mb-0">
          <p className="text-portfolio-teal font-medium mb-2 animate-fade-in">Hello, I'm</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-portfolio-dark animate-fade-in" style={{ animationDelay: '0.2s' }}>
            John Doe
          </h1>
          <div className="h-8 mb-6">
            <p className="text-xl md:text-2xl font-medium text-portfolio-purple animate-fade-in" style={{ animationDelay: '0.4s' }}>
              {rotatingTexts[currentTextIndex]}
            </p>
          </div>
          <p className="text-gray-600 mb-8 max-w-lg animate-fade-in" style={{ animationDelay: '0.6s' }}>
            I build exceptional and accessible digital experiences for the web. Focused on creating clean, user-friendly interfaces with modern technologies.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <a href="/resume.pdf" className="btn-primary flex items-center space-x-2" target="_blank" rel="noopener noreferrer">
              <span>Download CV</span>
              <Download size={16} />
            </a>
            <a href="#contact" className="btn-outline">Contact Me</a>
          </div>
        </div>
        
        <div className="md:w-2/5 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 animate-fade-in" style={{ animationDelay: '1s' }}>
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-portfolio-purple to-portfolio-teal opacity-20 animate-pulse"></div>
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80" 
              alt="John Doe" 
              className="rounded-full h-full w-full object-cover border-4 border-white shadow-lg"
            />
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-sm font-medium text-gray-500 hover:text-portfolio-purple transition-colors duration-300"
        aria-label="Scroll to About section"
      >
        <span>Scroll Down</span>
        <ArrowDown className="mt-2 animate-bounce" size={20} />
      </button>
    </section>
  );
};

export default Hero;

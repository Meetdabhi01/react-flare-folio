
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowRight, Download } from 'lucide-react';
import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import Skills from '@/components/home/Skills';
import Projects from '@/components/home/Projects';
import Contact from '@/components/home/Contact';

const Home = () => {
  useEffect(() => {
    // Enhanced animation for elements when they come into view
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add the is-visible class to trigger animations
          entry.target.classList.add('is-visible');
          
          // For text-reveal animations, add is-visible to each letter with delay
          if (entry.target.classList.contains('text-reveal')) {
            const spans = entry.target.querySelectorAll('span');
            spans.forEach((span, index) => {
              setTimeout(() => {
                span.style.transitionDelay = `${index * 0.03}s`;
                span.classList.add('is-visible');
              }, 50);
            });
          }
          
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe elements with different animation classes
    const animationClasses = [
      '.animate-on-scroll', 
      '.slide-in-left', 
      '.slide-in-right',
      '.scale-in',
      '.bounce-in',
      '.fade-in-fast',
      '.text-reveal'
    ];
    
    animationClasses.forEach(className => {
      const elements = document.querySelectorAll(className);
      elements.forEach(el => observer.observe(el));
    });

    // Add hover effect to 3D cards
    const cards = document.querySelectorAll('.hover-3d');
    cards.forEach(card => {
      // Fix: Use MouseEvent type instead of Event for proper mouse coordinates
      card.addEventListener('mousemove', (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        // Fix: Ensure card is typed as HTMLElement to access style property
        const htmlCard = card as HTMLElement;
        htmlCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
      });
      
      card.addEventListener('mouseleave', () => {
        // Fix: Ensure card is typed as HTMLElement to access style property
        const htmlCard = card as HTMLElement;
        htmlCard.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
      });
    });

    return () => {
      // Clean up observers and event listeners
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;

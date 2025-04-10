
import { cn } from '@/lib/utils';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-2/5 animate-on-scroll">
            <div className="relative">
              <div className="w-full h-full absolute -left-4 -top-4 border-2 border-portfolio-teal rounded-lg"></div>
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Developer workspace" 
                className="w-full h-auto rounded-lg shadow-lg relative z-10"
              />
            </div>
          </div>
          
          <div className="md:w-3/5">
            <h2 className="section-title animate-on-scroll">About Me</h2>
            <p className="text-gray-600 mb-6 animate-on-scroll">
              I'm a passionate front-end developer with a keen eye for design and user experience. 
              With over 4 years of experience, I specialize in building responsive, accessible, 
              and performant web applications using modern technologies.
            </p>
            <p className="text-gray-600 mb-6 animate-on-scroll">
              My journey in web development started when I was in college, and I've been in love with 
              creating things for the web ever since. I enjoy solving complex problems and turning ideas 
              into reality with clean and efficient code.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8 animate-on-scroll">
              <div>
                <h3 className="text-lg font-semibold text-portfolio-purple mb-1">Name</h3>
                <p className="text-gray-600">John Doe</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-portfolio-purple mb-1">Email</h3>
                <p className="text-gray-600">contact@example.com</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-portfolio-purple mb-1">Location</h3>
                <p className="text-gray-600">New York, USA</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-portfolio-purple mb-1">Available for</h3>
                <p className="text-gray-600">Freelance & Full-time</p>
              </div>
            </div>
            
            <a href="/resume.pdf" className="btn-primary animate-on-scroll" target="_blank" rel="noopener noreferrer">
              View Full Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

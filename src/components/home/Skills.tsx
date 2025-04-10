
import { cn } from '@/lib/utils';

interface Skill {
  name: string;
  percentage: number;
  delay: string;
}

const Skills = () => {
  const frontendSkills: Skill[] = [
    { name: 'HTML & CSS', percentage: 95, delay: 'delay-100' },
    { name: 'JavaScript', percentage: 90, delay: 'delay-200' },
    { name: 'React', percentage: 85, delay: 'delay-300' },
    { name: 'TypeScript', percentage: 80, delay: 'delay-400' },
    { name: 'Tailwind CSS', percentage: 90, delay: 'delay-500' },
  ];

  const designSkills: Skill[] = [
    { name: 'UI/UX Design', percentage: 85, delay: 'delay-100' },
    { name: 'Figma', percentage: 80, delay: 'delay-200' },
    { name: 'Responsive Design', percentage: 90, delay: 'delay-300' },
    { name: 'Adobe XD', percentage: 75, delay: 'delay-400' },
    { name: 'Wireframing', percentage: 85, delay: 'delay-500' },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="section-container">
        <h2 className="section-title text-center mb-16 slide-in-left">My Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="slide-in-left stagger-1">
            <h3 className="text-xl font-semibold text-portfolio-purple mb-6">Frontend Development</h3>
            <div className="space-y-5">
              {frontendSkills.map((skill, index) => (
                <div key={index} className="fade-in-fast" style={{ transitionDelay: `${index * 0.1}s` }}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-gray-500">{skill.percentage}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className={cn("skill-progress", skill.delay)}
                      style={{ 
                        "--progress-width": `${skill.percentage}%` 
                      } as React.CSSProperties}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="slide-in-right stagger-2">
            <h3 className="text-xl font-semibold text-portfolio-teal mb-6">Design Skills</h3>
            <div className="space-y-5">
              {designSkills.map((skill, index) => (
                <div key={index} className="fade-in-fast" style={{ transitionDelay: `${index * 0.1}s` }}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-gray-500">{skill.percentage}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className={cn("skill-progress bg-portfolio-teal", skill.delay)}
                      style={{ 
                        "--progress-width": `${skill.percentage}%` 
                      } as React.CSSProperties}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 bounce-in stagger-3">
          <div className="bg-white p-4 rounded-lg shadow-sm text-center hover-3d">
            <div className="text-3xl font-bold text-portfolio-purple">4+</div>
            <div className="text-gray-600 text-sm">Years Experience</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm text-center hover-3d">
            <div className="text-3xl font-bold text-portfolio-teal">50+</div>
            <div className="text-gray-600 text-sm">Projects Completed</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm text-center hover-3d">
            <div className="text-3xl font-bold text-portfolio-coral">30+</div>
            <div className="text-gray-600 text-sm">Happy Clients</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm text-center hover-3d">
            <div className="text-3xl font-bold text-portfolio-purple">15+</div>
            <div className="text-gray-600 text-sm">Awards Won</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

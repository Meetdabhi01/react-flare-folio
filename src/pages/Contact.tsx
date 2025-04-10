
import { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  // Validate form on input change if field has been touched
  useEffect(() => {
    if (Object.keys(touched).length > 0) {
      validateForm();
    }
  }, [formData, touched]);
  
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
  
  const validateForm = () => {
    const newErrors: FormErrors = {};
    
    if (touched.name && !formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (touched.email) {
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address';
      }
    }
    
    if (touched.subject && !formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (touched.message && !formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target;
    setTouched({
      ...touched,
      [name]: true
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mark all fields as touched to show validation errors
    setTouched({
      name: true,
      email: true,
      subject: true,
      message: true
    });
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        console.log('Form submitted', formData);
        setIsSubmitting(false);
        setSubmitSuccess(true);
        
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        
        setTouched({});
        
        // Hide success message after a few seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      }, 1500);
    }
  };
  
  return (
    <div className="min-h-screen pt-20">
      <section className="py-16 bg-gradient-to-b from-portfolio-purple/10 to-white">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-portfolio-dark animate-on-scroll">Get In Touch</h1>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8 animate-on-scroll">
            Feel free to reach out if you have any questions, project ideas, or just want to connect. I'm always open to new opportunities and collaborations.
          </p>
        </div>
      </section>
      
      <section className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-on-scroll">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-semibold text-portfolio-dark mb-6">Contact Information</h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-portfolio-purple/10 p-3 rounded-full mr-4">
                    <Mail className="text-portfolio-purple" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-portfolio-dark">Email</h4>
                    <p className="text-gray-600">contact@example.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-portfolio-purple/10 p-3 rounded-full mr-4">
                    <Phone className="text-portfolio-purple" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-portfolio-dark">Phone</h4>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-portfolio-purple/10 p-3 rounded-full mr-4">
                    <MapPin className="text-portfolio-purple" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-portfolio-dark">Location</h4>
                    <p className="text-gray-600">New York, USA</p>
                  </div>
                </div>
              </div>
              
              <h3 className="font-semibold text-portfolio-dark mb-4">Connect With Me</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-portfolio-purple/10 p-3 rounded-full text-portfolio-purple hover:bg-portfolio-purple hover:text-white transition-colors duration-300"
                  aria-label="GitHub"
                >
                  <Github size={24} />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-portfolio-purple/10 p-3 rounded-full text-portfolio-purple hover:bg-portfolio-purple hover:text-white transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-portfolio-purple/10 p-3 rounded-full text-portfolio-purple hover:bg-portfolio-purple hover:text-white transition-colors duration-300"
                  aria-label="Twitter"
                >
                  <Twitter size={24} />
                </a>
              </div>
              
              <div className="mt-8">
                <h3 className="font-semibold text-portfolio-dark mb-4">Download Resume</h3>
                <a 
                  href="/resume.pdf" 
                  className="btn-primary inline-flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Download CV</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="animate-on-scroll">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-semibold text-portfolio-dark mb-6">Send Me a Message</h2>
              
              {submitSuccess ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-portfolio-dark mb-3">Thank You!</h3>
                  <p className="text-gray-600 mb-6">Your message has been sent successfully.</p>
                  <p className="text-gray-600">I'll get back to you as soon as possible.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={cn(
                        "form-input",
                        errors.name && "border-red-500 focus:ring-red-500"
                      )}
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                    )}
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={cn(
                        "form-input",
                        errors.email && "border-red-500 focus:ring-red-500"
                      )}
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                    )}
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={cn(
                        "form-input",
                        errors.subject && "border-red-500 focus:ring-red-500"
                      )}
                      placeholder="Project Inquiry"
                    />
                    {errors.subject && (
                      <p className="mt-1 text-sm text-red-500">{errors.subject}</p>
                    )}
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      rows={5}
                      className={cn(
                        "form-input resize-none",
                        errors.message && "border-red-500 focus:ring-red-500"
                      )}
                      placeholder="Hello, I'd like to discuss a project..."
                    ></textarea>
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                    )}
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={cn(
                      "btn-primary w-full",
                      isSubmitting && "opacity-70 cursor-not-allowed"
                    )}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending Message...
                      </div>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

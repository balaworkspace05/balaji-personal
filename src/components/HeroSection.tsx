import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, MessageCircle, Download, ChevronDown } from 'lucide-react';
import profileImage from '@/assets/profile-image.jpg';
import heroBg from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    'AI Enthusiast',
    'Cybersecurity Expert',
    'Cloud Developer', 
    'Product Thinker',
    'Problem Solver',
    'Entrepreneurial Mind'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-background/80"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Dynamic refresher section */}
          <div className="flex justify-center gap-4 mb-8">
            <Button 
              variant="outline" 
              size="sm" 
              className="glass hover-scale"
              onClick={() => window.open('https://github.com', '_blank')}
            >
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className="glass hover-scale"
              onClick={() => window.open('https://linkedin.com', '_blank')}
            >
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className="glass hover-scale"
              onClick={() => window.open('https://wa.me/your-number', '_blank')}
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
          </div>

          {/* Profile Image */}
          <div className="mb-8">
            <img 
              src={profileImage} 
              alt="Balaji Mali"
              className="w-32 h-32 rounded-full mx-auto glow-primary hover-scale border-4 border-white shadow-2xl"
            />
          </div>

          {/* Main Headlines */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Hi, I'm Balaji 👋
          </h1>
          
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-8">
            B.Sc. Data Science Student @ RV University
          </h2>

          {/* Typewriter Animation */}
          <div className="mb-12">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">
              I'm passionate about
            </h3>
            <div className="h-12 flex items-center justify-center">
              <span className="text-3xl md:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                {roles[currentRole]}
              </span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:scale-105 transition-transform duration-300 glow-primary"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="glass hover-scale"
              onClick={() => scrollToSection('contact')}
            >
              Let's Connect
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-6 h-6 text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
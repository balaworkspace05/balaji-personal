import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Download, ChevronDown } from 'lucide-react';
import profileImage from '@/assets/profile-image.jpg';
import heroBgImproved from '@/assets/hero-bg-improved.jpg';

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
    >
      {/* Enhanced Background with Gradient Overlay */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url(${heroBgImproved})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>
      
      {/* Gradient Overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.1) 0%, rgba(59, 130, 246, 0.1) 50%, rgba(168, 85, 247, 0.1) 100%)'
        }}
      ></div>
      
      <div className="absolute inset-0 bg-background/70"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Headlines - Recentered and Enhanced */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            Hi, I'm Balaji 👋
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-12 font-medium">
            B.Sc. Data Science Student @ RV University
          </h2>

          {/* Enhanced Typewriter Animation */}
          <div className="mb-16">
            <h3 className="text-3xl md:text-4xl font-semibold mb-6">
              I'm passionate about
            </h3>
            <div className="h-16 flex items-center justify-center">
              <span className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                {roles[currentRole]}
              </span>
            </div>
          </div>

          {/* Enhanced CTA Buttons - Larger and Better Centered */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:scale-105 transition-transform duration-300 glow-primary text-lg px-8 py-4 h-auto"
            >
              <Download className="w-6 h-6 mr-3" />
              Download Resume
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="glass hover-scale text-lg px-8 py-4 h-auto border-primary/30 hover:border-primary/50"
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
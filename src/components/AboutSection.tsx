import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Cloud, Database, Shield, Lightbulb, TrendingUp, Cpu } from 'lucide-react';

const AboutSection = () => {
  const certifications = [
    { name: 'AWS Cloud', icon: Cloud, color: 'bg-orange-500' },
    { name: 'Tableau (Infosys Springboard)', icon: Database, color: 'bg-blue-500' },
    { name: 'IBM AI Fundamentals', icon: Cpu, color: 'bg-blue-600' },
    { name: 'DevOps', icon: TrendingUp, color: 'bg-green-500' },
    { name: 'Generative AI', icon: Lightbulb, color: 'bg-purple-500' },
    { name: 'Cybersecurity', icon: Shield, color: 'bg-red-500' },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* About Content */}
            <div className="space-y-6">
              <div className="glass p-8 rounded-2xl">
                <p className="text-lg leading-relaxed">
                  I blend technical skills in <span className="text-primary font-semibold">AI, ML, and Cybersecurity</span> with a 
                  <span className="text-accent font-semibold"> product management mindset</span> to create practical, 
                  real-world solutions that make a difference.
                </p>
              </div>
              
              <Card className="p-6 glass border-0">
                <h3 className="text-xl font-semibold mb-4 text-primary">
                  What drives me?
                </h3>
                <p className="text-muted-foreground">
                  I'm passionate about leveraging cutting-edge technology to solve complex problems and 
                  create innovative products that positively impact people's lives.
                </p>
              </Card>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-center">
                Certifications & Skills
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <Card 
                    key={index}
                    className="p-4 glass border-0 hover-scale skill-chip text-center"
                  >
                    <div className={`w-12 h-12 ${cert.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                      <cert.icon className="w-6 h-6 text-white" />
                    </div>
                    <Badge 
                      variant="secondary" 
                      className="text-xs font-medium"
                    >
                      {cert.name}
                    </Badge>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
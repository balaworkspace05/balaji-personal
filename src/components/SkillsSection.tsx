import { Badge } from '@/components/ui/badge';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Settings, 
  Database, 
  Code, 
  Users, 
  TrendingUp,
  Cpu,
  GitBranch
} from 'lucide-react';

const SkillsSection = () => {
  const skills = [
    { name: 'Artificial Intelligence', icon: Brain, color: 'hover:glow-primary' },
    { name: 'Machine Learning', icon: Cpu, color: 'hover:glow-accent' },
    { name: 'Cybersecurity', icon: Shield, color: 'hover:glow-primary' },
    { name: 'Cloud Computing', icon: Cloud, color: 'hover:glow-accent' },
    { name: 'DevOps', icon: Settings, color: 'hover:glow-primary' },
    { name: 'Data Science', icon: Database, color: 'hover:glow-accent' },
    { name: 'Python', icon: Code, color: 'hover:glow-primary' },
    { name: 'Product Management', icon: Users, color: 'hover:glow-accent' },
    { name: 'Tableau', icon: TrendingUp, color: 'hover:glow-primary' },
    { name: 'Git & GitHub', icon: GitBranch, color: 'hover:glow-accent' }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            Skills & Technologies
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`skill-chip glass p-6 rounded-2xl text-center border-0 ${skill.color}`}
              >
                <skill.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                <Badge 
                  variant="secondary" 
                  className="text-xs font-medium bg-white/50"
                >
                  {skill.name}
                </Badge>
              </div>
            ))}
          </div>

          {/* USP Section */}
          <div className="relative">
            <div className="glass p-12 rounded-3xl border-0 glow-primary">
              <div className="absolute inset-0 bg-gradient-primary opacity-5 rounded-3xl"></div>
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
                  "Where Data Meets Product Thinking"
                </h3>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Turning Insights into Impactful Solutions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
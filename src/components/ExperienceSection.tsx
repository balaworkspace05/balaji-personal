import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Users, Shield, Code, Lightbulb } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: 'Product Manager Intern',
      company: 'ThriveTogether',
      duration: '2025',
      location: 'Remote',
      icon: Users,
      description: 'Leading product strategy and development initiatives to enhance user experience and drive business growth.',
      skills: ['Product Strategy', 'User Research', 'Agile Development', 'Market Analysis']
    },
    {
      title: 'AI & Cybersecurity Intern',
      company: 'Dhee Center for AI & DS',
      duration: '2024',
      location: 'Bangalore',
      icon: Shield,
      description: 'Developed AI-powered cybersecurity solutions and conducted research on machine learning applications in threat detection.',
      skills: ['Machine Learning', 'Cybersecurity', 'Python', 'Data Analysis']
    }
  ];

  const projects = [
    {
      title: 'AI-Powered Threat Detection System',
      description: 'Built a machine learning model to detect and classify cybersecurity threats in real-time.',
      tags: ['Python', 'TensorFlow', 'Cybersecurity', 'ML']
    },
    {
      title: 'Data Visualization Dashboard',
      description: 'Created interactive dashboards using Tableau for business intelligence and data insights.',
      tags: ['Tableau', 'Data Science', 'Analytics', 'BI']
    },
    {
      title: 'Hackathon Winner - Smart City Solution',
      description: 'Developed an IoT-based smart city application that won first place in university hackathon.',
      tags: ['IoT', 'React', 'Node.js', 'Innovation']
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Experience & Projects
          </h2>

          {/* Experience Timeline */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-center">
              Professional Experience
            </h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <Card key={index} className="p-8 glass border-0 hover-scale">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center glow-primary">
                        <exp.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    
                    <div className="flex-grow">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-semibold text-primary">
                            {exp.title}
                          </h4>
                          <p className="text-lg font-medium">
                            {exp.company}
                          </p>
                        </div>
                        
                        <div className="flex flex-col md:items-end gap-2 mt-2 md:mt-0">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.duration}</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-4">
                        {exp.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center">
              Featured Projects
            </h3>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {projects.map((project, index) => (
                <Card key={index} className="p-6 glass border-0 hover-scale">
                  <div className="mb-4">
                    <Code className="w-8 h-8 text-accent mb-3" />
                    <h4 className="text-lg font-semibold mb-2">
                      {project.title}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
            
            <Card className="p-6 glass border-0 text-center">
              <Lightbulb className="w-8 h-8 text-accent mx-auto mb-4" />
              <p className="text-muted-foreground">
                Actively building products and participating in hackathons to solve real-world problems and upskill continuously.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
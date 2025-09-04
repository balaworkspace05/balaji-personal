import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Github, Linkedin, Mail, MessageCircle, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend service
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/your-profile',
      color: 'hover:text-blue-500'
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/your-username',
      color: 'hover:text-gray-600'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:your.email@gmail.com',
      color: 'hover:text-red-500'
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      url: 'https://wa.me/your-number',
      color: 'hover:text-green-500'
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Let's Connect
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8 glass border-0">
              <h3 className="text-2xl font-semibold mb-6 text-primary">
                Send me a message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="glass border-primary/20"
                  />
                </div>
                
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="glass border-primary/20"
                  />
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="glass border-primary/20"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-primary hover:scale-105 transition-transform duration-300"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>

            {/* Contact Info & Social Links */}
            <div className="space-y-8">
              <Card className="p-8 glass border-0">
                <h3 className="text-2xl font-semibold mb-6 text-primary">
                  Get in touch
                </h3>
                <p className="text-muted-foreground mb-6">
                  I'm always open to discussing new opportunities, innovative projects, 
                  or just having a conversation about technology and product development.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-accent" />
                    <span>balaji.mali@email.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MessageCircle className="w-5 h-5 text-accent" />
                    <span>Available on WhatsApp</span>
                  </div>
                </div>
              </Card>

              <Card className="p-8 glass border-0">
                <h3 className="text-xl font-semibold mb-6 text-primary">
                  Connect with me
                </h3>
                
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((link, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      onClick={() => window.open(link.url, '_blank')}
                      className={`glass hover-scale justify-start ${link.color} transition-colors duration-300`}
                    >
                      <link.icon className="w-4 h-4 mr-2" />
                      {link.name}
                    </Button>
                  ))}
                </div>
              </Card>
            </div>
          </div>
          
          {/* Footer */}
          <div className="text-center mt-16 pt-8 border-t border-border">
            <p className="text-muted-foreground">
              © 2025 Balaji Mali | Built with 💜 using React & TypeScript
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
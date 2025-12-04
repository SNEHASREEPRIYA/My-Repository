import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Mail, MapPin, Phone, Send, Linkedin, Github, ExternalLink, Download } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message sent successfully!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Sneha_Sree_Priya_Resume.pdf';
    link.click();
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sneha.marre@gmail.com",
      href: "mailto:sneha.marre@gmail.com",
      color: "primary"
    },
    {
      icon: Phone,
      label: "Mobile",
      value: "+91 8977869799",
      href: "tel:+918977869799",
      color: "secondary"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Andhra Pradesh, India",
      href: "#",
      color: "primary"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/sneha-sree-priya-marre-5a3300257/",
      color: "primary"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/SNEHASREEPRIYA",
      color: "secondary"
    },
    {
      icon: ExternalLink,
      label: "LeetCode",
      href: "https://leetcode.com/u/SNEHASREEPRIYA/",
      color: "primary"
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl font-bold gradient-text mb-4">Let's Connect</h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a conversation about technology and innovation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8 slide-up">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Whether you have a project in mind, want to discuss opportunities, or simply want to connect,
                I'd love to hear from you. Feel free to reach out through any of the channels below.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <Card key={index} className={`glass-card border-${info.color}/20 hover:border-${info.color}/40 smooth-transition group`}>
                    <CardContent className="p-4">
                      <a href={info.href} className="flex items-center space-x-4 group-hover:text-primary smooth-transition">
                        <div className={`p-3 bg-${info.color}/10 rounded-lg ${info.color === 'primary' ? 'neon-glow' : 'purple-glow'} group-hover:scale-110 smooth-transition`}>
                          <IconComponent className={`h-5 w-5 text-${info.color}`} />
                        </div>
                        <div>
                          <p className="font-semibold">{info.label}</p>
                          <p className="text-muted-foreground">{info.value}</p>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect on Social</h4>
              <div className="flex gap-4">
                {socialLinks.map((link, index) => {
                  const IconComponent = link.icon;
                  return (
                    <Button
                      key={index}
                      variant="outline"
                      size="lg"
                      asChild
                      className={`border-${link.color}/30 hover:bg-${link.color}/10 hover:border-${link.color} smooth-transition group`}
                    >
                      <a href={link.href} target="_blank" rel="noopener noreferrer">
                        <IconComponent className={`h-5 w-5 text-${link.color} group-hover:scale-110 smooth-transition`} />
                        <span className="ml-2">{link.label}</span>
                      </a>
                    </Button>
                  );
                })}
              </div>
            </div>

            {/* Resume Download */}
            <Card className="glass-card border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Download Resume</h4>
                    <p className="text-muted-foreground text-sm">Get a comprehensive overview of my experience and skills</p>
                  </div>
                  <Button
                    onClick={handleDownloadResume}
                    className="bg-primary hover:bg-primary/90 neon-glow smooth-transition"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Resume
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="glass-card border-primary/20 slide-up" style={{ animationDelay: '0.2s' }}>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    required
                    className="bg-muted/20 border-border/50 focus:border-primary smooth-transition"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    required
                    className="bg-muted/20 border-border/50 focus:border-primary smooth-transition"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or just say hello..."
                    rows={6}
                    required
                    className="bg-muted/20 border-border/50 focus:border-primary smooth-transition resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 neon-glow smooth-transition group"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2 group-hover:translate-x-1 smooth-transition" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
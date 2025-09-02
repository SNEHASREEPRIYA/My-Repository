import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Github, ExternalLink, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Mail,
      href: "mailto:sneha.marre@gmail.com",
      label: "Email"
    },
    {
      icon: Linkedin,
      href: "#",
      label: "LinkedIn"
    },
    {
      icon: Github,
      href: "#",
      label: "GitHub"
    },
    {
      icon: ExternalLink,
      href: "#",
      label: "LeetCode"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-darker-surface border-t border-border/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text">Sneha Sree Priya</h3>
            <p className="text-muted-foreground leading-relaxed">
              Aspiring Software Developer passionate about creating innovative solutions 
              through technology, data science, and continuous learning.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {[
                { label: 'Home', id: 'hero' },
                { label: 'About', id: 'about' },
                { label: 'Skills', id: 'skills' },
                { label: 'Projects', id: 'projects' },
                { label: 'Education', id: 'education' },
                { label: 'Hackathons', id: 'hackathons' },
                { label: 'Achievements', id: 'achievements' },
                { label: 'Contact', id: 'contact' }
              ].map((link) => (
                <Button
                  key={link.id}
                  variant="ghost"
                  size="sm"
                  onClick={() => scrollToSection(link.id)}
                  className="justify-start hover:text-primary smooth-transition"
                >
                  {link.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Connect Section */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Let's Connect</h4>
            <p className="text-muted-foreground text-sm mb-4">
              Follow me on social media or reach out directly
            </p>
            <div className="flex gap-3">
              {socialLinks.map((link, index) => {
                const IconComponent = link.icon;
                return (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    asChild
                    className="border-primary/30 hover:bg-primary/10 hover:border-primary smooth-transition group"
                  >
                    <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                      <IconComponent className="h-4 w-4 group-hover:scale-110 smooth-transition" />
                    </a>
                  </Button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-primary mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-1 text-muted-foreground text-sm">
            <span>© {currentYear} Sneha Sree Priya. All Rights Reserved.</span>
            <span className="hidden md:inline">•</span>
            <span className="hidden md:inline flex items-center">
              Made with <Heart className="h-3 w-3 mx-1 text-red-500" fill="currentColor" /> and lots of ☕
            </span>
          </div>

          {/* Back to Top Button */}
          <Button
            onClick={scrollToTop}
            variant="outline"
            size="sm"
            className="border-primary/30 hover:bg-primary/10 hover:border-primary smooth-transition group"
          >
            <ArrowUp className="h-4 w-4 mr-2 group-hover:-translate-y-1 smooth-transition" />
            Back to Top
          </Button>
        </div>

        {/* Background Effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl"></div>
      </div>
    </footer>
  );
};

export default Footer;
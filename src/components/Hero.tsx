import { Button } from '@/components/ui/button';
import { Download, Mail, Linkedin, Github, ExternalLink } from 'lucide-react';
import profilePicture from '@/assets/profile-picture.jpg';

const Hero = () => {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Sneha_Sree_Priya_Resume.pdf';
    link.click();
  };

  const handleContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 hero-gradient opacity-50"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-neon-blue/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-neon-purple/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Picture */}
          <div className="flex justify-center lg:justify-end order-2 lg:order-1">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-30 scale-110"></div>
              <img
                src={profilePicture}
                alt="Sneha Sree Priya"
                className="relative w-80 h-80 rounded-full object-cover shadow-card border-4 border-primary/30"
              />
            </div>
          </div>

          {/* Hero Content */}
          <div className="text-center lg:text-left order-1 lg:order-2 space-y-6">
            <div className="space-y-4 fade-in">
              <h1 className="text-5xl lg:text-6xl font-bold">
                <span className="gradient-text">Sneha Sree Priya</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl text-muted-foreground font-medium">
                Aspiring Software Developer | Data Science Enthusiast
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl italic">
                "Like an unsupervised learning model, I learned from experiences and built my own identity."
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start slide-up">
              <Button
                onClick={handleDownloadResume}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground neon-glow smooth-transition group"
              >
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                View Resume
              </Button>
              <Button
                onClick={handleContact}
                size="lg"
                variant="outline"
                className="border-primary/50 text-primary hover:bg-primary/10 smooth-transition"
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start pt-4">
              <Button
                variant="ghost"
                size="sm"
                asChild
                className="hover:bg-primary/10 hover:text-primary smooth-transition"
              >
                <a href="mailto:sneha.marre@gmail.com" target="_blank" rel="noopener noreferrer">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                asChild
                className="hover:bg-primary/10 hover:text-primary smooth-transition"
              >
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                asChild
                className="hover:bg-primary/10 hover:text-primary smooth-transition"
              >
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                asChild
                className="hover:bg-primary/10 hover:text-primary smooth-transition"
              >
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
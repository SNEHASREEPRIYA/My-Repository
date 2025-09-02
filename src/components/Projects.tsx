import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, TrendingUp, ShoppingCart, Eye, Globe, Shield } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Stock Price Prediction & Forecasting",
      description: "Advanced machine learning model using ARIMA and SARIMA statistical models to predict future stock trends with 100-day forecasting capability and comprehensive data visualization.",
      technologies: ["Python", "ARIMA", "SARIMA", "Pandas", "Matplotlib", "NumPy", "Statistical Modeling"],
      icon: TrendingUp,
      color: "primary",
      category: "Data Science",
      github: "#",
      demo: "#",
      features: ["Time Series Analysis", "100-day Forecasting", "Interactive Visualizations", "Statistical Validation"]
    },
    {
      title: "Online Retail Recommendation System",
      description: "Intelligent e-commerce recommendation engine leveraging machine learning algorithms to provide personalized product suggestions based on user behavior and preferences.",
      technologies: ["Python", "Scikit-learn", "Pandas", "Flask", "Machine Learning", "Collaborative Filtering"],
      icon: ShoppingCart,
      color: "secondary",
      category: "Machine Learning",
      github: "#",
      demo: "#",
      features: ["Collaborative Filtering", "Content-Based Filtering", "Real-time Recommendations", "User Behavior Analytics"]
    },
    {
      title: "E-commerce Website Platform",
      description: "Full-stack e-commerce solution with complete user authentication, shopping cart functionality, payment integration, and responsive design for optimal user experience.",
      technologies: ["React.js", "Node.js", "JavaScript", "HTML/CSS", "MongoDB", "Express.js"],
      icon: Globe,
      color: "primary",
      category: "Web Development",
      github: "#",
      demo: "#",
      features: ["User Authentication", "Shopping Cart", "Payment Gateway", "Responsive Design"]
    },
    {
      title: "Color Detection Tool",
      description: "Python-based computer vision application using OpenCV to detect and identify colors at pixel level in images with real-time processing capabilities.",
      technologies: ["Python", "OpenCV", "Computer Vision", "Image Processing", "NumPy"],
      icon: Eye,
      color: "secondary",
      category: "Computer Vision",
      github: "#",
      demo: "#",
      features: ["Real-time Detection", "Pixel-level Accuracy", "Color Space Conversion", "Batch Processing"]
    },
    {
      title: "Website Blocker Tool",
      description: "Productivity enhancement tool designed to block distracting websites during work hours, helping users maintain focus and improve time management.",
      technologies: ["Python", "System Programming", "GUI Development", "Process Management"],
      icon: Shield,
      color: "primary",
      category: "System Tools",
      github: "#",
      demo: "#",
      features: ["Website Blocking", "Time Management", "Custom Block Lists", "Productivity Analytics"]
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl font-bold gradient-text mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            A showcase of innovative projects demonstrating expertise in software development, data science, and problem-solving.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card key={index} className={`glass-card border-${project.color}/20 hover:border-${project.color}/40 smooth-transition group hover:scale-105 slide-up`} style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 h-full flex flex-col">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 bg-${project.color}/10 rounded-lg ${project.color === 'primary' ? 'neon-glow' : 'purple-glow'} group-hover:scale-110 smooth-transition`}>
                      <IconComponent className={`h-6 w-6 text-${project.color}`} />
                    </div>
                    <Badge variant="outline" className={`border-${project.color}/30 text-${project.color}`}>
                      {project.category}
                    </Badge>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary smooth-transition">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Key Features */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold mb-2 text-muted-foreground">Key Features:</h4>
                      <div className="grid grid-cols-2 gap-1 text-sm">
                        {project.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center">
                            <div className={`w-1 h-1 bg-${project.color} rounded-full mr-2`}></div>
                            <span className="text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 4).map((tech, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs bg-muted/50">
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 4 && (
                          <Badge variant="secondary" className="text-xs bg-muted/50">
                            +{project.technologies.length - 4} more
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3 pt-4 border-t border-border/50">
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className={`flex-1 border-${project.color}/30 hover:bg-${project.color}/10 smooth-transition`}
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      asChild
                      className={`flex-1 bg-${project.color} hover:bg-${project.color}/90 smooth-transition`}
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 slide-up">
          <p className="text-muted-foreground mb-6">
            Interested in seeing more projects or collaborating?
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 neon-glow smooth-transition"
          >
            <a href="#contact">
              Let's Connect
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
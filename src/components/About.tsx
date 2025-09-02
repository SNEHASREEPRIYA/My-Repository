import { Card, CardContent } from '@/components/ui/card';
import { Code, Brain, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl font-bold gradient-text mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <div className="space-y-6 slide-up">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am <span className="text-primary font-semibold">Sneha Sree Priya</span>, an aspiring software developer passionate about 
              <span className="text-secondary font-semibold"> Data Science</span>, 
              <span className="text-primary font-semibold"> Software Development</span>, and solving complex problems through innovative technology.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With a strong foundation in algorithms, web development, and data-driven projects, I constantly strive to learn, build, and create solutions that make an impact. My journey in technology is driven by curiosity and the desire to transform ideas into reality.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently pursuing my B.Tech in Artificial Intelligence & Data Science with a CGPA of 9.45, I combine theoretical knowledge with practical implementation to deliver meaningful results.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid gap-6 slide-up">
            <Card className="glass-card border-primary/20 hover:border-primary/40 smooth-transition group">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg neon-glow group-hover:scale-110 smooth-transition">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Software Development</h3>
                    <p className="text-muted-foreground">Building robust applications with modern technologies and best practices.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card border-secondary/20 hover:border-secondary/40 smooth-transition group">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-secondary/10 rounded-lg purple-glow group-hover:scale-110 smooth-transition">
                    <Brain className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Data Science & ML</h3>
                    <p className="text-muted-foreground">Leveraging data insights to create predictive models and intelligent solutions.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card border-primary/20 hover:border-primary/40 smooth-transition group">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg neon-glow group-hover:scale-110 smooth-transition">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Problem Solving</h3>
                    <p className="text-muted-foreground">Analyzing complex challenges and delivering innovative, efficient solutions.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
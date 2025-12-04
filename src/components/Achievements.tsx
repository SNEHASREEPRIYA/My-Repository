import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Star, Trophy, BookOpen, Users, Target } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    // {
    //   title: "Outstanding Academic Performance",
    //   description: "Maintained exceptional academic standards with a CGPA of 9.45 in B.Tech Computer Science with AI & Data Science",
    //   category: "Academic Excellence",
    //   year: "2022-Present",
    //   icon: Star,
    //   color: "primary",
    //   highlights: ["Top 5% of class", "Consistent high performance", "Subject topper in multiple courses"]
    // },
    {
      title: "Data Science Certification",
      description: "Successfully completed 'Introduction to Data Science with Python' certification from HarvardX",
      category: "Professional Certification",
      year: "2024",
      icon: BookOpen,
      color: "secondary",
      highlights: ["HarvardX Certification", "Python for Data Science", "Statistical Analysis"]
    },
    {
      title: "Smart Coder Certification",
      description: "Achieved Smart Coder certification demonstrating proficiency in programming and problem-solving skills",
      category: "Technical Certification",
      year: "2024",
      icon: Trophy,
      color: "secondary",
      highlights: ["Programming Proficiency", "Problem Solving", "Algorithm Implementation"]
    },
    {
      title: "Competitive Programming & Problem Solving",
      description: "Solved 450+ problems on LeetCode and active across multiple coding platforms, demonstrating strong algorithmic skills and consistency.",
      category: "Competitive Programming",
      year: "2025",
      icon: Star,
      color: "primary",
      highlights: ["450+ problems solved on LeetCode", "Active on multiple coding platforms", "Strong algorithmic and problem-solving skills"]
    },
    // {
    //   title: "High School Academic Excellence",
    //   description: "Secured 96.9% in Intermediate and 96.5% in SSC, demonstrating consistent academic excellence",
    //   category: "Academic Achievement",
    //   year: "2020-2022",
    //   icon: Award,
    //   color: "secondary",
    //   highlights: ["96.9% in Intermediate", "96.5% in SSC", "Subject excellence in Mathematics and Science"]
    // },
    {
      title: "Hackathon Participation",
      description: "Active participation in college-level hackathons, contributing to innovative project development",
      category: "Competition",
      year: "2024",
      icon: Users,
      color: "primary",
      highlights: ["24-hour coding marathon", "Team collaboration", "Innovation and creativity"]
    },
    {
      title: "Technical Project Portfolio",
      description: "Developed comprehensive portfolio of projects spanning Data Science, Web Development, and Machine Learning",
      category: "Project Excellence",
      year: "2023-2024",
      icon: Target,
      color: "secondary",
      highlights: ["5+ Major Projects", "Full-stack Development", "ML Implementation"]
    }
    ,
    {
      title: "Project Contributor — 5+ Projects",
      description: "Completed 5+ end-to-end projects including web applications, machine learning pipelines, and interactive data visualizations. Projects include deployments, tests, and documentation.",
      category: "Project Work",
      year: "2023-2025",
      icon: Award,
      color: "secondary",
      highlights: ["5+ completed projects", "End-to-end web & ML projects", "Deployed, tested and documented"]
    }
  ];

  const stats = [
    { label: "CGPA", value: "9.45", description: "Current Academic Performance" },
    { label: "Projects", value: "5+", description: "Completed Technical Projects" },
    { label: "Certifications", value: "2", description: "Professional Certifications" },
    { label: "Hackathons", value: "1", description: "Participated Events" }
  ];

  return (
    <section id="achievements" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl font-bold gradient-text mb-4">Certifications and Achievements</h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            A collection of academic achievements, certifications, and recognitions that reflect dedication to excellence and continuous learning.
          </p>
        </div>

        {/* Statistics Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="glass-card border-primary/20 hover:border-primary/40 smooth-transition slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="font-semibold mb-1">{stat.label}</div>
                <p className="text-xs text-muted-foreground">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <Card key={index} className={`glass-card border-${achievement.color}/20 hover:border-${achievement.color}/40 smooth-transition group hover:scale-105 slide-up`} style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 bg-${achievement.color}/10 rounded-lg ${achievement.color === 'primary' ? 'neon-glow' : 'purple-glow'} group-hover:scale-110 smooth-transition`}>
                      <IconComponent className={`h-6 w-6 text-${achievement.color}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <Badge variant="outline" className={`border-${achievement.color}/30 text-${achievement.color} text-xs`}>
                          {achievement.category}
                        </Badge>
                        <span className="text-sm text-muted-foreground">{achievement.year}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary smooth-transition">
                        {achievement.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {achievement.description}
                      </p>
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-muted-foreground">Key Highlights:</h4>
                        <ul className="space-y-1">
                          {achievement.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-center text-sm text-muted-foreground">
                              <div className={`w-1.5 h-1.5 bg-${achievement.color} rounded-full mr-2`}></div>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Future Goals */}
        <div className="mt-16 slide-up">
          <Card className="glass-card border-primary/20 max-w-4xl mx-auto">
            <CardContent className="p-8 text-center">
              <div className="flex items-center justify-center mb-4">
                <div className="p-4 bg-primary/10 rounded-lg neon-glow">
                  <Target className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Future Aspirations</h3>
              <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Committed to continuous learning and growth in the field of technology. My future goals include pursuing advanced certifications in machine learning, contributing to open-source projects, and making meaningful impacts through innovative software solutions.
              </p>
              <div className="flex flex-wrap gap-3 justify-center mt-6">
                <Badge variant="outline" className="border-primary/30 text-primary px-3 py-1">
                  Advanced ML Certifications
                </Badge>
                <Badge variant="outline" className="border-secondary/30 text-secondary px-3 py-1">
                  Open Source Contributions
                </Badge>
                <Badge variant="outline" className="border-primary/30 text-primary px-3 py-1">
                  Industry Leadership
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Globe, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      color: "primary",
      skills: [
        { name: "Python", level: 90 },
        { name: "C++", level: 85 },
        { name: "Java", level: 80 },
        { name: "JavaScript", level: 85 },
        { name: "R", level: 75 }
      ]
    },
    {
      title: "Web Development",
      icon: Globe,
      color: "secondary",
      skills: [
        { name: "React.js", level: 90 },
        { name: "Node.js", level: 80 },
        { name: "HTML/CSS", level: 95 },
        { name: "TypeScript", level: 75 },
        { name: "REST APIs", level: 80 }
      ]
    },
    {
      title: "Data Science & ML",
      icon: Database,
      color: "primary",
      skills: [
        { name: "ARIMA/SARIMA", level: 85 },
        { name: "Pandas", level: 90 },
        { name: "NumPy", level: 88 },
        { name: "Scikit-learn", level: 82 },
        { name: "Data Visualization", level: 85 }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: Wrench,
      color: "secondary",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "OpenCV", level: 80 },
        { name: "SQL", level: 85 },
        { name: "Power BI", level: 75 },
        { name: "VS Code", level: 95 }
      ]
    }
  ];

  const additionalSkills = [
    "Machine Learning", "Deep Learning", "Statistical Modeling", "Data Analysis", 
    "Algorithm Design", "Problem Solving", "Agile Development", "Team Collaboration",
    "Research & Development", "Technical Writing", "Public Speaking", "Project Management"
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl font-bold gradient-text mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            A comprehensive set of technical skills and expertise acquired through hands-on projects and continuous learning.
          </p>
        </div>

        {/* Main Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className={`glass-card border-${category.color}/20 hover:border-${category.color}/40 smooth-transition slide-up`} style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <div className={`p-3 bg-${category.color}/10 rounded-lg ${category.color === 'primary' ? 'neon-glow' : 'purple-glow'} mr-4`}>
                      <IconComponent className={`h-6 w-6 text-${category.color}`} />
                    </div>
                    <h3 className="text-xl font-bold">{category.title}</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{skill.name}</span>
                          <span className={`text-sm text-${category.color} font-semibold`}>{skill.level}%</span>
                        </div>
                        <Progress 
                          value={skill.level} 
                          className={`h-2 bg-muted`}
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Skills */}
        <div className="text-center slide-up">
          <h3 className="text-2xl font-bold mb-8">Additional Skills & Competencies</h3>
          <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
            {additionalSkills.map((skill, index) => (
              <Badge 
                key={index}
                variant="outline"
                className={`px-4 py-2 text-sm border-primary/30 hover:border-primary hover:bg-primary/10 smooth-transition cursor-default ${
                  index % 2 === 0 ? 'hover:neon-glow' : 'hover:purple-glow'
                }`}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
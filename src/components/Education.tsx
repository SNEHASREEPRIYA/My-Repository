import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "B.Tech in Computer Science with Artificial Intelligence and Data Science",
      institution: "Shri Vishnu Engineering College For Women",
      location: "Bhimavaram, Andhra Pradesh",
      duration: "Oct 2022 - May 2026",
      cgpa: "9.45",
      status: "Current",
      icon: GraduationCap,
      color: "primary"
    },
    {
      degree: "Intermediate (12th Grade)",
      institution: "Star Junior College",
      location: "Machilipatnam, Andhra Pradesh", 
      duration: "Jun 2020 - April 2022",
      cgpa: "96.9%",
      status: "Completed",
      icon: Award,
      color: "secondary"
    },
    {
      degree: "SSC (10th Grade)",
      institution: "St. Vincent Pallotti English Medium School",
      location: "Pedana, Andhra Pradesh",
      duration: "June 2019 - March 2020", 
      cgpa: "96.5%",
      status: "Completed",
      icon: Award,
      color: "primary"
    }
  ];

  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl font-bold gradient-text mb-4">Education</h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            My academic journey in Computer Science and Data Science, building a strong foundation in technology and innovation.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-primary hidden md:block"></div>

            <div className="space-y-8">
              {educationData.map((edu, index) => {
                const IconComponent = edu.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <div key={index} className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} slide-up`} style={{ animationDelay: `${index * 0.2}s` }}>
                    {/* Timeline Node */}
                    <div className="absolute left-6 md:left-6 z-10 w-6 h-6 bg-background border-4 border-primary rounded-full hidden md:block"></div>
                    
                    {/* Content */}
                    <div className={`flex-1 ${isEven ? 'md:pr-16' : 'md:pl-16'}`}>
                      <Card className={`glass-card border-${edu.color}/20 hover:border-${edu.color}/40 smooth-transition group hover:scale-105`}>
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <div className={`p-3 bg-${edu.color}/10 rounded-lg ${edu.color === 'primary' ? 'neon-glow' : 'purple-glow'} group-hover:scale-110 smooth-transition`}>
                              <IconComponent className={`h-6 w-6 text-${edu.color}`} />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-2">
                                <span className={`px-3 py-1 bg-${edu.color}/10 text-${edu.color} text-sm rounded-full font-medium`}>
                                  {edu.status}
                                </span>
                                <div className="flex items-center text-muted-foreground text-sm">
                                  <Calendar className="h-4 w-4 mr-1" />
                                  {edu.duration}
                                </div>
                              </div>
                              <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                              <p className={`text-${edu.color} font-semibold mb-1`}>{edu.institution}</p>
                              <p className="text-muted-foreground text-sm mb-3">{edu.location}</p>
                              <div className="flex items-center justify-between">
                                <div className={`text-2xl font-bold text-${edu.color}`}>
                                  {edu.cgpa}
                                </div>
                                <div className="text-muted-foreground text-sm">
                                  {edu.cgpa.includes('%') ? 'Percentage' : 'CGPA'}
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
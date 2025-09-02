import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Users, Trophy, Lightbulb } from 'lucide-react';

const Hackathons = () => {
  const hackathons = [
    {
      event: "24-Hour College Level Hackathon",
      organizer: "Shri Vishnu Engineering College For Women",
      duration: "24 Hours",
      year: "2024",
      teamRole: "Team Member",
      description: "Participated in an intensive 24-hour hackathon focused on developing innovative solutions using cutting-edge technology. Collaborated with team members to design and implement a comprehensive project within the time constraint.",
      skills: ["Team Collaboration", "Rapid Prototyping", "Problem Solving", "Time Management"],
      achievements: ["Successfully completed project within 24 hours", "Enhanced collaborative coding skills", "Gained experience in hackathon environment"],
      icon: Trophy,
      color: "primary"
    },
    {
      event: "Tech Innovation Challenge",
      organizer: "Regional Technology Forum",
      duration: "48 Hours",
      year: "2024",
      teamRole: "Lead Developer",
      description: "Led development efforts in a technology-focused hackathon, creating innovative solutions for real-world problems. Demonstrated leadership skills while managing project timeline and team coordination.",
      skills: ["Leadership", "Full-stack Development", "Project Management", "Innovation"],
      achievements: ["Led successful project completion", "Mentored junior team members", "Implemented scalable architecture"],
      icon: Lightbulb,
      color: "secondary"
    }
  ];

  const hackathonStats = [
    { label: "Hackathons Participated", value: "2+", icon: Trophy },
    { label: "Hours of Coding", value: "72+", icon: Calendar },
    { label: "Team Projects", value: "2", icon: Users },
    { label: "Technologies Used", value: "10+", icon: Lightbulb }
  ];

  return (
    <section id="hackathons" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl font-bold gradient-text mb-4">Hackathons & Competitions</h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Engaging in competitive programming events and hackathons to challenge creativity, enhance problem-solving skills, and collaborate with fellow developers.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {hackathonStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="glass-card border-primary/20 hover:border-primary/40 smooth-transition slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 text-center">
                  <div className="p-3 bg-primary/10 rounded-lg neon-glow mx-auto mb-4 w-fit">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Hackathon Details */}
        <div className="space-y-8">
          {hackathons.map((hackathon, index) => {
            const IconComponent = hackathon.icon;
            return (
              <Card key={index} className={`glass-card border-${hackathon.color}/20 hover:border-${hackathon.color}/40 smooth-transition slide-up`} style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Header */}
                    <div className="lg:col-span-3">
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center space-x-4">
                          <div className={`p-4 bg-${hackathon.color}/10 rounded-lg ${hackathon.color === 'primary' ? 'neon-glow' : 'purple-glow'}`}>
                            <IconComponent className={`h-8 w-8 text-${hackathon.color}`} />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold mb-1">{hackathon.event}</h3>
                            <p className={`text-${hackathon.color} font-semibold`}>{hackathon.organizer}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge className={`bg-${hackathon.color}/10 text-${hackathon.color} border-${hackathon.color}/30`}>
                            {hackathon.year}
                          </Badge>
                          <p className="text-sm text-muted-foreground mt-1">{hackathon.duration}</p>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="lg:col-span-2">
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-lg font-semibold mb-3">Event Description</h4>
                          <p className="text-muted-foreground leading-relaxed">{hackathon.description}</p>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold mb-3">Key Achievements</h4>
                          <ul className="space-y-2">
                            {hackathon.achievements.map((achievement, idx) => (
                              <li key={idx} className="flex items-center text-muted-foreground">
                                <div className={`w-2 h-2 bg-${hackathon.color} rounded-full mr-3`}></div>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Skills & Role */}
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold mb-3">Role</h4>
                        <Badge variant="outline" className={`border-${hackathon.color}/30 text-${hackathon.color}`}>
                          {hackathon.teamRole}
                        </Badge>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold mb-3">Skills Developed</h4>
                        <div className="flex flex-wrap gap-2">
                          {hackathon.skills.map((skill, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs bg-muted/50">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm">Duration: {hackathon.duration}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Future Participation */}
        <div className="text-center mt-16 slide-up">
          <Card className="glass-card border-primary/20 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Looking Forward</h3>
              <p className="text-muted-foreground leading-relaxed">
                Always eager to participate in new hackathons and competitive programming events. 
                These experiences have been instrumental in enhancing my problem-solving abilities, 
                fostering creativity, and building valuable connections in the tech community.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Hackathons;
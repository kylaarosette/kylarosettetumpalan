import { Calendar, MapPin, ExternalLink } from "lucide-react"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import { Button } from "@/components/ui/button"

export function Experience() {
  const { ref, isVisible } = useScrollAnimation();

  const experiences = [
    {
      role: "BSIT Graduate",
      company: "Technological Institute of the Philippines",
      location: "Quezon City",
      period: "August 05, 2025",
      description: "Graduated with a Bachelor's degree in Information Technology, earning Magna Cum Laude honors. Gained a strong foundation in web development, database management, and cybersecurity principles.",
      isActive: true
    },
    {
      role: "Front-end Developer Intern",
      company: "i4 Asia Incorporated",
      location: "Philippines",
      period: "March - May 2025",
      description: "Developed user interfaces for web applications using modern technologies. Collaborated with co-interns to create seamless user experiences.",
      isActive: false
    },
    {
      role: "Full-Stack Developer Intern",
      company: "Technological Institute of the Philippines",
      location: "Quezon City",
      period: "January - April 2025",
      description: "Worked on both frontend and backend development for a special project of the university. Gained hands-on experience with MERN Stack as the lead developer.",
      isActive: false
    }
  ];

  return (
    <section ref={ref} className="section-padding py-24">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <h2 className={`text-5xl font-bold mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Experience & Education
          </h2>
          <p className={`text-xl text-muted-foreground max-w-2xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            My journey in technology and the experiences that shaped my skills
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <div 
              key={index}
              className={`relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${(index + 3) * 200}ms` }}
            >
              {/* Timeline line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-8 top-16 w-0.5 h-32 bg-gradient-to-b from-primary to-muted-foreground/30 z-0"></div>
              )}
              
              {/* Experience card */}
              <div className="flex items-start gap-8 mb-12 relative z-10">
                <div className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center border-4 transition-all duration-300 ${
                  experience.isActive 
                    ? 'bg-primary border-primary text-primary-foreground' 
                    : 'bg-background border-muted-foreground text-muted-foreground'
                }`}>
                  <Calendar className="w-6 h-6" />
                </div>
                
                <div className="flex-1 bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50 hover:border-primary/20 transition-all duration-300 hover:scale-[1.02]">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-1">{experience.role}</h3>
                      <div className="flex items-center gap-4 text-muted-foreground">
                        <span className="font-semibold text-primary">{experience.company}</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {experience.location}
                        </span>
                      </div>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                        experience.isActive 
                          ? 'bg-primary/10 text-primary' 
                          : 'bg-muted text-muted-foreground'
                      }`}>
                        {experience.period}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {experience.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className={`text-center mt-16 transition-all duration-700 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready for New Opportunities</h3>
            <p className="text-muted-foreground mb-6">
              I'm actively seeking full-time opportunities where I can contribute my skills and continue growing as a developer.
            </p>
            <Button className="group">
              Let's Connect
              <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div> */}
      </div>
    </section>
  );
}
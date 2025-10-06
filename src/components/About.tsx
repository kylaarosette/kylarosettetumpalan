import { GraduationCap, Award, Code, Heart } from "lucide-react"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export function About() {
  const { ref, isVisible } = useScrollAnimation();

  const achievements = [
    {
      icon: GraduationCap,
      title: "IT Graduate",
      description: "Bachelor's degree in Information Technology with a focus on modern web development"
    },
    {
      icon: Award,
      title: "Magna Cum Laude",
      description: "Graduated with high academic honors, demonstrating excellence in technical studies"
    },
    {
      icon: Code,
      title: "Attentive to Detail",
      description: "Meticulous in writing clean, efficient, and maintainable code"
    },
    {
      icon: Heart,
      title: "Passionate Learner",
      description: "Always eager to learn new technologies and improve development practices"
    }
  ];

  return (
    <section ref={ref} className="section-padding bg-background py-24">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <h2 className={`text-5xl font-bold mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            About Me
          </h2>
          <p className={`text-xl text-muted-foreground max-w-3xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            A passionate IT graduate with a strong foundation in web development and a commitment to creating exceptional digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                As a recent IT graduate, I bring fresh perspectives and cutting-edge knowledge to web development. My journey in technology has been driven by curiosity and a passion for solving complex problems through innovative solutions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I specialize in creating responsive, user-friendly web applications using modern technologies. My academic background has provided me with a solid foundation in technical principles, while my projects have honed my practical development skills.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm always excited to take on new challenges, collaborate with teams that share my passion for creating meaningful digital experiences, and continuously learn and upskill to grow both personally and professionally.
              </p>
            </div>
          </div>

          <div className={`transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            {/* Desktop Grid */}
            <div className="hidden sm:grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className={`bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50 hover:border-primary/20 transition-all duration-500 hover:scale-105 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                  style={{ transitionDelay: `${(index + 6) * 100}ms` }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <achievement.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold">{achievement.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Mobile Carousel */}
            <div className="sm:hidden">
              <Carousel opts={{ loop: true }} className="w-full max-w-xs mx-auto">
                <CarouselContent>
                  {achievements.map((achievement, index) => (
                    <CarouselItem key={index}>
                      <div className={`bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50 transition-all duration-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                        <div className="flex items-center gap-4 mb-4">
                          <div className="p-3 bg-primary/10 rounded-full">
                            <achievement.icon className="w-6 h-6 text-primary" />
                          </div>
                          <h3 className="text-lg font-semibold">{achievement.title}</h3>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {achievement.description}
                        </p>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
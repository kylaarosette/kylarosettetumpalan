import { Mail, Linkedin } from "lucide-react"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import { Card, CardContent } from "@/components/ui/card"

export function Contact() {
  const { ref, isVisible } = useScrollAnimation()

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "kylarosette.tumpalan@gmail.com",
      action: () => window.location.href = 'mailto:kylarosette.tumpalan@gmail.com'
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "Connect with me",
      action: () => window.open('https://www.linkedin.com/in/kyla-rosette-tumpalan/', '_blank')
    },
    {
      icon: Linkedin,
      title: "OnlineJobs.ph",
      value: "Connect with me",
      action: () => window.open('https://www.onlinejobs.ph/jobseekers/info/4452034', '_blank')
    },
    {
      icon: Linkedin,
      title: "UpWork",
      value: "Connect with me",
      action: () => window.open('https://www.upwork.com/freelancers/~01f7722b1c0b9b9c59?mp_source=share', '_blank')
    }
  ]

  return (
    <section ref={ref} className="section-padding bg-gradient-to-br from-background via-background to-primary/5 py-24">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className={`text-5xl font-bold mb-6 bg-gradient-to-br from-foreground to-primary bg-clip-text text-transparent transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Get In Touch
          </h2>
          <p className={`text-xl text-muted-foreground max-w-2xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            I'm always open to discussing new opportunities and interesting projects. Let's create something amazing together!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-2xl mx-auto">
          {contactInfo.map((info, index) => (
            <Card 
              key={index}
              className={`group cursor-pointer hover:shadow-lg border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:border-primary/30 hover:bg-primary/5 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${(index + 3) * 100}ms` }}
              onClick={info.action || undefined}
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <info.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-xl mb-3">{info.title}</h3>
                <p className="text-muted-foreground">{info.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
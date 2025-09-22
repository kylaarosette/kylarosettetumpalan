import { Mail, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

export function Contact() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section ref={ref} className="section-padding">
      <div className="container mx-auto max-w-2xl text-center">
        <h2 className={`text-4xl font-bold mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          Get In Touch
        </h2>
        <p className={`text-lg text-muted-foreground mb-12 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          I'm always open to discussing new opportunities and interesting projects.
        </p>
        
        <div className={`flex flex-col sm:flex-row gap-6 justify-center transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Button
            className="text-lg px-8 py-6 rounded-lg hover:scale-105 transition-transform duration-300"
            onClick={() => window.open('mailto:kylarosette.tumpalan@gmail.com')}
          >
            <Mail className="mr-2 h-5 w-5" />
            Email Me
          </Button>
          
          <Button
            variant="outline"
            className="text-lg px-8 py-6 rounded-lg border-2 hover:scale-105 transition-transform duration-300"
            onClick={() => window.open('https://www.linkedin.com/in/kyla-rosette-tumpalan/', '_blank')}
          >
            <Linkedin className="mr-2 h-5 w-5" />
            LinkedIn
          </Button>
        </div>
      </div>
    </section>
  )
}
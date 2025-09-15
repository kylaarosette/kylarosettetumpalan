import { Download, Code, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import profilePhoto from "@/assets/profile-photo.png"

export function Hero() {
  const handleDownloadCV = () => {
    // Trigger a download
    const link = document.createElement('a')
    link.href = '/RESUME_Kyla_Rosette_Tumpalan.pdf'
    link.download = 'RESUME_Kyla_Rosette_Tumpalan.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center section-padding overflow-hidden pt-16">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent-blue/10"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary/3 to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.1),transparent_50%)]"></div>
      
      {/* Animated background shapes */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent-blue/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl animate-pulse delay-500"></div>
      
      {/* Geometric shapes */}
      <div className="absolute top-32 left-20 w-4 h-4 bg-primary/30 rotate-45 animate-spin-slow"></div>
      <div className="absolute bottom-40 right-32 w-6 h-6 bg-accent-blue/40 rounded-full animate-bounce delay-700"></div>
      <div className="absolute top-2/3 left-16 w-2 h-16 bg-primary/20 animate-pulse delay-300"></div>
      <div className="absolute top-1/4 right-20 w-8 h-2 bg-accent-blue/25 animate-pulse delay-1200"></div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Floating elements */}
      <div className="absolute top-1/4 left-1/4 opacity-20">
        <Code className="w-8 h-8 text-primary animate-bounce delay-500" />
      </div>
      <div className="absolute top-1/3 right-1/4 opacity-20">
        <Sparkles className="w-6 h-6 text-accent-blue animate-bounce delay-1000" />
      </div>
      <div className="absolute bottom-1/3 left-1/3 opacity-15">
        <div className="w-12 h-12 border-2 border-primary/30 rounded-full animate-spin-slow"></div>
      </div>
      <div className="absolute top-1/2 right-1/3 opacity-10">
        <div className="w-8 h-8 bg-accent-blue/20 transform rotate-45 animate-pulse delay-800"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="fade-in">
              <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-in">
                Available for Work
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-tight">
                Kyla Rosette <span className="text-primary">Tumpalan</span>
              </h1>
              
              <h2 className="text-xl md:text-2xl text-muted-foreground mb-6 font-light">
                Front-end Developer
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-lg">
                Passionate IT graduate with expertise in modern web technologies. 
                I create innovative solutions that bridge the gap between design and functionality.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  onClick={handleDownloadCV}
                  className="hero-button text-lg px-8 py-6 rounded-lg group"
                >
                  <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                  Download CV
                </Button>
              </div>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              {/* Decorative rings */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-ping"></div>
              <div className="absolute -inset-4 rounded-full border border-accent-blue/30 animate-pulse"></div>
              
              {/* Main image */}
              <div className="relative z-10 fade-in">
                <img
                  src={profilePhoto}
                  alt="Kyla Rosette Tumpalan"
                  className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-background shadow-2xl animate-float"
                />
                
                {/* Floating badge */}
                <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-bounce delay-300">
                  Magna Cum Laude
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
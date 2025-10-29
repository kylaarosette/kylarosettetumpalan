import { Download, Code, Sparkles, Zap, Star, Circle, Triangle, Square, Hexagon, Diamond, Cpu, Palette, Lightbulb, Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"
import photo1 from "@/assets/photo1.png"
import photo2 from "@/assets/photo2.png"
import { useState, useEffect } from "react"

export function Hero() {
  const [isHovered, setIsHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleDownloadCV = () => {
    // Trigger a download
    const link = document.createElement('a')
    link.href = '/RESUME_Kyla_Rosette_Tumpalan.pdf'
    link.download = 'RESUME_Kyla_Rosette_Tumpalan.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center section-padding overflow-hidden pt-16">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent-blue/10"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary/3 to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.1),transparent_50%)]"></div>
      
      {/* Interactive mouse-following gradient */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(600px_at_var(--x)_var(--y),hsl(var(--primary)/0.25),transparent_40%)] dark:bg-[radial-gradient(600px_at_var(--x)_var(--y),hsl(var(--primary)/0.15),transparent_40%)]"
        style={{
          '--x': `${mousePosition.x}%`,
          '--y': `${mousePosition.y}%`,
        } as React.CSSProperties}
      />
      
      {/* Animated background shapes */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent-blue/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl animate-pulse delay-500"></div>
      
      {/* Additional glowing orbs */}
      <div className="absolute top-1/4 left-1/2 w-32 h-32 bg-accent-blue/8 rounded-full blur-2xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-primary/6 rounded-full blur-2xl animate-float delay-700"></div>
      <div className="absolute top-3/4 left-1/4 w-24 h-24 bg-accent-blue/12 rounded-full blur-xl animate-float delay-1500"></div>
      
      {/* Floating particles */}
      {Array.from({ length: 15 }).map((_, i) => (
        <div
          key={i}
          className={`absolute w-1 h-1 bg-primary/30 rounded-full animate-float`}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3000}ms`,
            animationDuration: `${3000 + Math.random() * 2000}ms`,
          }}
        />
      ))}
      
      {/* Geometric shapes */}
      <div className="absolute top-32 left-20 w-4 h-4 bg-primary/30 rotate-45 animate-spin-slow"></div>
      <div className="absolute bottom-40 right-32 w-6 h-6 bg-accent-blue/40 rounded-full animate-bounce delay-700"></div>
      <div className="absolute top-2/3 left-16 w-2 h-16 bg-primary/20 animate-pulse delay-300"></div>
      <div className="absolute top-1/4 right-20 w-8 h-2 bg-accent-blue/25 animate-pulse delay-1200"></div>
      <div className="absolute top-1/5 left-2/3 w-3 h-3 bg-primary/25 transform rotate-12 animate-pulse delay-600"></div>
      <div className="absolute top-3/5 right-1/5 w-1 h-12 bg-primary/15 animate-pulse delay-1800"></div>
      <div className="absolute bottom-2/5 right-2/5 w-10 h-1 bg-accent-blue/20 animate-pulse delay-2100"></div>
      
      {/* Decorative lines */}
      <div className="absolute top-1/3 left-1/6 w-16 h-px bg-gradient-to-r from-primary/30 to-transparent animate-pulse delay-400"></div>
      <div className="absolute bottom-1/3 right-1/6 w-20 h-px bg-gradient-to-l from-accent-blue/25 to-transparent animate-pulse delay-1100"></div>
      <div className="absolute top-2/5 left-3/4 w-px h-12 bg-gradient-to-b from-primary/20 to-transparent animate-pulse delay-1600"></div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Floating elements */}
      <div className="absolute top-1/4 left-1/3 opacity-20">
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
      
      {/* Floating tech icons */}
      <div className="absolute top-1/6 left-1/4 opacity-15">
        <Cpu className="w-7 h-7 text-primary/60 animate-float delay-300" />
      </div>
      <div className="absolute bottom-1/6 right-1/3 opacity-12">
        <Palette className="w-6 h-6 text-accent-blue/50 animate-float delay-1200" />
      </div>
      <div className="absolute top-2/3 right-1/6 opacity-18">
        <Lightbulb className="w-5 h-5 text-primary/70 animate-bounce delay-800" />
      </div>
      <div className="absolute top-1/4 left-1/5 opacity-16">
        <Zap className="w-5 h-5 text-primary/50 animate-bounce delay-2000" />
      </div>
      
      {/* Floating geometric icons */}
      <div className="absolute top-1/8 right-1/5 opacity-12">
        <Star className="w-4 h-4 text-accent-blue/40 animate-spin-slow delay-700" />
      </div>
      <div className="absolute top-3/4 left-1/8 opacity-8">
        <Triangle className="w-4 h-4 text-accent-blue/35 animate-bounce delay-1800" />
      </div>
      <div className="absolute bottom-3/4 right-1/8 opacity-14">
        <Square className="w-3 h-3 text-primary/45 animate-spin-slow delay-2200" />
      </div>
      <div className="absolute top-1/7 left-3/5 opacity-11">
        <Hexagon className="w-4 h-4 text-accent-blue/30 animate-float delay-2600" />
      </div>
      <div className="absolute bottom-1/7 right-2/5 opacity-9">
        <Diamond className="w-3 h-3 text-primary/35 animate-pulse delay-3000" />
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="fade-in">
              <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-in backdrop-blur-sm border border-primary/20">
                Available for Work
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-tight">
                Kyla Rosette <span className="text-primary">Tumpalan</span>
              </h1>
              
              <h2 className="text-xl md:text-2xl text-muted-foreground mb-6 font-light">
                Freelance Web Developer & Funnel Designer
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Passionate IT graduate with expertise in modern web technologies. 
                I create innovative solutions that bridge the gap between design and functionality.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  onClick={handleDownloadCV}
                  className="hero-button text-lg px-8 py-6 rounded-lg group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent-blue opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <Download className="mr-2 h-5 w-5 group-hover:animate-bounce relative z-10" />
                  <span className="relative z-10">Download CV</span>
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
              <div className="absolute -inset-8 rounded-full border border-primary/10 animate-spin-slow"></div>
              
              {/* Glowing effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-accent-blue/20 blur-xl animate-pulse delay-500"></div>
              
              {/* Main image */}
              <div 
                className="relative z-10 fade-in group"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className="relative overflow-hidden rounded-full">
                  <img
                    src={isHovered ? photo2 : photo1}
                    alt="Kyla Rosette Tumpalan"
                    className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-background shadow-2xl animate-float"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/10 via-transparent to-accent-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                {/* Floating badge */}
                <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-bounce delay-300">
                  Magna Cum Laude
                </div>
                
                {/* Floating elements around image */}
                <div className="absolute -top-2 -left-2 w-3 h-3 bg-primary/40 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-accent-blue/50 rounded-full animate-bounce delay-1000"></div>
                <div className="absolute -top-2 -right-2 w-2 h-2 bg-primary/30 rounded-full animate-pulse delay-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
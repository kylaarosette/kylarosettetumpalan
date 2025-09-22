import { 
  SiReact, 
  SiTailwindcss, 
  SiJavascript, 
  SiHtml5, 
  SiCss3, 
  SiMysql, 
  SiPhp, 
  SiNodedotjs, 
  SiMongodb, 
  SiExpress, 
  SiShopify, 
  SiWordpress, 
  SiWix, 
  SiGithub, 
  SiGit,
  SiCanva,
  SiFigma
} from 'react-icons/si'
import { Code } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const frontendTechs = [
  { name: "HTML", icon: SiHtml5 },
  { name: "CSS", icon: SiCss3 },
  { name: "JavaScript", icon: SiJavascript },
  { name: "React", icon: SiReact },
  { name: "Tailwind CSS", icon: SiTailwindcss },
]

const backendTechs = [
  { name: "MySQL", icon: SiMysql },
  { name: "PHP", icon: SiPhp },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Express.js", icon: SiExpress },
]

const toolsTechs = [
  { name: "Shopify", icon: SiShopify },
  { name: "WordPress", icon: SiWordpress },
  { name: "Wix", icon: SiWix },
  { name: "Canva", icon: SiCanva },
  { name: "Figma", icon: SiFigma },
  { name: "GitHub", icon: SiGithub },
  { name: "Git", icon: SiGit },
  { name: "VS Code", icon: Code },
]

export function TechStack() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="section-padding bg-muted/30 py-24">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <h2 className={`text-5xl font-bold mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Technical Toolkit
          </h2>
          <p className={`text-xl text-muted-foreground max-w-2xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Technologies and tools I use to bring ideas to life
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50 hover:border-primary/20 transition-colors">
              <h3 className="text-2xl font-semibold mb-6 text-center flex items-center justify-center gap-2">
                Frontend Development
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {frontendTechs.map((tech, index) => (
                  <div 
                    key={index} 
                    className={`flex flex-col items-center group cursor-pointer transition-all duration-500 hover:scale-105 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}
                    style={{ transitionDelay: `${(index + 4) * 100}ms` }}
                  >
                    <div className="tech-icon text-4xl mb-2 group-hover:text-primary transition-colors" title={tech.name}>
                      <tech.icon />
                    </div>
                    <span className="text-xs font-medium text-center text-muted-foreground group-hover:text-foreground transition-colors">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={`transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50 hover:border-primary/20 transition-colors">
              <h3 className="text-2xl font-semibold mb-6 text-center flex items-center justify-center gap-2">
                Backend Development
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {backendTechs.map((tech, index) => (
                  <div 
                    key={index} 
                    className={`flex flex-col items-center group cursor-pointer transition-all duration-500 hover:scale-105 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}
                    style={{ transitionDelay: `${(index + 9) * 100}ms` }}
                  >
                    <div className="tech-icon text-4xl mb-2 group-hover:text-primary transition-colors" title={tech.name}>
                      <tech.icon />
                    </div>
                    <span className="text-xs font-medium text-center text-muted-foreground group-hover:text-foreground transition-colors">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className={`transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50 hover:border-primary/20 transition-colors">
            <h3 className="text-2xl font-semibold mb-6 text-center flex items-center justify-center gap-2">
              Tools & Platforms
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {toolsTechs.map((tech, index) => (
                <div 
                  key={index} 
                  className={`flex flex-col items-center group cursor-pointer transition-all duration-500 hover:scale-105 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}
                  style={{ transitionDelay: `${(index + 14) * 100}ms` }}
                >
                  <div className="tech-icon text-4xl mb-2 group-hover:text-primary transition-colors" title={tech.name}>
                    <tech.icon />
                  </div>
                  <span className="text-xs font-medium text-center text-muted-foreground group-hover:text-foreground transition-colors">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
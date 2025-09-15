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
  SiGit
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
  { name: "GitHub", icon: SiGithub },
  { name: "Git", icon: SiGit },
  { name: "VS Code", icon: Code },
]

export function TechStack() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <h2 className={`text-4xl font-bold text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          Tech Stack
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3 className="text-2xl font-semibold mb-6 text-center">Frontend</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {frontendTechs.map((tech, index) => (
                <div 
                  key={index} 
                  className={`tech-icon text-5xl transition-all duration-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}
                  style={{ transitionDelay: `${(index + 3) * 100}ms` }}
                  title={tech.name}
                >
                  <tech.icon />
                </div>
              ))}
            </div>
          </div>

          <div className={`transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3 className="text-2xl font-semibold mb-6 text-center">Backend</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {backendTechs.map((tech, index) => (
                <div 
                  key={index} 
                  className={`tech-icon text-5xl transition-all duration-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}
                  style={{ transitionDelay: `${(index + 8) * 100}ms` }}
                  title={tech.name}
                >
                  <tech.icon />
                </div>
              ))}
            </div>
          </div>

          <div className={`transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3 className="text-2xl font-semibold mb-6 text-center">Tools</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {toolsTechs.map((tech, index) => (
                <div 
                  key={index} 
                  className={`tech-icon text-5xl transition-all duration-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}
                  style={{ transitionDelay: `${(index + 13) * 100}ms` }}
                  title={tech.name}
                >
                  <tech.icon />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
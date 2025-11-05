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
  SiShopify, 
  SiWordpress, 
  SiWix, 
  SiGithub, 
  SiGit,
  SiCanva,
  SiFigma,
  SiBootstrap,
  SiPostman,
  SiGoogle,
  SiAsana,
  SiTrello,
  SiNotion,
  SiSlack,
  SiZoom,
  SiGmail,
  SiGoogledrive,
  SiDropbox
} from 'react-icons/si'
import { Code, Mail, Calendar, FileText, Video, Cloud } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const webDevTechs = [
  { name: "WordPress", icon: SiWordpress },
  { name: "Shopify", icon: SiShopify },
  { name: "Wix", icon: SiWix },
  { name: "HTML", icon: SiHtml5 },
  { name: "CSS", icon: SiCss3 },
  { name: "JavaScript", icon: SiJavascript },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Bootstrap", icon: SiBootstrap },
  { name: "React", icon: SiReact },
  { name: "PHP", icon: SiPhp },
  { name: "MySQL", icon: SiMysql },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Git", icon: SiGit },
  { name: "GitHub", icon: SiGithub },
  { name: "VS Code", icon: Code },
  { name: "Postman", icon: SiPostman },
  { name: "Figma", icon: SiFigma },
  { name: "Canva", icon: SiCanva },
]

const funnelsTechs = [
  { name: "Systeme.io", icon: Code },
  { name: "GoHighLevel", icon: Code },
  { name: "Canva", icon: SiCanva },
]

const emailMarketingTechs = [
  { name: "Klaviyo", icon: Mail },
  { name: "Figma", icon: SiFigma },
  { name: "Canva", icon: SiCanva },
]

const productivityTechs = [
  { name: "Microsoft Office", icon: FileText },
  { name: "Google Workspace", icon: SiGoogle },
  { name: "Notion", icon: SiNotion },
  { name: "Microsoft Teams", icon: Video },
  { name: "Zoom", icon: SiZoom },
  { name: "Trello", icon: SiTrello },
]

export function TechStack() {
  const { ref, isVisible } = useScrollAnimation();

  const renderTechGrid = (techs: typeof webDevTechs) => (
    <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
      {techs.map((tech, index) => (
        <div 
          key={index} 
          className="flex flex-col items-center group cursor-pointer transition-all duration-300 hover:scale-105 w-32"
        >
          <div className="w-20 h-20 flex items-center justify-center bg-background/50 rounded-2xl mb-4 group-hover:bg-primary/10 transition-all duration-300">
            <tech.icon className="text-4xl text-primary group-hover:scale-110 transition-transform duration-300" />
          </div>
          <span className="text-sm font-medium text-center text-muted-foreground group-hover:text-foreground transition-colors duration-300">
            {tech.name}
          </span>
        </div>
      ))}
    </div>
  )

  return (
    <section ref={ref} className="section-padding bg-muted/30 py-24">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className={`text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Technical Toolkit
          </h2>
          <p className={`text-xl text-muted-foreground max-w-2xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Technologies and tools I use to bring ideas to life
          </p>
        </div>
        
        <Tabs defaultValue="web" className="w-full">
          <TabsList className="mb-12 flex w-full justify-center border-b border-border/50 bg-transparent p-0 gap-6">
            <TabsTrigger 
              value="web"
              className="relative rounded-none border-b-2 border-transparent bg-transparent px-6 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-primary data-[state=active]:text-foreground data-[state=active]:bg-transparent data-[state=active]:shadow-none"
            >
              Web & UI/UX
            </TabsTrigger>
            <TabsTrigger 
              value="funnels"
              className="relative rounded-none border-b-2 border-transparent bg-transparent px-6 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-primary data-[state=active]:text-foreground data-[state=active]:bg-transparent data-[state=active]:shadow-none"
            >
              Funnels
            </TabsTrigger>
            <TabsTrigger 
              value="email"
              className="relative rounded-none border-b-2 border-transparent bg-transparent px-6 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-primary data-[state=active]:text-foreground data-[state=active]:bg-transparent data-[state=active]:shadow-none"
            >
              Email Marketing
            </TabsTrigger>
            <TabsTrigger 
              value="productivity"
              className="relative rounded-none border-b-2 border-transparent bg-transparent px-6 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-primary data-[state=active]:text-foreground data-[state=active]:bg-transparent data-[state=active]:shadow-none"
            >
              Productivity
            </TabsTrigger>
          </TabsList>

          <TabsContent value="web" className="bg-card/80 backdrop-blur-md rounded-3xl p-8 shadow-lg border border-border/20">
            {renderTechGrid(webDevTechs)}
          </TabsContent>

          <TabsContent value="funnels" className="bg-card/80 backdrop-blur-md rounded-3xl p-8 shadow-lg border border-border/20">
            {renderTechGrid(funnelsTechs)}
          </TabsContent>

          <TabsContent value="email" className="bg-card/80 backdrop-blur-md rounded-3xl p-8 shadow-lg border border-border/20">
            {renderTechGrid(emailMarketingTechs)}
          </TabsContent>

          <TabsContent value="productivity" className="bg-card/80 backdrop-blur-md rounded-3xl p-8 shadow-lg border border-border/20">
            {renderTechGrid(productivityTechs)}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
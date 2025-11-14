import { useState } from "react"
import { ProjectModal } from "./ProjectModal"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"

import d0 from "@/assets/d0.png"
import d1 from "@/assets/d1.png"
import d2 from "@/assets/d2.png"
import d3 from "@/assets/d3.png"
import d4 from "@/assets/d4.png"
import d5 from "@/assets/d5.png"

import abs0 from "@/assets/abs0.png"
import abs1 from "@/assets/abs1.png"
import abs2 from "@/assets/abs2.png"
import abs3 from "@/assets/abs3.png"
import abs4 from "@/assets/abs4.png"
import abs5 from "@/assets/abs5.png"

import dm0 from "@/assets/dm0.png"
import dm1 from "@/assets/dm1.png"
import dm2 from "@/assets/dm2.png"
import dm3 from "@/assets/dm3.png"
import dm4 from "@/assets/dm4.png"
import dm5 from "@/assets/dm5.png"
import dm6 from "@/assets/dm6.png"

import vw0 from "@/assets/vw0.png"
import vw1 from "@/assets/vw1.png"
import vw2 from "@/assets/vw2.png"
import vw3 from "@/assets/vw3.png"
import vw4 from "@/assets/vw4.png"

import cs0 from "@/assets/cs0.png"
import cs1 from "@/assets/cs1.png"
import cs2 from "@/assets/cs2.png"
import cs3 from "@/assets/cs3.png"
import cs4 from "@/assets/cs4.png"
import cs5 from "@/assets/cs5.png"
import cs6 from "@/assets/cs6.png"
import cs7 from "@/assets/cs7.png"
import cs8 from "@/assets/cs8.png"
import cs9 from "@/assets/cs9.png"
import cs10 from "@/assets/cs10.png"
import cs11 from "@/assets/cs11.png"
import cs12 from "@/assets/cs12.png"

import gch0 from "@/assets/gch0.png"
import gch1 from "@/assets/gch1.png"
import gch2 from "@/assets/gch2.png"
import gch3 from "@/assets/gch3.png"
import gch4 from "@/assets/gch4.png"
import gch5 from "@/assets/gch5.png"
import gch6 from "@/assets/gch6.png"
import gch7 from "@/assets/gch7.png"
import gch8 from "@/assets/gch8.png"
import gch9 from "@/assets/gch9.png"
import gch10 from "@/assets/gch10.png"

import tmt0 from "@/assets/tmt0.png"
import tmt1 from "@/assets/tmt1.png"
import tmt2 from "@/assets/tmt2.png"
import tmt3 from "@/assets/tmt3.png"
import tmt4 from "@/assets/tmt4.png"
import tmt5 from "@/assets/tmt5.png"
import tmt6 from "@/assets/tmt6.png"
import tmt7 from "@/assets/tmt7.png"
import tmt8 from "@/assets/tmt8.png"
import tmt9 from "@/assets/tmt9.png"
import tmt10 from "@/assets/tmt10.png"

import jr0 from "@/assets/jr0.png"
import jr1 from "@/assets/jr1.jpg"
import jr2 from "@/assets/jr2.jpg"
import jr3 from "@/assets/jr3.jpg"
import jr4 from "@/assets/jr4.jpg"
import jr5 from "@/assets/jr5.jpg"
import jr6 from "@/assets/jr6.jpg"
import jr7 from "@/assets/jr7.jpg"
import jr8 from "@/assets/jr8.jpg"
import jr9 from "@/assets/jr9.jpg"

import ref0 from "@/assets/ref0.png"
import refunnel from "@/assets/re-funnel.png"
import ff0 from "@/assets/ff0.png"
import ffunnel from "@/assets/f-funnel.png"

import bkc0 from "@/assets/bkc0.png"
import bk from "@/assets/BK Campaign.png"
import sw0 from "@/assets/sw0.png"
import sw from "@/assets/Streetwear Campaign.png"

interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  images: string[]
  liveUrl?: string
  thumbnail: string
  category: 'web' | 'funnel' | 'email'
}

const projects: Project[] = [
  {
    id: 1,
    title: "Driveon",
    description: "A modern and responsive website designed for an auto repair shop using WordPress and Elementor. The site features a clean layout, easy navigation, and showcases the services offered by the shop. It is optimized for performance and device responsiveness, ensuring a seamless user experience across all devices.",
    technologies: ["WordPress", "Elementor"],
    images: [d1, d2, d3, d4, d5],
    liveUrl: "https://driveon.infinityfreeapp.com/",
    thumbnail: d0,
    category: 'web'
  },
  {
    id: 1,
    title: "Adore Beauty Skincare",
    description: "A visually appealing and user-friendly e-commerce website designed for a skincare brand. Built using WordPress and Elementor, the site features a clean layout, intuitive navigation, and seamless shopping experience. The website is optimized for performance and tablet and mobile responsiveness, ensuring a smooth browsing experience across all devices.",
    technologies: ["WordPress", "Elementor"],
    images: [abs1, abs2, abs3, abs4, abs5],
    liveUrl: "https://adorebeautyskincare.infinityfreeapp.com/",
    thumbnail: abs0,
    category: 'web'
  },
  {
    id: 2,
    title: "Dazzle Me",
    description: "An e-commerce website I built using Shopify during my internship. It was based on the Dawn theme, with additional customizations implemented through custom Liquid code. Please note that the site is not fully polished, as my access was removed once my internship hours were completed. Password: kyla15",
    technologies: ["Shopify", "Liquid", "HTML", "CSS", "JavaScript", "Canva"],
    images: [dm1, dm2, dm3, dm4, dm5, dm6],
    liveUrl: "https://i4kyla.myshopify.com/",
    thumbnail: dm0,
    category: 'web'
  },
  {
    id: 3,
    title: "Coffee Studio",
    description: "An e-commerce website that features a complete online ordering system with payment API integration, administrator inventory management for tracking sales and stock updates, customer account functionality for managing favorites and cart items, and engaging content sections including monthly product highlights and informative articles. Designed to bridge traditional coffee culture with digital convenience, the website enables customers to browse and purchase premium coffee blends, brewing equipment, and merchandise anytime, anywhere, while providing the business with streamlined operations and expanded market reach in the competitive food and beverage industry.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP", "MySQL", "PayPal Sandbox API", "Canva", "Figma"],
    images: [cs1, cs2, cs3, cs4, cs5, cs6, cs7, cs8, cs9, cs10, cs11, cs12],
    liveUrl: "https://coffeestudio.infinityfreeapp.com/",
    thumbnail: cs0,
    category: 'web'
  },
  {
    id: 4,
    title: "Grand Cascade Hotel",
    description: "Built with a focus on UI/frontend design and administrative functionality, the system features a comprehensive web portal for browsing hotel information, viewing room availability, and exploring booking options, along with an admin panel for monitoring and managing the website. While the platform showcases a complete reservation interface that allows users to access the system anytime and anywhere, the actual reservation booking functionality was not integrated, as the project requirements primarily emphasized frontend development and administrative dashboard capabilities rather than full backend reservation processing. The system addresses the traditional challenges of manual paper-based hotel management by providing a modern, user-friendly digital interface that enhances the hotel's online presence and streamlines the guest information management process.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "JQuery", "PHP", "MySQL", "Canva", "Figma"],
    images: [gch1, gch2, gch3, gch4, gch5, gch6, gch7, gch8, gch9, gch10],
    liveUrl: "https://grand-cascade-hotel.infinityfreeapp.com/",
    thumbnail: gch0,
    category: 'web'
  },
  {
    id: 5,
    title: "VigiWheel",
    description: "VigiWheel: An IoT-Based Monitoring System for Drivers' Distraction and Drowsiness Indicators with Web Application Management is our capstone project, a special project of the school aimed at addressing drowsy and distracted driving—the leading contributors to road accidents. It enables UV Express operators to monitor drivers' behavior, identifying signs of drowsiness or distraction through behavioral cues such as blinking frequency, eye closures, mouth openings, head pose estimation, and phone detection. An IoT module streams live video feeds to a remote processing device for analysis, while a companion web application manages captured logs and provides operators with actionable insights. Data analytics further supports decision-making by highlighting frequent offenders and offering data-driven recommendations. Evaluated by 51 respondents—including drivers, operators, and IT professionals—against ISO/IEC 25010 and ISO/IEC 30141 standards, VigiWheel achieved an overall mean rating of 5.35 (\"Agree\"), affirming its effectiveness as a driver monitoring and analytics tool.",
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "Material-UI", "JavaScript", "Looker Studio", "AWS S3", "Postman", "Python", "OpenCV", "Raspberry Pi 5", "Roboflow", "Google Colab", "Flask", "zrok", "Canva"],
    images: [vw1, vw2, vw3, vw4],
    liveUrl: "https://drive.google.com/file/d/1SaOMor7WEwMvmfSK4ruDN4Xbv4YuojIv/view?usp=drive_link",
    thumbnail: vw0,
    category: 'web'
  },
  {
    id: 6,
    title: "Triopica Milk Tea",
    description: "A mobile-based e-commerce application using the Ionic framework to redefine the tea-shopping experience. The app features seamlessly designed intuitive navigation, personalized user profiles, shopping cart functionality, and transaction processing, allowing customers to explore and purchase unique tea blends with ease. Built with a commitment to excellence and user experience, the platform provides customers with unprecedented convenience and accessibility, enabling them to browse, select, and order their favorite milk tea products anytime, anywhere directly from their mobile devices. This project demonstrates the integration of modern mobile technologies to enhance customer engagement and streamline the ordering process in the food and beverage industry.",
    technologies: ["Angular", "Canva", "Figma"],
    images: [tmt1, tmt2, tmt3, tmt4, tmt5, tmt6, tmt7, tmt8, tmt9, tmt10],
    liveUrl: "https://drive.google.com/file/d/1p1izcVQFw6ssxFrrHU6L20-2isihGvYL/view?usp=sharing",
    thumbnail: tmt0,
    category: 'web'
  },
  {
    id: 7,
    title: "JAVAriety",
    description: "An e-commerce transaction-based system that allows customers to browse and purchase products conveniently from anywhere, while offering sellers a complete order management dashboard to track product status from payment confirmation through preparation, shipment scheduling, delivery, and completion. Designed to address the challenges of traditional retail in the post-pandemic era, the platform reduces physical contact and viral infection risks by eliminating in-person transactions, decreases labor costs and employee workload through automated transaction processing and calculations, and helps contain COVID-19 spread by minimizing facility-based interactions. The system features an attractive and interactive purchasing interface that avoids long queues, promotes ICT-based transaction processing, and enables shopping through various platforms, ultimately increasing sales and profit while delivering sophisticated technology and superior customer service in today's digital-first retail landscape.",
    technologies: ["Java", "PHP", "MySQL", "Canva", "Figma"],
    images: [jr1, jr2, jr3, jr4, jr5, jr6, jr7, jr8, jr9],
    liveUrl: "https://drive.google.com/file/d/1HO4Kmp20XladnELriHqixeFuuxm3kcmo/view?usp=sharing",
    thumbnail: jr0,
    category: 'web'
  },

  {
    id: 8,
    title: "Real Estate Funnel",
    description: "",
    technologies: ["Systeme.io"],
    images: [refunnel],
    thumbnail: ref0,
    category: 'funnel'
  },
  {
    id: 9,
    title: "Fitness Funnel",
    description: "",
    technologies: ["Systeme.io"],
    images: [ffunnel],
    thumbnail: ff0,
    category: 'funnel'
  },

  {
    id: 10,
    title: "Burger King Campaign",
    description: "",
    technologies: ["Klaviyo", "Figma"],
    images: [bk],
    thumbnail: bkc0,
    category: 'email'
  },
  {
    id: 11,
    title: "Streetwear Fashion Campaign",
    description: "",
    technologies: ["Klaviyo", "Figma", "Canva"],
    images: [sw],
    thumbnail: sw0,
    category: 'email'
  },
  
]

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const { ref, isVisible } = useScrollAnimation()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [showAllWeb, setShowAllWeb] = useState(false)
  const [showAllFunnel, setShowAllFunnel] = useState(false)
  const [showAllEmail, setShowAllEmail] = useState(false)

  const openModal = (project: Project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  const webProjects = projects.filter(p => p.category === 'web')
  const funnelProjects = projects.filter(p => p.category === 'funnel')
  const emailProjects = projects.filter(p => p.category === 'email')

  const renderProjectCard = (project: Project, index: number) => (
    <div
      key={project.id}
      className={`project-card transition-all duration-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${(index + 3) * 200}ms` }}
      onClick={() => openModal(project)}
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-150 hover:scale-105"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
        
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs font-medium"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>
      </div>
    </div>
  )

  return (
    <section ref={ref} className="section-padding bg-muted/30 py-24">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Featured Projects
          </h2>
          <p className={`text-xl text-muted-foreground transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Some of my works
          </p>
        </div>
        
        <Tabs defaultValue="web" className="w-full">
          <div className="flex justify-center mb-16">
            <TabsList className="inline-flex flex-wrap border-b border-border/50 bg-transparent p-0 gap-2 md:gap-6">
              <TabsTrigger 
                value="web"
                className="relative rounded-none border-b-2 border-transparent bg-transparent px-3 md:px-6 pb-3 pt-2 font-semibold text-sm md:text-base text-muted-foreground shadow-none transition-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 data-[state=active]:border-primary data-[state=active]:text-foreground data-[state=active]:bg-transparent data-[state=active]:shadow-none"
              >
                Web & UI/UX Development
              </TabsTrigger>
              <TabsTrigger 
                value="funnel"
                className="relative rounded-none border-b-2 border-transparent bg-transparent px-3 md:px-6 pb-3 pt-2 font-semibold text-sm md:text-base text-muted-foreground shadow-none transition-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 data-[state=active]:border-primary data-[state=active]:text-foreground data-[state=active]:bg-transparent data-[state=active]:shadow-none"
              >
                Funnels
              </TabsTrigger>
              <TabsTrigger 
                value="email"
                className="relative rounded-none border-b-2 border-transparent bg-transparent px-3 md:px-6 pb-3 pt-2 font-semibold text-sm md:text-base text-muted-foreground shadow-none transition-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 data-[state=active]:border-primary data-[state=active]:text-foreground data-[state=active]:bg-transparent data-[state=active]:shadow-none"
              >
                Email Marketing
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="web">
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(showAllWeb ? webProjects : webProjects.slice(0, 6)).map((project, index) => renderProjectCard(project, index))}
            </div>
            {webProjects.length > 6 && (
              <div className="hidden md:flex justify-center mt-8">
                <Button
                  onClick={() => setShowAllWeb(!showAllWeb)}
                  variant="outline"
                  className="transition-all duration-150"
                >
                  {showAllWeb ? 'Show Less' : 'View More'}
                </Button>
              </div>
            )}
            <div className="md:hidden px-12">
              <Carousel opts={{ loop: true }} className="w-full">
                <CarouselContent>
                  {webProjects.map((project, index) => (
                    <CarouselItem key={project.id}>
                      {renderProjectCard(project, index)}
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </TabsContent>

          <TabsContent value="funnel">
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(showAllFunnel ? funnelProjects : funnelProjects.slice(0, 6)).map((project, index) => renderProjectCard(project, index))}
            </div>
            {funnelProjects.length > 6 && (
              <div className="hidden md:flex justify-center mt-8">
                <Button
                  onClick={() => setShowAllFunnel(!showAllFunnel)}
                  variant="outline"
                  className="transition-all duration-150"
                >
                  {showAllFunnel ? 'Show Less' : 'View More'}
                </Button>
              </div>
            )}
            <div className="md:hidden px-12">
              <Carousel opts={{ loop: true }} className="w-full">
                <CarouselContent>
                  {funnelProjects.map((project, index) => (
                    <CarouselItem key={project.id}>
                      {renderProjectCard(project, index)}
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </TabsContent>

          <TabsContent value="email">
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(showAllEmail ? emailProjects : emailProjects.slice(0, 6)).map((project, index) => renderProjectCard(project, index))}
            </div>
            {emailProjects.length > 6 && (
              <div className="hidden md:flex justify-center mt-8">
                <Button
                  onClick={() => setShowAllEmail(!showAllEmail)}
                  variant="outline"
                  className="transition-all duration-150"
                >
                  {showAllEmail ? 'Show Less' : 'View More'}
                </Button>
              </div>
            )}
            <div className="md:hidden px-12">
              <Carousel opts={{ loop: true }} className="w-full">
                <CarouselContent>
                  {emailProjects.map((project, index) => (
                    <CarouselItem key={project.id}>
                      {renderProjectCard(project, index)}
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  )
}
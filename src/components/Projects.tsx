import { useState } from "react"
import { ProjectModal } from "./ProjectModal"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import project1 from "@/assets/project1.jpg"
import project2 from "@/assets/project2.jpg"
import project3 from "@/assets/project3.jpg"

interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  images: string[]
  liveUrl: string
  thumbnail: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution built with React and Node.js. Features include user authentication, product management, shopping cart functionality, and secure payment processing. The application follows modern design principles with a focus on user experience and mobile responsiveness.",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Express.js"],
    images: [project1, project1, project1], // In real project, you'd have multiple images
    liveUrl: "https://example-ecommerce.com",
    thumbnail: project1
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application that helps teams organize their work efficiently. Built with React and Firebase, it features real-time updates, drag-and-drop functionality, team collaboration tools, and detailed project analytics.",
    technologies: ["React", "Firebase", "Material-UI", "JavaScript"],
    images: [project2, project2, project2],
    liveUrl: "https://example-taskapp.com",
    thumbnail: project2
  },
  {
    id: 3,
    title: "Restaurant Website",
    description: "A modern restaurant website featuring online menu browsing, table reservations, and customer reviews. Built with responsive design principles and optimized for performance. Includes an admin panel for menu management and reservation tracking.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    images: [project3, project3, project3],
    liveUrl: "https://example-restaurant.com",
    thumbnail: project3
  }
]

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const { ref, isVisible } = useScrollAnimation()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (project: Project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  return (
    <section ref={ref} className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Featured Projects
          </h2>
          <p className={`text-xl text-muted-foreground transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Some of my recent work
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${(index + 3) * 200}ms` }}
              onClick={() => openModal(project)}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-4">
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
          ))}
        </div>
      </div>
      
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  )
}
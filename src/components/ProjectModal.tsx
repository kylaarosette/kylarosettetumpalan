import { X, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

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

interface ProjectModalProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    setCurrentImageIndex(0)
    setDirection(0)
  }, [project?.id])

  if (!project) return null

  const nextImage = () => {
    setDirection(1) // Moving right
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length)
  }

  const prevImage = () => {
    setDirection(-1) // Moving left
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length)
  }

  // Animation variants for horizontal slide
  const slideVariants = {
    initial: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%', // Start from right if next, left if prev
      opacity: 0,
    }),
    animate: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? '-100%' : '100%', // Exit to left if next, right if prev
      opacity: 0,
    }),
  }

  // Animation variants for fade
  const fadeVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  }

  const isFunnelOrEmail = project.category === 'funnel' || project.category === 'email'

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[95vw] md:max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl max-h-[90vh] overflow-y-auto overflow-x-hidden p-4 md:p-6">
        {isFunnelOrEmail ? (
          // Simplified view for Funnels and Email Marketing - only image slider
          <div className="space-y-6">
            <div className="relative w-full bg-muted/20 rounded-lg overflow-hidden">
              <div className="relative w-full">
                <AnimatePresence initial={false}>
                  <motion.img
                    key={currentImageIndex}
                    src={project.images[currentImageIndex]}
                    alt={`${project.title} - Image ${currentImageIndex + 1}`}
                    className="w-full h-auto bg-background/5"
                    variants={fadeVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                </AnimatePresence>
              </div>
              
              {project.images.length > 1 && (
                <>
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute left-1 md:left-2 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background/90 transition-all duration-200 h-8 w-8 md:h-10 md:w-10"
                    onClick={prevImage}
                  >
                    <ChevronLeft className="h-3 w-3 md:h-4 md:w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute right-1 md:right-2 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background/90 transition-all duration-200 h-8 w-8 md:h-10 md:w-10"
                    onClick={nextImage}
                  >
                    <ChevronRight className="h-3 w-3 md:h-4 md:w-4" />
                  </Button>
                  
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {project.images.map((_, index) => (
                      <button
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all duration-200 ${
                          index === currentImageIndex ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
                        }`}
                        onClick={() => {
                          setDirection(index > currentImageIndex ? 1 : -1)
                          setCurrentImageIndex(index)
                        }}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        ) : (
          // Full view for Web & UI/UX projects
          <div className="space-y-6">
            {/* Image Slider */}
            <div className="relative w-full bg-muted/20 rounded-lg overflow-hidden">
              <div className="relative aspect-video">
                <AnimatePresence initial={false} custom={direction}>
                  <motion.img
                    key={currentImageIndex}
                    src={project.images[currentImageIndex]}
                    alt={`${project.title} - Image ${currentImageIndex + 1}`}
                    className="absolute top-0 left-0 w-full h-full object-contain bg-background/5"
                    variants={slideVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    custom={direction}
                  />
                </AnimatePresence>
              </div>
              
              {project.images.length > 1 && (
                <>
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute left-1 md:left-2 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background/90 transition-all duration-200 h-8 w-8 md:h-10 md:w-10"
                    onClick={prevImage}
                  >
                    <ChevronLeft className="h-3 w-3 md:h-4 md:w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute right-1 md:right-2 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background/90 transition-all duration-200 h-8 w-8 md:h-10 md:w-10"
                    onClick={nextImage}
                  >
                    <ChevronRight className="h-3 w-3 md:h-4 md:w-4" />
                  </Button>
                  
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {project.images.map((_, index) => (
                      <button
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all duration-200 ${
                          index === currentImageIndex ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
                        }`}
                        onClick={() => {
                          setDirection(index > currentImageIndex ? 1 : -1)
                          setCurrentImageIndex(index)
                        }}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Project Info */}
            <div>
              <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
              
              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>
              
              {/* Visit Project Button */}
              {project.liveUrl && (
                <Button 
                  onClick={() => window.open(project.liveUrl, '_blank')}
                  className="hero-button"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Visit Project
                </Button>
              )}
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/ThemeToggle'
import { Menu, X } from 'lucide-react'
import { useTheme } from "next-themes"
import logoLight from "@/assets/logo-b.png"
import logoDark from "@/assets/logo-w.png"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-md border-b border-border/50 shadow-sm' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Button
              variant="ghost"
              className="p-2 hover:bg-transparent"
              onClick={() => scrollToSection('hero')}
            >
              <img
                src={theme === 'dark' ? logoDark : logoLight}
                alt="Logo"
                className="h-20 w-auto transition-opacity duration-200"
              />
            </Button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Button
              variant="ghost"
              className="hover:text-primary transition-colors"
              onClick={() => scrollToSection('tech-stack')}
            >
              Skills
            </Button>
            <Button
              variant="ghost"
              className="hover:text-primary transition-colors"
              onClick={() => scrollToSection('projects')}
            >
              Projects
            </Button>
            <Button
              variant="ghost"
              className="hover:text-primary transition-colors"
              onClick={() => scrollToSection('contact')}
            >
              Contact
            </Button>
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border/20 bg-background/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Button
                variant="ghost"
                className="w-full text-left justify-start hover:text-primary"
                onClick={() => scrollToSection('tech-stack')}
              >
                Skills
              </Button>
              <Button
                variant="ghost"
                className="w-full text-left justify-start hover:text-primary"
                onClick={() => scrollToSection('projects')}
              >
                Projects
              </Button>
              <Button
                variant="ghost"
                className="w-full text-left justify-start hover:text-primary"
                onClick={() => scrollToSection('contact')}
              >
                Contact
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
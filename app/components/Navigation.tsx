'use client'

import { Github, GraduationCap, Linkedin, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/orlando-code',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/orlandotimm/',
    icon: Linkedin,
  },
  {
    name: 'Google Scholar',
    url: 'https://scholar.google.com/citations?user=vI-ipk4AAAAJ&hl=en',
    icon: GraduationCap,
  },
]

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Blog', href: '/blog' },
  { name: 'CV', href: '/cv' },
  { name: 'Contact', href: '/contact' },
]

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center justify-between h-16">
          {/* Logo (left) */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-primary-600 hidden sm:block">
              Orlando Timmerman
            </Link>
          </div>
          
          {/* Nav links (center) - hidden on mobile */}
          <div className="hidden md:flex items-center space-x-6 justify-center absolute left-1/2 top-0 transform -translate-x-1/2 h-16">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`nav-link ${pathname === item.href ? 'active' : ''}`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          
          {/* Social links (right) - hidden on mobile */}
          <div className="hidden md:flex items-center space-x-4">
            {socialLinks.map((social) => {
              const IconComponent = social.icon
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  title={social.name}
                >
                  <IconComponent />
                </a>
              )
            })}
          </div>
          
          {/* Mobile menu button (center on mobile) */}
          <div className="md:hidden flex-1 flex justify-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-b border-gray-200">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  pathname === item.href
                    ? 'text-primary-600 bg-primary-50'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 pb-2 border-t border-gray-200">
              <div className="flex items-center space-x-4 px-3">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                      title={social.name}
                    >
                      <IconComponent />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

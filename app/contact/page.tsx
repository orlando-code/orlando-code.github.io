'use client'

import { Github, Linkedin, Mail, MapPin } from 'lucide-react'
import { useState } from 'react'

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    
    try {
      const response = await fetch('https://formspree.io/f/meozeqjl', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })

      if (response.ok) {
        setIsSubmitted(true)
        e.currentTarget.reset()
      } else {
        throw new Error('Submission failed')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('There was an error sending your message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Questions, feedback, comments and collaborations all welcome! Get in touch via the most relevant platform, or just email me directly.
          </p>
        </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="card text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex flex-col items-center">
                  <Mail className="h-6 w-6 text-primary-600 mb-2 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <span>rt582 . at . cam.ac.uk</span>
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <MapPin className="h-6 w-6 text-primary-600 mb-2 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                    <p className="text-gray-600">
                      Cambridge, UK
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="card">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Connect with Me</h2>
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://github.com/orlando-code"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-colors duration-200"
                >
                  <Github className="h-6 w-6 text-gray-600 mr-3" />
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">GitHub</h3>
                    <p className="text-gray-600 text-sm">@orlando-code</p>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/in/orlandotimm/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-colors duration-200"
                >
                  <Linkedin className="h-6 w-6 text-gray-600 mr-3" />
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">LinkedIn</h3>
                    <p className="text-gray-600 text-sm">@orlando-timmerman</p>
                  </div>
                </a>

                <a
                  href="https://researchgate.net/profile/Orlando-Timmerman"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-colors duration-200"
                >
                  <div className="h-6 w-6 text-gray-600 mr-3 flex items-center justify-center">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.586 0H4.414C1.974 0 0 1.974 0 4.414v15.172C0 22.026 1.974 24 4.414 24h15.172C22.026 24 24 22.026 24 19.586V4.414C24 1.974 22.026 0 19.586 0zM8.064 18.953c-2.055 0-3.718-1.663-3.718-3.718s1.663-3.718 3.718-3.718 3.718 1.663 3.718 3.718-1.663 3.718-3.718 3.718zm7.781-7.781c-1.329 0-2.406-1.077-2.406-2.406s1.077-2.406 2.406-2.406 2.406 1.077 2.406 2.406-1.077 2.406-2.406 2.406z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">ResearchGate</h3>
                    <p className="text-gray-600 text-sm">Research Profile</p>
                  </div>
                </a>

                <a
                  href="https://bsky.app/profile/did:plc:bzgueshahib2een6fglnb7ap"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-colors duration-200"
                >
                  <div className="h-6 w-6 text-gray-600 mr-3 flex items-center justify-center">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.586 0H4.414C1.974 0 0 1.974 0 4.414v15.172C0 22.026 1.974 24 4.414 24h15.172C22.026 24 24 22.026 24 19.586V4.414C24 1.974 22.026 0 19.586 0zM8.064 18.953c-2.055 0-3.718-1.663-3.718-3.718s1.663-3.718 3.718-3.718 3.718 1.663 3.718 3.718-1.663 3.718-3.718 3.718zm7.781-7.781c-1.329 0-2.406-1.077-2.406-2.406s1.077-2.406 2.406-2.406 2.406 1.077 2.406 2.406-1.077 2.406-2.406 2.406z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">Bluesky</h3>
                    <p className="text-gray-600 text-sm">@orlandotimm.bsky.social</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
} 
'use client'

import { Github, GraduationCap, Linkedin, Mail, MapPin } from 'lucide-react'
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
            <div className="card">
              <h2 className="text-2xl text-center font-bold text-gray-900 mb-6">Contact Information</h2>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-8">
                <div className="flex flex-col items-center flex-1">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Mail className="h-6 w-6 text-primary-600 mr-2 flex-shrink-0" />
                      <h3 className="font-semibold text-gray-900">Email</h3>
                    </div>
                    <a
                      href="mailto:rt582@cam.ac.uk"
                      className="inline-flex items-center text-gray-600 hover:text-primary-600 transition-colors"
                    >
                      rt582@cam.ac.uk
                    </a>
               
                  </div>
                </div>
                <div className="flex flex-col items-center flex-1">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <MapPin className="h-6 w-6 text-primary-600 mr-2 flex-shrink-0" />
                      <h3 className="font-semibold text-gray-900">Location</h3>
                    </div>
                    <p className="text-gray-600">
                      Cambridge, UK
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="card">
              <h2 className="text-2xl text-center font-bold text-gray-900 mb-6">Connect with Me</h2>
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
                  href="https://scholar.google.com/citations?user=vI-ipk4AAAAJ&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="col-span-2 justify-self-center w-[calc(50%-0.5rem)] flex items-center p-4 border border-gray-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-colors duration-200"
                >
                  <GraduationCap className="h-6 w-6 text-gray-600 mr-3" />
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">Google Scholar</h3>
                    <p className="text-gray-600 text-sm">Publications profile</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
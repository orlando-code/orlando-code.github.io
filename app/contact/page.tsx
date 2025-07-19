import { Github, Linkedin, Mail, MapPin, Send } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Questions, feedback, comments and collaborations all welcome! Just submit this form or email me directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="card">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn-primary w-full flex items-center justify-center"
              >
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="card">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-primary-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    rt582 . at . cam.ac.uk
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-primary-600 mt-1 mr-4 flex-shrink-0" />
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

            {/* Office Hours */}
            {/* <div className="card">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Office Hours</h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-700">Monday - Friday</span>
                  <span className="text-gray-600">9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Saturday</span>
                  <span className="text-gray-600">10:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Sunday</span>
                  <span className="text-gray-600">Closed</span>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                * All times are in GMT. Feel free to schedule a meeting via email.
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
} 
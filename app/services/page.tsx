import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional offerings in data visualisation and education. A custom solution for every client.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-8">
          {/* Custom Maps */}
          <Link href="/services/custom-maps" className="block">
            <div className="card hover:shadow-lg transition-all duration-300 cursor-pointer group">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Image placeholder */}
                <div className="relative h-64 lg:h-80 rounded-lg flex items-center justify-center" style={{ background: "rgba(255,197,14,255,0.1)" }}>
                  <Image
                    src="/pembroke.png"
                    alt="Custom Maps"
                    fill
                    style={{ objectFit: 'cover', borderRadius: '0rem' }}
                    className="rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 rounded-lg"></div>
                </div>
                
                {/* Content */}
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold text-gray-900 group-hover:text-[#82a35d] transition-colors duration-200">
                    Custom Maps
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Stuck for presents? Stuck for presentations? I create custom map visualisations for all occasions.
                  </p>
                  <div className="flex items-center text-[#92b568] font-medium group-hover:text-[#82a35d] transition-colors duration-200">
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* STEM Tutoring */}
          <Link href="/services/stem-tutoring" className="block">
            <div className="card hover:shadow-lg transition-all duration-300 cursor-pointer group">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Image placeholder */}
                <div
                  className="relative h-40 lg:h-80 flex items-center justify-center overflow-hidden"
                  style={{ background: "rgba(255,197,14,255,0.1)" }}
                >
                  <video
                    className="absolute inset-0 h-full w-auto max-w-full object-contain rounded-lg object-center left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                    src="/slideshow_eg.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                  {/* 
                    For best browser compatibility, consider providing the video in multiple formats (e.g., .mp4 and .webm):
                    <video className="absolute inset-0 w-full h-full object-cover rounded-lg" ...>
                      <source src="/slideshow.webm" type="video/webm" />
                      <source src="/slideshow.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 rounded-lg"></div>
                </div>
                
                {/* Content */}
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold text-gray-900 group-hover:text-[#fbc30c] transition-colors duration-200">
                    STEM Tutoring
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    One-on-one and small group tutoring in Science, Maths, and Computer Science. 
                    Specializing in physics with a focus on building strong foundational understanding and inspiring interest.
                  </p>
                  <div className="flex items-center text-[#ffc50e] font-medium group-hover:text-[#fbc30c] transition-colors duration-200">
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to get started?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Have a specific project in mind or want to discuss your requirements? 
              I'm always happy to chat about how I can help bring your ideas to life.
            </p>
            <Link href="/contact" className="btn-primary inline-flex items-center">
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 
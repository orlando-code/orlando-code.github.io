import { ArrowRight, FileText, Mail, User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'


export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-white">


      {/* Hero Section */}
      <section className="pt-20 pb-16 sm:pt-24 sm:pb-20 relative overflow-hidden">
        {/* Background favicon */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="relative w-96 h-96 opacity-20">
            <Image
              src="/favicon.png"
              alt=""
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Hello, I'm{' '}
              <span className="text-primary-600">Orlando</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              PhD researcher playing around with data, algorithms, and pixels to understand and predict changes in marine ecosystems, 
              with a focus on coral reef conservation and climate adaptation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/contact" className="btn-primary flex items-center">
                <Mail className="mr-2 h-4 w-4" />
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link href="/cv" className="btn-secondary flex items-center">
                <FileText className="mr-2 h-4 w-4" />
                View CV
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Explore My Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/blog" className="card hover:shadow-md transition-shadow duration-200 flex flex-col h-full">
              <div className="flex items-center mb-4">
                <FileText className="h-8 w-8 text-primary-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Blog</h3>
              </div>
              <p className="text-gray-600 mb-4 flex-grow">
                Unsolicited ruminations on climate, policy, and research. And pretty maps.
              </p>
              <span className="text-primary-600 font-medium flex items-center mt-auto">
                Read Articles
                <ArrowRight className="ml-2 h-4 w-4" />
              </span>
            </Link>

            <Link href="/cv" className="card hover:shadow-md transition-shadow duration-200 flex flex-col h-full">
              <div className="flex items-center mb-4">
                <User className="h-8 w-8 text-primary-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">CV</h3>
              </div>
              <p className="text-gray-600 mb-4 flex-grow">
                Academic, work, and other activities.
              </p>
              <span className="text-primary-600 font-medium flex items-center mt-auto">
                View CV
                <ArrowRight className="ml-2 h-4 w-4" />
              </span>
            </Link>

            <Link href="/contact" className="card hover:shadow-md transition-shadow duration-200 flex flex-col h-full">
              <div className="flex items-center mb-4">
                <Mail className="h-8 w-8 text-primary-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Contact</h3>
              </div>
              <p className="text-gray-600 mb-4 flex-grow">
                Get in touch for collaborations or questions.
              </p>
              <span className="text-primary-600 font-medium flex items-center mt-auto">
                Contact Me
                <ArrowRight className="ml-2 h-4 w-4" />
              </span>
            </Link>
          </div>
          {/* Services square below, full width and same height as the above grid items */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="col-span-1 md:col-span-3">
              <Link
                href="/services"
                className="card hover:shadow-md transition-shadow duration-200 flex flex-col items-center h-full w-full"
                style={{ minHeight: '100%' }}
              >
                <div className="flex items-center mb-4 mt-2">
                  <span className="inline-flex items-center justify-center rounded-full bg-primary-50 p-2 mr-3">
                    <span className="sr-only">Services</span>
                    <svg className="h-8 w-8 text-primary-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7V5a3 3 0 00-6 0v2M5 9h14a2 2 0 012 2v7a2 2 0 01-2 2H5a2 2 0 01-2-2v-7a2 2 0 012-2z" />
                    </svg>
                  </span>
                  <h3 className="text-xl font-semibold text-gray-900">Services</h3>
                </div>
                <p className="text-gray-600 mb-4 text-center">
                  Data analysis, visualization, and tutoring.
                </p>
                <span className="text-primary-600 font-medium flex items-center mt-auto mb-2">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Blog Posts */}

      {/*
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Recent Posts</h2>
            <Link href="/blog" className="text-primary-600 hover:text-primary-700 font-medium">
              View All Posts →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Getting Started with Next.js
              </h3>
              <p className="text-gray-600 mb-4">
                A comprehensive guide to building modern web applications with Next.js and React.
              </p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>March 15, 2024</span>
                <span>5 min read</span>
              </div>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                The Future of Web Development
              </h3>
              <p className="text-gray-600 mb-4">
                Exploring emerging trends and technologies that will shape the future of web development.
              </p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>March 10, 2024</span>
                <span>8 min read</span>
              </div>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Building Responsive Layouts
              </h3>
              <p className="text-gray-600 mb-4">
                Best practices for creating websites that work beautifully on all devices.
              </p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>March 5, 2024</span>
                <span>6 min read</span>
              </div>
            </div>
          </div>
        </div>
      </section>*/}

    </div>
  )
} 
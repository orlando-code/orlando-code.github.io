import { ArrowRight, FileText, Mail, User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import FeaturedCard from './components/FeaturedCard'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-white">
      {/* Hero Section */}
      <section className="pt-20 pb-16 sm:pt-24 sm:pb-20 relative overflow-hidden">
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
              Hello, I&apos;m{' '}
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

          <div className="mt-12">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 text-center mb-6">
              Featured projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeaturedCard
                href="/coral-cover-economics/"
                title="Coral cover economics"
                description="Bayesian coral cover modelling meets economic valuation — projecting tourism revenue losses as reefs decline."
                imageSrc="/featured/coral-cover-economics.svg"
                imageAlt="Coral cover economics project"
                cta="Open dashboard"
              />
              <FeaturedCard
                href="/explore-icrs-2026/"
                title="ICRS 2026 Explorer"
                description="Interactive map, emissions estimates, and co-authorship network for ICRS in Auckland."
                imageSrc="/featured/icrs-explorer.svg"
                imageAlt="ICRS 2026 explorer map"
                cta="Open explorer"
              />
              <FeaturedCard
                href="https://pypi.org/project/esgpull-plus/"
                title="esgpull-plus"
                description="YAML-driven ESGF downloads, CDO regridding, and CMIP6 surface/seafloor extraction — on PyPI."
                imageSrc="/featured/esgpull-plus.svg"
                imageAlt="esgpull-plus data pipeline"
                cta="View on PyPI"
                external
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

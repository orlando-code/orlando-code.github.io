import { ArrowLeft, Briefcase, Gift, Map } from 'lucide-react'
import Link from 'next/link'

export default function CustomMapsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Back to services link */}
        <Link 
          href="/services"
          className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8 font-medium"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Services
        </Link>

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-100 rounded-full mb-6">
            <Map className="h-10 w-10 text-primary-600" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Custom Maps
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From unique gifts to professional visualisations, I create custom maps for all occasions.
          </p>
        </div>

        {/* Service Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Maps for Presents */}
          <Link href="/services/custom-maps/presents" className="block">
            <div className="card hover:shadow-lg transition-all duration-300 cursor-pointer group h-full flex flex-col">
              <div className="text-center flex flex-col h-full items-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
                  <Gift className="h-8 w-8 text-[#92b568]" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#92b568] transition-colors duration-200">
                  Maps for Presents
                </h2>
                <p className="text-gray-600 mb-6 flex-grow">
                  Personalized maps for birthdays, anniversaries, and any special occasion. 
                  Perfect for the person who has everything but a fancy map on their wall.
                </p>
                <div className="flex items-center justify-center text-[#92b568] font-medium group-hover:text-[#82a35d] transition-colors duration-200">
                  Explore Gift Options
                </div>
              </div>
            </div>
          </Link>

          {/* Professional Maps */}
          <Link href="/services/custom-maps/professional" className="block">
            <div className="card hover:shadow-lg transition-all duration-300 cursor-pointer group h-full flex flex-col">
              <div className="text-center flex flex-col h-full items-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                  <Briefcase className="h-8 w-8 text-primary-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-200">
                  Professional Maps
                </h2>
                <p className="text-gray-600 mb-6 flex-grow">
                  Publication-ready figures, research visualizations, and professional data mapping for academic and commercial use.
                </p>
                <div className="flex items-center justify-center text-primary-600 font-medium group-hover:text-primary-700 transition-colors duration-200">
                  View Professional Services
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Contact CTA */}
        <div className="text-center bg-gray-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Not sure which service you need?
          </h3>
          <p className="text-gray-600 mb-6">
            Let's chat about your project and I'll help you choose the right option.
          </p>
          <Link href="/contact" className="btn-primary inline-flex items-center">
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  )
} 
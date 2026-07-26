import { ArrowLeft, Calendar, CheckCircle, Mail, Map } from 'lucide-react'
import Link from 'next/link'

export default function ProfessionalMapsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Back to services link */}
        <Link 
          href="/services/custom-maps"
          className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8 font-medium"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Custom Maps
        </Link>

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-100 rounded-full mb-6">
            <Map className="h-10 w-10 text-primary-600" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Professional Maps
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Publication-ready figures, research visualizations, and professional data mapping 
            for academic and business use.
          </p>
        </div>

        {/* What I offer */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">What I Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Research Maps</h3>
                  <p className="text-gray-600">Publication-ready figures for academic papers, theses, and research presentations.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Data Visualization</h3>
                  <p className="text-gray-600">Custom charts, graphs, and spatial data visualizations that tell your story clearly.</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Interactive Maps</h3>
                  <p className="text-gray-600">Web-based interactive visualizations for online presentations and reports.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Consultation</h3>
                  <p className="text-gray-600">Expert advice on data visualization best practices and design principles.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* My expertise */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">My Expertise</h2>
          <div className="bg-gray-50 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Technical Skills</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Python (matplotlib, seaborn, plotly)</li>
                  <li>• R (ggplot2, leaflet)</li>
                  <li>• QGIS and ArcGIS</li>
                  <li>• JavaScript (D3.js, Mapbox, GEE)</li>
                  <li>• Adobe Creative Suite</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Specializations</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Marine and environmental data</li>
                  <li>• Climate change visualizations</li>
                  <li>• Scientific publications</li>
                  <li>• Policy and outreach materials</li>
                  <li>• Educational content</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-600 font-bold">1</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Consultation</h3>
              <p className="text-gray-600">We discuss your data, goals, and requirements to understand your vision.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-600 font-bold">2</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Design & Creation</h3>
              <p className="text-gray-600">I create your visualization using appropriate tools and design principles.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-600 font-bold">3</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Delivery</h3>
              <p className="text-gray-600">You receive high-quality files in your preferred format with usage rights.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-primary-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to create something amazing?
          </h3>
          <p className="text-gray-600 mb-6">
            Let's discuss your project and how I can help bring your data to life.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/contact" className="btn-primary inline-flex items-center">
              <Mail className="mr-2 h-4 w-4" />
              Get in Touch
            </Link>
            <Link href="/cv" className="btn-secondary inline-flex items-center">
              <Calendar className="mr-2 h-4 w-4" />
              View My Work
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 
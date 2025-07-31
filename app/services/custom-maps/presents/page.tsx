import { ArrowLeft, Calendar, Gift, Mail } from 'lucide-react'
import Link from 'next/link'

export default function MapsForPresentsPage() {
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
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
            <Gift className="h-10 w-10 text-[#92b568]" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Maps for Presents
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Thoughtful, personalized map gifts for birthdays, anniversaries, and any other special occasion. 
            Perfect for the person who has everything but a fancy map on their wall.
          </p>
        </div>

        {/* Gallery */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Example Gifts</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-100 rounded-lg p-4 text-center">
              <div className="w-full h-100 bg-gray-200 rounded mb-2 flex items-center justify-center">
                <img
                  src="/pembroke.png"
                  alt="A circular map centred on Pembroke College, Cambridge"
                  className="object-contain h-full w-full rounded"
                  style={{ maxHeight: '100%', maxWidth: '100%' }}
                />
              </div>
              <p className="text-sm text-gray-600">Cambridge can feel like its own complete world</p>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 text-center">
              <div 
                className="w-full aspect-[3/3] bg-gray-200 rounded mb-2 overflow-hidden"
                style={{ position: 'relative' }}
              >
                <img
                  src="/lausanne.png"
                  alt="A slice of Lausanne showing a ferry port on the lake a large train station"
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  style={{ objectPosition: 'left' }}
                />
              </div>
              <p className="text-sm text-gray-600">Life in Lausanne, Switzerland</p>
            </div>

            
            <div className="bg-gray-100 rounded-lg p-4 text-center">
              <div className="w-full h-100 bg-gray-200 rounded mb-2 flex items-center justify-center">
                <img
                  src="/bristol.png"
                  alt="A busy map of Bristol showing the city centre and the surrounding area"
                  className="object-contain h-full w-full rounded"
                  style={{ maxHeight: '100%', maxWidth: '100%' }}
                />
              </div>
              <p className="text-sm text-gray-600">Bristol: great from the ground; beautiful from above</p>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 text-center">
              <div className="w-full h-100 bg-gray-200 rounded mb-2 flex items-center justify-center">
                <img
                  src="/london.png"
                  alt="A map of London featuring part of Regent's canal and and railway tracks"
                  className="object-contain h-full w-full rounded"
                  style={{ maxHeight: '100%', maxWidth: '100%' }}
                />
              </div>
              <p className="text-sm text-gray-600">Meanwhile, somewhere near Islington...</p>
            </div>
          </div>
        </div>

        {/* Explain where these maps mostly come from */}
        <div className="mb-16">
          {/* <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Where do these maps come from?</h2> */}
          <p className="text-gray-600 mb-4">
            I make these maps by adapting a public Python package called <a href="https://github.com/marceloprates/prettymaps" className="text-primary-600 hover:text-primary-700">prettymaps</a>. I contribute to this amazing tool which ingests <a href="https://www.openstreetmap.org/" className="text-primary-600 hover:text-primary-700">OpenStreetMap</a> data and plots it using the <a href="https://shapely.readthedocs.io/en/stable/" className="text-primary-600 hover:text-primary-700">Shapely</a> library. The library is completely open source and free to use under the GNU Affero General Public License. This allows commercial use and modification of the original code, so long as the license is preserved and the source is disclosed (what I'm doing here!).
          </p>
          <p className="text-gray-600">
            What does this mean for you? Your map will have a small, unintrusive tag at the bottom saying "<i>made using prettymaps</i>". It also means that you can use the code yourself instead of paying me!
          </p>
        </div>

        {/* How it works */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-[#92b568] font-bold">1</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Tell Me About Them</h3>
              <p className="text-gray-600">Share a meaningful place, some vibes, and maybe even some favourite colours.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-[#92b568] font-bold">2</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">I Create Your Map</h3>
              <p className="text-gray-600">I design a personalised map that which puts them at the centre of their world.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-[#92b568] font-bold">3</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Perfect Gift Ready</h3>
              <p className="text-gray-600">You receive a high-quality print-ready file or printed map to gift. UK postage included!</p>
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Pricing</h2>
          <div className="bg-gray-50 rounded-lg p-8">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Product</th>
                    <th className="text-right py-3 px-4 font-semibold text-gray-900">Price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="py-3 px-4">
                      <div>
                        <h4 className="font-medium text-gray-900">Digital Map File</h4>
                        <p className="text-sm text-gray-600">High-resolution PDF and SVG, ready to print</p>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-right font-medium text-[#92b568]">£25</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">
                      <div>
                        <h4 className="font-medium text-gray-900">Printed Map (A3)</h4>
                        <p className="text-sm text-gray-600">High-quality print on premium paper or canvas (+£10)</p>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-right font-medium text-[#92b568]">£45</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">
                      <div>
                        <h4 className="font-medium text-gray-900">Framed Map (A3)</h4>
                        <p className="text-sm text-gray-600">Printed and framed, ready to hang</p>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-right font-medium text-[#92b568]">£75</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">
                      <div>
                        <h4 className="font-medium text-gray-900">Custom Size</h4>
                        <p className="text-sm text-gray-600">Larger formats or special requirements</p>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-right font-medium text-[#92b568]">From £35</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-green-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to create a special gift?
          </h3>
          <p className="text-gray-600 mb-6">
            Let's discuss your idea and create something truly memorable.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/contact" className="btn-primary inline-flex items-center">
              <Mail className="mr-2 h-4 w-4" />
              Get Started
            </Link>
            <Link href="/services/custom-maps/professional" className="btn-secondary inline-flex items-center">
              <Calendar className="mr-2 h-4 w-4" />
              Professional Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 
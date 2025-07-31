import { ArrowLeft, BookOpen, CheckCircle, Clock, Mail, Users } from 'lucide-react'
import Link from 'next/link'

export default function STEMTutoringPage() {
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
          <div className="inline-flex items-center justify-center w-20 h-20 bg-yellow-100 rounded-full mb-6">
            <BookOpen className="h-10 w-10 text-yellow-600" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            STEM Tutoring
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            One-on-one and small group tutoring in Science, Technology, Engineering, and Mathematics.
          </p>
        </div>

        {/* What I offer */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">What I Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-yellow-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Physics</h3>
                  <p className="text-gray-600">From mechanics to quantum physics, I help build strong foundational understanding.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-yellow-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Mathematics</h3>
                  <p className="text-gray-600">Algebra, calculus, statistics, and mathematical reasoning skills.</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-yellow-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Programming</h3>
                  <p className="text-gray-600">Python, data analysis, and computational thinking skills.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-yellow-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Study Skills</h3>
                  <p className="text-gray-600">Problem-solving strategies, exam preparation, and learning techniques.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* My approach */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">My Approach</h2>
          <div className="bg-yellow-50 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Personalized Learning</h3>
                <p className="text-gray-600 mb-4">
                  Every student learns differently. I adapt my teaching style to match your learning preferences and pace.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Individual assessment of strengths and areas for improvement</li>
                  <li>• Customized lesson plans and practice materials</li>
                  <li>• Regular progress tracking and feedback</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Building Confidence</h3>
                <p className="text-gray-600 mb-4">
                  I focus on building both understanding and confidence in STEM subjects.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Encouraging questions and curiosity</li>
                  <li>• Breaking down complex concepts into manageable parts</li>
                  <li>• Celebrating progress and achievements</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Sessions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Session Types</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">One-on-One</h3>
              <p className="text-gray-600">Personalized attention and tailored learning experience.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Small Groups</h3>
              <p className="text-gray-600">Collaborative learning with peers (2-4 students).</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Flexible Scheduling</h3>
              <p className="text-gray-600">Sessions available in-person or online, day or evening.</p>
            </div>
          </div>
        </div>

        {/* My background */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">My Background</h2>
          <div className="bg-gray-50 rounded-lg p-8">
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-yellow-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">PhD Researcher at Cambridge</h3>
                  <p className="text-gray-600">Currently pursuing research in marine ecosystems and climate change.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-yellow-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Teaching Experience</h3>
                  <p className="text-gray-600">Academic tutor at Downing College, supervising undergraduate and graduate students.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-yellow-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Strong Academic Foundation</h3>
                  <p className="text-gray-600">First-class Physics degree with extensive experience in mathematics and programming.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-yellow-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to excel in STEM?
          </h3>
          <p className="text-gray-600 mb-6">
            Let's discuss your learning goals and how I can help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/contact" className="btn-primary inline-flex items-center">
              <Mail className="mr-2 h-4 w-4" />
              Get in Touch
            </Link>
            <Link href="/cv" className="btn-secondary inline-flex items-center">
              <BookOpen className="mr-2 h-4 w-4" />
              View My Background
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 
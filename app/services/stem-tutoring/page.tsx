import { ArrowLeft, BookOpen, CheckCircle, Clock, Mail, User, Users } from 'lucide-react';
import Link from 'next/link';

export default function STEMTutoringPage() {
  const reviews = [
    {
      text: "Orlando has been absolutely fabulous with our son, who had been struggling and falling behind at school. Orlando provided fantastic lessons structured, engaging lessons for him and we feel that he will return to school with good foundations to build upon.",
      author: "Parent of A-level Physics student"
    },
    {
      text: "Orlando is very helpful and always goes the extra mile. I always feel that he is genuinely interested in how I am progressing. He's easy to talk to and never makes me feel stupid. He helps me prepare for tests and reviews them after, which has made a real difference. He even made a picture of a cake for my birthday. This started out as a lockdown tutor but I am hoping to have him until my A-levels.",
      author: "GCSE and A-level Physics student"
    },
    {
      text: "Orlando is great with my son. He has made him feel very comfortable. Orlando is incredibly knowledgable about his subjects and this shows in his lessons which he plans very well and ensures they are enjoyable. Highly recommended.",
      author: "Parent of pre-Scottish Highers Physics and Maths student"
    },
    {
      text: "Orlando has really helped me with the sides of physics I found boring in class, managing to make them both interesting and challenging. Not only has he helped me with GCSE physics, he has also gone into more detail about more advanced topics which I am interested in, regardless of the level they are at because I will be choosing physics at A level. I would definitely recommend Orlando to anyone who doesn't enjoy physics, regardless of what grade they are expecting.",
      author: "GCSE and A-level Physics student"
    },
    {
      text: "I can’t say how pleased we are to have found Orlando. He is teaching my 16 year old son A’level Physics during lock down and it is making a real difference to my son’s confidence. Orlando prepares carefully for the lessons and adapts where needed. Recently my son failed a school physics test - Orlando immediately offered talk my son through it and we were able to book an additional lesson. He might be a keeper after lock down finishes!",
      author: "Parent of A-level Physics student"
    },
    {
      text: "Orlando is an absolutely amazing tutor, I've been tutored for a few months by him and he is very helpful in explaining topics. He tries to answer every question i ask as best he can even if it is p.h.d level things i ask. Orlando puts so much effort into planning my lessons, and it shows. He never makes me feel stupid and i am hoping to have him as my tutor as long as i can. Thank you Orlando.",
      author: "Parent of pre-N5 (Scottish system) student"
    },
    {
      text: "What a great find Orlando is. My son says he is by far the best tutor he's ever had . Orlando is very confident with A level physics, is fun in his delivery & really clear about work involved to get those top grades. Highly recommend him.",
      author: "Parent of A-level Physics student"
    },
    {
      text: "My son has been having lessons with Orlando for the past few months to compensate for the lack of pace with which his school is teaching the Physics syllabus. Orlando has a real gift for reading people, and has intuitively gauged the appropriate level and topics to engage my son’s interest and gain his utmost respect. Now that all the gaps are nearly plugged, we plan to continue lessons with Orlando in other subjects which could do with some intelligent external input.",
      author: "Parent of GCSE Maths and Physics student"
    },

  ];

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
          <h2 className="text-3xl font-bold text-gray-900 mb-8">What I offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-yellow-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Physics</h3>
                  <p className="text-gray-600">From mechanics to thermodynamics, I help build strong foundational understanding.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-yellow-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Mathematics</h3>
                  <p className="text-gray-600">Algebra, calculus, statistics, and everything in between.</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-yellow-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Programming</h3>
                  <p className="text-gray-600">Python, data analysis, machine learning, and the best use of AI tools.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-yellow-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Study Skills and Interest</h3>
                  <p className="text-gray-600">Lacking motivation? Or morbidly curious? A little inspiration goes a long way in either case!</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* My approach */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">My approach</h2>
          <div className="bg-yellow-50 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Personalized Learning</h3>
                <p className="text-gray-600 mb-4">
                  Every student learns differently. I adapt my teaching to match learning style and pace.
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
                  We're nothing without self-confidence.I build understanding and confidence simultaneously.
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Session types</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="h-8 w-8 text-yellow-600" />
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8">My background</h2>
          <div className="bg-gray-50 rounded-lg p-8">
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-yellow-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">PhD Researcher at the University of Cambridge</h3>
                  <p className="text-gray-600">Currently computing the impact of climate change on marine ecosystems.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-yellow-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Teaching Experience</h3>
                  <p className="text-gray-600">Academic tutor at Downing College, supervising undergraduate and summer school students.</p>
                  <p className="text-gray-600">Hundreds of additional hours of experience in one-on-one online tutoring for a range of subjects, students, and abilities.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-yellow-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Strong Academic Foundation</h3>
                  <p className="text-gray-600">First-class Physics BSc and MRes with extensive experience in mathematics and programming.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* My reviews */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">My reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 flex flex-col h-full">
                <div className="flex items-start mb-4 flex-grow">
                  <div className="text-2xl text-gray-400 mr-3">"</div>
                  <p className="text-gray-700 italic leading-relaxed">
                    {review.text}
                  </p>
                </div>
                <div className="text-sm text-gray-500 text-right mt-auto">— {review.author}</div>
              </div>
            ))}
          </div>
        </div>

              {/* Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-yellow-600 font-bold">1</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Contact and Free Consultation</h3>
              <p className="text-gray-600">We discuss your goals and expectations, and generally get a feel for things.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-yellow-600 font-bold">2</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">First Session</h3>
              <p className="text-gray-600">If you're happy to proceed, we'll schedule a short first session and see how things go.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-yellow-600 font-bold">3</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Ongoing Sessions</h3>
              <p className="text-gray-600">We meet as often as you like – availability-dependent – until you've reached your goals.</p>
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Pricing</h2>
          <p className="text-gray-600">
            I offer a range of pricing options to suit different needs and budgets including donation-based rates for those who may not otherwise be able to access such services. 
          </p>
          <p className="text-gray-600">
            If you're at all unsure, I offer a free consultation to discuss your goals and expectations: please get in touch!
          </p>
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
    // </div>
  )
} 
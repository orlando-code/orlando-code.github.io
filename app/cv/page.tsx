import { Calendar, ExternalLink, Mail, MapPin } from 'lucide-react'
import Link from 'next/link'

export default function CVPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Orlando Timmerman</h1>
              <p className="text-xl text-gray-600 mb-4">PhD Researcher</p>
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-2 sm:space-y-0 text-gray-600">
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                    rt582 . at . cam.ac.uk
                  
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>Cambridge, UK</span>
                </div>
                <div className="flex items-center">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  <a href="https://github.com/orlando-code" className="hover:text-primary-600">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
            <Link href="/contact" className="btn-primary flex items-center mt-4 lg:mt-0">
              <Mail className="h-4 w-4 mr-2" />
              <span className="text-center">
                Contact me<br />
                for a relevant version of this CV
              </span>
            </Link>
          </div>
        </div>

        {/* Research Summary */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Research Focus</h2>
          <p className="text-gray-700 leading-relaxed">
            Early-career researcher with the <a href="https://www.ai4er.ac.uk/" className="text-primary-600 hover:underline">AI for Environmental Risk CDT</a> at the University of Cambridge.
            I explore the opportunity for large ocean datasets to inform us about the future of marine ecosystems.
            In pursuit of interpretable, robust, and ultimately useful research outputs to guide policy and conservation interventions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Education */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Education</h2>
              <div className="space-y-8">
                <div className="border-l-4 border-primary-200 pl-6">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">PhD Researcher</h3>
                    <span className="text-gray-500 text-sm mt-1 sm:mt-0">2023 - Present</span>
                  </div>
                  <p className="text-primary-600 font-medium mb-3">University of Cambridge</p>
                  <p className="text-gray-700 mb-2">Supervisor: <a href="https://biomin.esc.cam.ac.uk/oscar-branson/" className="text-primary-600 hover:underline">Dr Oscar Branson</a></p>
                  <p className="text-gray-700 mb-2">
                    Quantitative meta-analysis of calcification rates under climate change; 
                    habitat and species distribution modelling using global climatologies; 
                    cutting-edge remote sensing of shallow-water ecosystems; 
                    data accessibility and campaigning for FAIR practices.</p>
                </div>

                <div className="border-l-4 border-primary-200 pl-6">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">MRes AI for Environmental Risk</h3>
                    <span className="text-gray-500 text-sm mt-1 sm:mt-0">2022 - 2023</span>
                  </div>
                  <p className="text-primary-600 font-medium mb-2">University of Cambridge</p>
                  <p className="text-gray-700 mb-2">First Class Honours with Distinction</p>
                  <p className="text-gray-700 mb-2">
                    Predicting hurricane damage using multimodal machine learning;
                    pilot project of learning relationship between environmental data and distribution of coral reefs of the eastern coast of Australia.  
                  </p>
                </div>

                <div className="border-l-4 border-primary-200 pl-6">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">BSc Physics</h3>
                    <span className="text-gray-500 text-sm mt-1 sm:mt-0">2018 - 2021</span>
                  </div>
                  <p className="text-primary-600 font-medium mb-2">University of Bristol</p>
                  <p className="text-gray-700">First Class Honours with Distinction • 86% Average • Norman Thompson Project Prize for best final-year project in the cohort</p>
                  <p className="text-gray-600 text-sm mt-1"></p>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Professional Experience</h2>
              <div className="space-y-8">
                  <div className="border-l-4 border-primary-200 pl-6">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">AAUS Scientific Diver</h3>
                    <span className="text-gray-500 text-sm mt-1 sm:mt-0">Summer 2024</span>
                  </div>
                  <p className="text-primary-600 font-medium mb-3">Bermuda Institute of Ocean Sciences</p>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Fully-qualified American Academy of Underwater Sciences (AAUS) <a href="https://www.aaus.org/AAUS/AAUS/Certification_Program.aspx" className="text-primary-600 hover:underline">Scientific Diver</a></li>
                  </ul>
                </div>

                <div className="border-l-4 border-primary-200 pl-6">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">Research Internship</h3>
                    <span className="text-gray-500 text-sm mt-1 sm:mt-0">Summer 2024</span>
                  </div>
                  <p className="text-primary-600 font-medium mb-3">Bermuda Institute of Ocean Sciences</p>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Applied physical and machine learning models to map fractional cover of shallow-water benthic ecosystems</li>
                    <li>• Utilized high-resolution hyperspectral aerial imagery for ecosystem mapping</li>
                    <li>• Developed novel approaches for marine habitat classification</li>
                  </ul>
                </div>

                <div className="border-l-4 border-primary-200 pl-6">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">Machine Learning Internship</h3>
                    <span className="text-gray-500 text-sm mt-1 sm:mt-0">Summer 2022</span>
                  </div>
                  <p className="text-primary-600 font-medium mb-3">Oxehealth</p>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Improved machine learning classification and localisation capability through data augmentation</li>
                    <li>• Conducted analysis of product performance across the company's clients</li>
                    <li>• Investigated edge cases and model robustness in healthcare applications</li>
                  </ul>
                </div>

                <div className="border-l-4 border-primary-200 pl-6">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">PADI Divemaster</h3>
                    {/* <span className="text-gray-500 text-sm mt-1 sm:mt-0">Gap Year</span> */}
                  </div>
                  <p className="text-primary-600 font-medium mb-3">Blue Season Bali Career Development Centre</p>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Organised and led diving expeditions as a qualified PADI Divemaster</li>
                    <li>• Gained hands-on experience with marine ecosystems and conservation</li>
                    <li>• Developed leadership and safety management skills</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Teaching Experience */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Teaching Experience</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-primary-200 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Academic Tutor</h3>
                  <p className="text-primary-600 font-medium mb-2">Downing College Cambridge</p>
                  <p className="text-gray-700">Teaching planetary physics and climate change for ages 15-18</p>
                </div>

                <div className="border-l-4 border-primary-200 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Supervision</h3>
                  <p className="text-primary-600 font-medium mb-2">University of Cambridge</p>
                  <p className="text-gray-700">Leading small group sessions (up to 3 students) for Quantitative Environmental Science (second-year undergraduate) and Data Science and Advanced Machine Learning (MRes)</p>
                </div>

                <div className="border-l-4 border-primary-200 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Demonstration</h3>
                  <p className="text-primary-600 font-medium mb-2">University of Cambridge</p>
                  <p className="text-gray-700">Part II Computing for Earth Sciences (third-year undergraduate) and Quantitative Environmental Science. Facilitating coding improvement and translating physical concepts into code</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Skills */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Technical Skills</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Fluent</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Git', 'Python', 'Xarray', 'Pandas', 'Dask', 'PyTorch', 'Google Earth Engine'].map((tech) => (
                      <span key={tech} className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Experienced</h3>
                  <div className="flex flex-wrap gap-2">
                    {['UNIX Shell', 'HPC', 'JavaScript', 'HTML & CSS', 'Creative Cloud', 'Affinity'].map((tech) => (
                      <span key={tech} className="bg-gray-50 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Positions of Responsibility */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Leadership & Service</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Calendar className="h-4 w-4 text-primary-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">Writer for Reefbites</h3>
                    <p className="text-gray-600 text-sm">International Coral Reef Society's early career science communication blog</p>
                    <p className="text-gray-500 text-xs">2025 - Present</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Calendar className="h-4 w-4 text-primary-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">Virtual Experience Project Lead</h3>
                    <p className="text-gray-600 text-sm">Climate Informatics 2024 - Programme Committee and submission reviewer</p>
                    <p className="text-gray-500 text-xs">2023 - 2024</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Calendar className="h-4 w-4 text-primary-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">Club Captain</h3>
                    <p className="text-gray-600 text-sm">University of Cambridge Triathlon Club</p>
                    <p className="text-gray-500 text-xs">2023 - 2024</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Calendar className="h-4 w-4 text-primary-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">President</h3>
                    <p className="text-gray-600 text-sm">Chaos - Award-winning Departmental Physics society (~1000 members)</p>
                    <p className="text-gray-500 text-xs">2020 - 2021</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Publications & Conferences */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Publications</h2>
              <div className="space-y-4">
                <div className="border-l-4 border-primary-200 pl-4">
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">
                    "Persistence of coral reef structures into the 21st century"
                  </h3>
                  <p className="text-gray-600 text-sm mb-1">C. Cornwall, O. Timmerman et al. (2025)</p>
                  <p className="text-gray-500 text-xs mb-1"><b>In review:</b> Review paper and quantitative meta-analysis, Nature Reviews Earth & Environment</p>
                </div>

                <div className="border-l-4 border-primary-200 pl-4">
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">
                    "Exploring Multimodal AI beyond vision and language"
                  </h3>
                  <p className="text-gray-600 text-sm mb-1">Journal article co-authorship (2024)</p>
                  <p className="text-gray-500 text-xs"><b>In review:</b> Review and horizon scan, Nature Machine Intelligence</p>
                </div>

                <div className="border-l-4 border-primary-200 pl-4">
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">
                    Best Poster Award
                  </h3>
                  <p className="text-gray-600 text-sm mb-1">Reef Conservation UK, London (Dec 2024)</p>
                  <p className="text-gray-500 text-xs">"Past, present, and predicted environmental suitability of the world's reefs"</p>
                </div>
              </div>
            </div>

            {/* Interests */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Interests</h2>
              <div className="space-y-3 text-sm text-gray-700">
                <p><strong>Environmental Leadership:</strong> Founded environmental group, led university-wide climate action assembly, removed single-use plastics from catering</p>
                <p><strong>Science Communication:</strong> Activities at Cambridge Festival 2024, Reefbites writer</p>
                <p><strong>Outdoor Activities:</strong> Wild swimming, bike-packing, freediving, triathlon</p>
                <p><strong>Languages:</strong> French (B2)</p>
                <p><strong>Innovation:</strong> Entrepreneurship, co-ran student-led minimal waste food co-operative</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 
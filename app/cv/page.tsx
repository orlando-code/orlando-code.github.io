import { Calendar, Mail } from 'lucide-react'
import Link from 'next/link'

export default function CVPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_min(16rem,35%)] gap-6 md:gap-8 md:items-center">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Orlando Timmerman</h1>
              <p className="text-xl text-gray-600 flex flex-wrap items-center gap-x-3 gap-y-1">
                <span>PhD Researcher</span>
                <span className="text-gray-300 hidden sm:inline" aria-hidden="true">·</span>
                <a
                  href="mailto:rt582@cam.ac.uk"
                  className="inline-flex items-center text-base text-gray-600 hover:text-primary-600"
                >
                  <Mail className="h-4 w-4 mr-1.5 shrink-0" />
                  rt582@cam.ac.uk
                </a>
              </p>
            </div>
            <p className="text-sm text-gray-600 md:text-right md:border-l md:border-gray-100 md:pl-8 pt-6 border-t border-gray-100 md:pt-0 md:border-t-0">
              <Link href="/contact" className="text-primary-600 hover:text-primary-700 font-medium">
                Contact me
              </Link>{' '}
              for a customised version of this CV.
            </p>
          </div>
        </div>

        {/* Summary */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Summary</h2>
          <p className="text-gray-700 leading-relaxed">
            Third-year PhD student with extensive experience applying data science and machine learning to
            interdisciplinary areas of the physical sciences, including climate, remote sensing, and marine ecology. A particular focus on making data more accessible, engaging, and impactful.
            {/* Strong project management and interpersonal skills across academic and industry settings. Driven to
            produce research that is robust, accessible, and has real-world application and impact. */}
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
                    <h3 className="text-xl font-semibold text-gray-900">PhD Computational Ecology, Data Science & Machine Learning</h3>
                    <span className="text-gray-500 text-sm mt-1 sm:mt-0">2023 – Present</span>
                  </div>
                  <p className="text-primary-600 font-medium mb-2">University of Cambridge · AI for Environmental Risk CDT</p>
                  <p className="text-gray-700">Supervisor: <a href="https://biomin.esc.cam.ac.uk/oscar-branson/" className="text-primary-600 hover:underline">Dr Oscar Branson</a></p>
                </div>

                <div className="border-l-4 border-primary-200 pl-6">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">MRes AI for Environmental Risk</h3>
                    <span className="text-gray-500 text-sm mt-1 sm:mt-0">2022 – 2023</span>
                  </div>
                  <p className="text-primary-600 font-medium mb-2">University of Cambridge</p>
                  <p className="text-gray-700">First Class Honours with Distinction</p>
                </div>

                <div className="border-l-4 border-primary-200 pl-6">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">BSc Physics</h3>
                    <span className="text-gray-500 text-sm mt-1 sm:mt-0">2018 – 2021</span>
                  </div>
                  <p className="text-primary-600 font-medium mb-2">University of Bristol</p>
                  <p className="text-gray-700">
                    First Class Honours with Distinction · 86% · Norman Thompson Project Prize for best
                    final-year project in the cohort (machine learning for climate modelling)
                  </p>
                </div>

                <div className="border-l-4 border-primary-200 pl-6">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">School and Sixth Form</h3>
                    <span className="text-gray-500 text-sm mt-1 sm:mt-0">2010 – 2017</span>
                  </div>
                  <p className="text-gray-700">A* grades in Maths, Further Maths, Physics, and Chemistry; A*s in 12 GCSEs</p>
                </div>
              </div>
            </div>
            {/* Research */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Research</h2>
              <p className="text-gray-700 leading-relaxed">
                I study how coral reef ecosystems respond to climate change using data science and machine learning:
                quantitative meta-analysis to forecast changes in calcification rates; species distribution models to
                project global reef range shifts; and Bayesian methods to forecast coral cover change and associated
                economic impacts. My work focuses on shallow-water tropical reefs to improve understanding, interrogate the
                limits of current datasets, and guide conservation efforts.
              </p>
            </div>

            {/* Employment & Teaching */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Employment & Teaching Experience</h2>
              <div className="space-y-8">
                <div className="border-l-4 border-primary-200 pl-6">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">Research Internship & <a href="https://www.aaus.org/AAUS/AAUS/Certification_Program.aspx" className="text-primary-600 hover:underline">AAUS Scientific Diver</a></h3>
                    <span className="text-gray-500 text-sm mt-1 sm:mt-0">Summer 2024</span>
                  </div>
                  <p className="text-primary-600 font-medium mb-3">Bermuda Institute of Ocean Sciences</p>
                  <p className="text-gray-700">
                    Applied physical and machine learning models to map fractional coral–algal–abiotic cover of
                    shallow-water benthic ecosystems using in-situ orthomosaics and high-resolution hyperspectral
                    aerial imagery.
                  </p>
                  <p className="text-gray-700">Qualified <a href="https://www.aaus.org/AAUS/AAUS/Certification_Program.aspx" className="text-primary-600 hover:underline">American Academy of Underwater Sciences (AAUS) Scientific Diver</a>.</p>
                </div>



                <div className="border-l-4 border-primary-200 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Open-source package maintainer</h3>
                  <p className="text-primary-600 font-medium mb-3">esgpull-plus, cdo-toolkit, & py-seaaroundus</p>
                  <p className="text-gray-700">
                    Author and maintainer of Python libraries for Earth System Grid Federation (ESGF) downloads and Coupled Model Intercomparison Project (CMIP6) NetCDF processing
                    (<a href="https://pypi.org/project/esgpull-plus/" className="text-primary-600 hover:underline">esgpull-plus</a>, <a href="https://pypi.org/project/cdo-toolkit/" className="text-primary-600 hover:underline">cdo-toolkit</a>), and programmatic access to <a href="https://www.seaaroundus.org/" className="text-primary-600 hover:underline">Sea Around Us</a> fisheries data
                    (<a href="https://github.com/orlandotimmerman/py-seaaroundus" className="text-primary-600 hover:underline">py-seaaroundus</a>).
                  </p>
                </div>

                <div className="border-l-4 border-primary-200 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Supervisor</h3>
                  <p className="text-primary-600 font-medium mb-2">University of Cambridge · Natural Sciences Tripos</p>
                  <p className="text-gray-700">
                    Quantitative Environmental Science (second-year undergraduate) and Data Science and Advanced
                    Machine Learning (MRes).
                  </p>
                </div>

                <div className="border-l-4 border-primary-200 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Academic Tutor</h3>
                  <p className="text-primary-600 font-medium mb-2">Downing College Cambridge</p>
                  <p className="text-gray-700">Teaching quantitative planetary and climate physics for ages 15–18.</p>
                </div>

                <div className="border-l-4 border-primary-200 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Demonstrator</h3>
                  <p className="text-primary-600 font-medium mb-2">University of Cambridge</p>
                  <p className="text-gray-700">
                    Part II Computing for Earth Sciences (third-year undergraduate) and Quantitative Environmental
                    Science. Translating physical
                    concepts into code and facilitating self-sufficient improvement of coding practices.
                  </p>
                </div>

                <div className="border-l-4 border-primary-200 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">PADI Divemaster</h3>
                  <p className="text-primary-600 font-medium mb-2">Blue Season Bali Career Development Centre</p>
                  <p className="text-gray-700">Planned, organised, and led dives as a qualified PADI Divemaster</p>
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
                    {['Git', 'Python', 'Xarray', 'Pandas', 'Dask', 'PyTorch', 'Google Earth Engine'].map((general) => (
                      <span key={general} className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                        {general}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Experienced</h3>
                  <div className="flex flex-wrap gap-2">
                    {['R', 'UNIX Shell', 'HPC', 'JavaScript', 'HTML & CSS', 'Creative Cloud', 'Affinity'].map((general) => (
                      <span key={general} className="bg-gray-50 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                        {general}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Certifications</h3>
                  <p className="text-gray-700 text-sm">
                    AAUS Scientific Diver · AIDA2 Freediving · PADI Divemaster
                  </p>
                </div>
              </div>
            </div>

            {/* Publications & Conferences */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Selected Publications & Talks</h2>
              <div className="space-y-4">
                <div className="border-l-4 border-primary-200 pl-4">
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">
                    <a href="https://www.nature.com/articles/s43017-026-00764-4" className="text-primary-600 hover:underline">Persistence of coral reef structures into the 21st century</a>
                  </h3>
                  <p className="text-gray-600 text-sm mb-1">C. Cornwall, O. Timmerman et al. (2026)</p>
                  <p className="text-gray-500 text-xs">Nature Reviews Earth & Environment. Best oral presentation, Reef Conservation UK 2025.</p>
                </div>

                <div className="border-l-4 border-primary-200 pl-4">
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">
                    <a href="https://www.nature.com/articles/s42256-025-01116-5" className="text-primary-600 hover:underline">Towards deployment-centric multimodal AI beyond vision and language</a>
                  </h3>
                  <p className="text-gray-600 text-sm mb-1">X. Liu et al. (2025)</p>
                  <p className="text-gray-500 text-xs">Nature Machine Intelligence</p>
                </div>

                <div className="border-l-4 border-primary-200 pl-4">
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">
                    Oceanographic drivers of carbon storage in European seagrass beds
                  </h3>
                  <p className="text-gray-600 text-sm mb-1">N. Gallo, O. Timmerman et al. (2026)</p>
                  <p className="text-gray-500 text-xs">In review</p>
                </div>

                <div className="border-l-4 border-primary-200 pl-4">
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">
                    Forecasting economic consequences of global coral reef degradation: Socioeconomic risk in a warming world
                  </h3>
                  <p className="text-gray-600 text-sm mb-1">O. Timmerman, M. Spalding, O. Branson (2026)</p>
                  <p className="text-gray-500 text-xs">Oral presentation, International Coral Reef Symposium (in prep)</p>
                </div>

                <div className="border-l-4 border-primary-200 pl-4">
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">
                    Past, present, and predicted environmental suitability of the world&apos;s reefs
                  </h3>
                  <p className="text-gray-600 text-sm mb-1">O. Timmerman, O. Branson (2024)</p>
                  <p className="text-gray-500 text-xs">Poster, Reef Conservation UK, London. Best Poster award.</p>
                </div>

                <div className="border-l-4 border-primary-200 pl-4">
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">
                    Prediction of future environmental suitability of coral reefs via multimodal machine learning
                  </h3>
                  <p className="text-gray-600 text-sm mb-1">O. Timmerman, O. Branson (2024)</p>
                  <p className="text-gray-500 text-xs">Oral presentation, European Coral Reef Symposium</p>
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
                    <h3 className="font-semibold text-gray-900 text-sm">Producer, <a href="https://scenes-climate-era.com/" className="text-primary-600 hover:underline">Scenes from the Climate Era</a></h3>
                    <p className="text-gray-600 text-sm">Pitched and produced a play by David Finnigan for the ADC Theatre, Cambridge</p>
                    <p className="text-gray-500 text-xs">2026</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Calendar className="h-4 w-4 text-primary-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">President, Cambridge Zero Postgraduate Academy</h3>
                    <p className="text-gray-600 text-sm">Steering committee organising postgraduate activities on behalf of <a href="https://www.zero.cam.ac.uk/" className="text-primary-600 hover:underline">Cambridge Zero</a></p>
                    <p className="text-gray-500 text-xs">2025 – 2026</p>
                  </div>
                </div>



                <div className="flex items-start">
                  <Calendar className="h-4 w-4 text-primary-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">Student Representative</h3>
                    <p className="text-gray-600 text-sm">AI for Environmental Risk Management Committee</p>
                    <p className="text-gray-500 text-xs">2025 – Present</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Calendar className="h-4 w-4 text-primary-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">Writer, Reefbites</h3>
                    <p className="text-gray-600 text-sm">International Coral Reef Society early-career science communication blog</p>
                    <p className="text-gray-500 text-xs">2025 – 2026</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Calendar className="h-4 w-4 text-primary-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">Sub-editor</h3>
                    <p className="text-gray-600 text-sm"><a href="https://www.cambridge.org/core/books/thriving-sustainably-on-planet-earth/8069C7252063AB7F058F0F3FE46CAFCE" className="text-primary-600 hover:underline">Thriving Sustainably on Planet Earth</a> – textbook of manifestos on engaging children with sustainability</p>
                    <p className="text-gray-500 text-xs">2024 – 2025</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Calendar className="h-4 w-4 text-primary-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">Virtual Experience Project Lead</h3>
                    <p className="text-gray-600 text-sm">Climate Informatics 2024 – programme committee and submission reviewer</p>
                    <p className="text-gray-500 text-xs">2023 – 2024</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Calendar className="h-4 w-4 text-primary-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">Club Captain</h3>
                    <p className="text-gray-600 text-sm">University of Cambridge Triathlon Club</p>
                    <p className="text-gray-500 text-xs">2023 – 2024</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Calendar className="h-4 w-4 text-primary-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">Seminar Organiser & Social Secretary</h3>
                    <p className="text-gray-600 text-sm">AI for Environmental Risk CDT</p>
                    <p className="text-gray-500 text-xs">2022 – 2023</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Calendar className="h-4 w-4 text-primary-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">President, Chaos</h3>
                    <p className="text-gray-600 text-sm">Award-winning departmental Physics society (~1000 members); previously Design & Promotions Representative</p>
                    <p className="text-gray-500 text-xs">2020 – 2021</p>
                  </div>
                </div>
              </div>
            </div>

            

            {/* Interests
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Interests</h2>
              <div className="space-y-3 text-sm text-gray-700">
                <p>
                  Founded an environmental group, led a university-wide assembly on climate action, removed
                  single-use plastics from catering, and co-ran a student-led minimal-waste food co-operative.
                </p>
                <p>
                  Science communication (Cambridge Festival 2024). Wild swimming, bike-packing, freediving, triathlon,
                  French, violin and singing (Grade VIII), and graphic and web design.
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

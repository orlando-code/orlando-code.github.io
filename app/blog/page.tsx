import { getAllPosts } from '../../lib/blog'
import BlogFilter from '../components/BlogFilter'

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Research notes, papers, packages, and the occasional preoccupying side-project.
          </p>
        </div>

        <BlogFilter posts={posts} />
      </div>
    </div>
  )
}

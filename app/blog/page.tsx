import { Calendar, Clock } from 'lucide-react';
import Link from 'next/link';
import { BlogPostMeta, getAllPosts, getCategoryStyle } from '../../lib/blog';

export default function BlogPage() {
  const posts = getAllPosts().filter(post => !post.draft);
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here I wrap up each week of research, interspersed with the occasional preoccupying side-project. 
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-16">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              No posts yet
            </h2>
            <p className="text-gray-600">
              Check back soon for new content!
            </p>
          </div>
        ) : (
          <div className="space-y-8">
            {posts.map((post: BlogPostMeta) => {
              const categoryStyle = getCategoryStyle(post.category);
              return (
                <article key={post.slug} className="card hover:shadow-md transition-shadow duration-200">
                  {/* Category label */}
                  {post.category && (
                    <div className="mb-4">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${categoryStyle.bg} ${categoryStyle.text} border ${categoryStyle.border}`}>
                        {post.category}
                      </span>
                    </div>
                  )}
                  
                  <Link href={`/blog/${encodeURI(post.slug)}`}>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-primary-600 transition-colors duration-200">
                      {post.title}
                    </h2>
                  </Link>
                  
                  <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </div>
                    {post.readTime && (
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {post.readTime}
                      </div>
                    )}
                  </div>

                  {post.excerpt && (
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                  )}

                  <Link 
                    href={`/blog/${encodeURI(post.slug)}`}
                    className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center"
                  >
                    Read more →
                  </Link>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </div>
  )
} 
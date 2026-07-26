import { Calendar, Clock } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import {
  BlogPostMeta,
  getCategoryCoverGradient,
  getCategoryStyle,
  resolveCoverImage,
} from '../../lib/blog';

interface BlogPostCardProps {
  post: BlogPostMeta;
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  const categoryStyle = getCategoryStyle(post.category);
  const coverSrc = resolveCoverImage(post.slug, post.cover);
  const gradient = getCategoryCoverGradient(post.category);
  const href = `/blog/${encodeURI(post.slug)}`;

  return (
    <article className="group card overflow-hidden p-0 hover:shadow-lg transition-all duration-300">
      <Link href={href} className="block">
        <div className="relative aspect-[2.4/1] overflow-hidden">
          {coverSrc ? (
            <Image
              src={coverSrc}
              alt={post.coverAlt || post.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 896px"
            />
          ) : (
            <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`}>
              <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_20%,white,transparent_35%),radial-gradient(circle_at_80%_0%,white,transparent_25%)]" />
              <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/25 to-transparent" />
            </div>
          )}
          {post.category && (
            <span
              className={`absolute top-4 left-4 inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider shadow-sm ${categoryStyle.bg} ${categoryStyle.text} border ${categoryStyle.border}`}
            >
              {post.category}
            </span>
          )}
        </div>
      </Link>

      <div className="p-6">
        <Link href={href}>
          <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-200">
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
          <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
        )}

        <Link
          href={href}
          className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center"
        >
          Read more →
        </Link>
      </div>
    </article>
  );
}

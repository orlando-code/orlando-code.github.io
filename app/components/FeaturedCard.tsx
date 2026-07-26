import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface FeaturedCardProps {
  href: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  cta?: string;
  external?: boolean;
}

export default function FeaturedCard({
  href,
  title,
  description,
  imageSrc,
  imageAlt,
  cta = 'Explore',
  external = false,
}: FeaturedCardProps) {
  return (
    <Link
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="group card overflow-hidden p-0 hover:shadow-lg transition-all duration-300 flex flex-col h-full"
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
        <h3 className="absolute bottom-4 left-4 right-4 text-xl font-semibold text-white drop-shadow-sm">
          {title}
        </h3>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <p className="text-gray-600 mb-4 flex-grow">{description}</p>
        <span className="text-primary-600 font-medium flex items-center mt-auto">
          {cta}
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}

import { useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const featuredStory = {
  image: '/images/story-gilders.jpg',
  category: 'Heritage',
  date: 'May 14, 2026',
  title: 'The last gilders of Old Damietta',
  excerpt: 'Inside a workshop where 22k gold leaf is still applied by hand, leaf by leaf, on every carved frame.',
  author: 'Layla Hassan',
};

const stories = [
  {
    image: '/images/story-chairs.jpg',
    category: 'Industry',
    date: 'May 2, 2026',
    title: "Why the world's chairs come from one Egyptian city",
  },
  {
    image: '/images/story-master-carver.jpg',
    category: 'Artisan',
    date: 'April 21, 2026',
    title: 'Meet Hagg Mostafa, 72, master carver',
  },
];

export default function StoriesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const headerRef = useScrollReveal<HTMLDivElement>({ translateY: 30, duration: 0.6 });
  const featuredImageRef = useScrollReveal<HTMLDivElement>({ translateX: 0, duration: 0.8 });
  const featuredContentRef = useScrollReveal<HTMLDivElement>({ translateY: 25, duration: 0.6 });
  const gridRef = useScrollReveal<HTMLDivElement>({ translateY: 30, duration: 0.6 });

  return (
    <div className="min-h-[100dvh] bg-cream pt-16">
      {/* Header */}
      <div ref={headerRef} className="pt-24 lg:pt-32 pb-10">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <span className="text-gold text-xs uppercase tracking-[0.15em] font-medium">Stories</span>
          <h1 className="font-serif text-4xl lg:text-6xl text-dark-brown leading-[1.1] mt-2">
            Voices of the<br />
            <em className="text-gold" style={{ fontStyle: 'italic' }}>workshop.</em>
          </h1>
          <p className="text-muted-brown text-base leading-relaxed mt-4 max-w-2xl">
            Long-form journalism, artisan portraits, and travel notes from Damietta.
          </p>
        </div>
      </div>

      {/* Featured Story */}
      <div className="py-12 border-b border-border-custom">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Image */}
            <div ref={featuredImageRef}>
              <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                <img
                  src={featuredStory.image}
                  alt={featuredStory.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div ref={featuredContentRef} className="lg:pl-4">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider">
                <span className="text-gold">{featuredStory.category}</span>
                <span className="text-warm-gray">·</span>
                <span className="text-warm-gray">{featuredStory.date}</span>
              </div>
              <h2 className="font-serif text-3xl lg:text-4xl text-dark-brown leading-[1.15] mt-4">
                {featuredStory.title}
              </h2>
              <p className="text-muted-brown text-base leading-relaxed mt-4">
                {featuredStory.excerpt}
              </p>
              <p className="text-warm-gray text-sm mt-4">by {featuredStory.author}</p>
              <button className="inline-flex items-center gap-1 text-sm text-dark-brown hover:text-gold transition-colors duration-200 mt-4 underline underline-offset-4">
                Read story <ChevronRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Story Grid */}
      <div className="py-12">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {stories.map((story, i) => (
              <button key={i} className="group text-left">
                <div className="relative overflow-hidden rounded-xl aspect-[16/10]">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider mt-4">
                  <span className="text-gold">{story.category}</span>
                  <span className="text-warm-gray">·</span>
                  <span className="text-warm-gray">{story.date}</span>
                </div>
                <h3 className="font-serif text-xl text-dark-brown mt-2 group-hover:underline group-hover:underline-offset-4 transition-all duration-200">
                  {story.title}
                </h3>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

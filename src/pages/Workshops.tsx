import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { MapPin, Star, List, Map } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const workshops = [
  {
    image: '/images/workshop-classic-baroque.jpg',
    category: 'classic',
    rating: '4.9',
    reviews: '312',
    title: 'Bayt Al-Khashab',
    description: 'Five generations of inlaid mashrabiya artistry in the heart of old Damietta.',
    location: 'Sharia Al-Bahr, Old Damietta',
  },
  {
    image: '/images/workshop-modern-minimalist.jpg',
    category: 'modern',
    rating: '4.8',
    reviews: '187',
    title: 'Najjar Studio',
    description: 'Contemporary Nordic-influenced pieces built in collaboration with local carpenters.',
    location: 'Industrial Zone 4, New Damietta',
  },
  {
    image: '/images/workshop-handmade-gilding.jpg',
    category: 'handmade',
    rating: '4.9',
    reviews: '96',
    title: 'Atelier El-Sanaa',
    description: 'A women-led cooperative reviving classical Arabesque carving and gold-leaf techniques.',
    location: 'El-Geish Street, Damietta',
  },
];

const filters = ['All', 'Classic', 'Modern', 'Handmade', 'Luxury'];

export default function WorkshopsPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [viewMode, setViewMode] = useState<'list' | 'map'>('list');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const headerRef = useScrollReveal<HTMLDivElement>({ translateY: 30, duration: 0.6 });
  const filterRef = useScrollReveal<HTMLDivElement>({ translateY: 20, duration: 0.5, delay: 0.1 });
  const cardsRef = useScrollReveal<HTMLDivElement>({ translateY: 30, duration: 0.6, delay: 0.2 });

  const filtered = activeFilter === 'All'
    ? workshops
    : workshops.filter(w => w.category.toLowerCase() === activeFilter.toLowerCase());

  return (
    <div className="min-h-[100dvh] bg-cream pt-16">
      {/* Header */}
      <div ref={headerRef} className="pt-24 lg:pt-32 pb-10">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <span className="text-gold text-xs uppercase tracking-[0.15em] font-medium">Directory</span>
          <h1 className="font-serif text-4xl lg:text-6xl text-dark-brown leading-[1.1] mt-2">
            Workshops of <em className="text-gold" style={{ fontStyle: 'italic' }}>Damietta</em>
          </h1>
          <p className="text-muted-brown text-base leading-relaxed mt-4 max-w-2xl">
            Verified makers. Filter by craft, district, or rating. Visit by appointment or join an open tour.
          </p>
        </div>
      </div>

      {/* Filter Bar */}
      <div ref={filterRef} className="border-b border-border-custom">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeFilter === f
                    ? 'bg-dark-brown text-white'
                    : 'border border-border-custom text-dark-brown hover:bg-dark-brown hover:text-white'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setViewMode('list')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm transition-all duration-200 ${
                viewMode === 'list' ? 'bg-dark-brown text-white' : 'border border-border-custom text-dark-brown'
              }`}
            >
              <List size={16} /> List
            </button>
            <button
              onClick={() => setViewMode('map')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm transition-all duration-200 ${
                viewMode === 'map' ? 'bg-dark-brown text-white' : 'border border-border-custom text-dark-brown'
              }`}
            >
              <Map size={16} /> Map
            </button>
          </div>
        </div>
      </div>

      {/* Workshop Grid */}
      <div className="py-12">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          {viewMode === 'list' ? (
            <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((w, i) => (
                <Link to="#" key={i} className="group block">
                  <div className="relative overflow-hidden rounded-2xl aspect-[4/5]">
                    <img
                      src={w.image}
                      alt={w.title}
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                    />
                    <span className="absolute top-3 left-3 bg-cream/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-dark-brown uppercase">
                      {w.category}
                    </span>
                    <div className="absolute bottom-3 right-3 bg-cream/90 backdrop-blur-sm px-2.5 py-1 rounded-full flex items-center gap-1 text-xs">
                      <Star size={12} className="text-gold fill-gold" />
                      <span className="text-dark-brown font-medium">{w.rating}</span>
                      <span className="text-warm-gray">({w.reviews})</span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h3 className="font-serif text-xl text-dark-brown group-hover:text-gold transition-colors duration-200">{w.title}</h3>
                    <p className="text-muted-brown text-sm mt-1">{w.description}</p>
                    <div className="flex items-center gap-1 mt-2 text-warm-gray text-sm">
                      <MapPin size={14} />
                      <span>{w.location}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div ref={cardsRef} className="rounded-2xl overflow-hidden aspect-[16/9] bg-light-cream flex items-center justify-center">
              <div className="text-center">
                <Map size={48} className="text-border-custom mx-auto mb-3" />
                <p className="text-muted-brown text-lg font-medium">Interactive Map Coming Soon</p>
                <p className="text-warm-gray text-sm mt-1">Explore workshops across Damietta&apos;s districts</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

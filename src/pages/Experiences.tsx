import { useEffect } from 'react';
import { Clock, Users, Calendar } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const experiences = [
  {
    category: 'MASTERCLASS',
    price: '180',
    title: 'Carve Your Own Mashrabiya Chair',
    description: 'Spend a day in a 100-year-old workshop hand-turning spindles and assembling your own lattice-back chair to take home.',
    duration: '6h',
    capacity: 'Up to 8',
    frequency: 'Daily',
  },
  {
    category: 'TOUR',
    price: '65',
    title: 'Damietta Factory Trail',
    description: 'A guided half-day route through three of the city\'s most iconic furniture factories, with tea, lunch, and translation included.',
    duration: '4h',
    capacity: 'Up to 15',
    frequency: 'Daily',
  },
  {
    category: 'MASTERCLASS',
    price: '95',
    title: 'Gold-Leaf Gilding Masterclass',
    description: 'Learn the traditional bole, water, and burnish technique on a hand-carved Arabesque panel.',
    duration: '3h',
    capacity: 'Up to 6',
    frequency: 'Daily',
  },
];

export default function ExperiencesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const headerRef = useScrollReveal<HTMLDivElement>({ translateY: 30, duration: 0.6 });
  const cardsRef = useScrollReveal<HTMLDivElement>({ translateY: 30, duration: 0.6, delay: 0.15 });

  return (
    <div className="min-h-[100dvh] bg-cream pt-16">
      {/* Header */}
      <div ref={headerRef} className="pt-24 lg:pt-32 pb-10">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <span className="text-gold text-xs uppercase tracking-[0.15em] font-medium">Experiences</span>
          <h1 className="font-serif text-4xl lg:text-6xl text-dark-brown leading-[1.1] mt-2">
            Things to make,<br />
            <em className="text-gold" style={{ fontStyle: 'italic' }}>not just things to see.</em>
          </h1>
          <p className="text-muted-brown text-base leading-relaxed mt-4 max-w-2xl">
            Hands-on workshops with master craftsmen. Free cancellation up to 24h before.
          </p>
        </div>
      </div>

      {/* Cards */}
      <div className="py-12">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className={`bg-white rounded-2xl border border-border-custom p-6 transition-shadow duration-300 hover:shadow-card-hover ${
                  i === 2 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Top row */}
                <div className="flex items-start justify-between">
                  <span className="text-gold text-xs tracking-[0.15em] font-medium">{exp.category}</span>
                  <div className="text-right">
                    <span className="text-warm-gray text-xs uppercase">From</span>
                    <p className="font-serif text-2xl text-gold">${exp.price}</p>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl lg:text-2xl text-dark-brown mt-4">{exp.title}</h3>
                <p className="text-muted-brown text-sm leading-relaxed mt-2">{exp.description}</p>

                {/* Divider */}
                <div className="border-t border-border-custom my-5" />

                {/* Meta */}
                <div className="flex flex-wrap gap-4 text-sm text-muted-brown">
                  <div className="flex items-center gap-1.5">
                    <Clock size={16} className="text-warm-gray" />
                    <span>{exp.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users size={16} className="text-warm-gray" />
                    <span>{exp.capacity}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar size={16} className="text-warm-gray" />
                    <span>{exp.frequency}</span>
                  </div>
                </div>

                {/* Button */}
                <button className="w-full mt-5 bg-dark-brown text-white text-sm font-medium py-3 rounded-xl hover:bg-dark-brown/90 transition-all duration-200 hover:-translate-y-0.5">
                  Book this experience
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

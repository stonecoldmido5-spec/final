import { useEffect } from 'react';
import { Heart } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const products = [
  {
    image: '/images/product-armchair.jpg',
    category: 'Luxury',
    title: 'Emerald Velvet Armchair',
    workshop: 'Dar El-Oud',
    price: '1,420',
  },
  {
    image: '/images/product-dining-table.jpg',
    category: 'Classic',
    title: 'Inlaid Walnut Dining Table',
    workshop: 'Bayt Al-Khashab',
    price: '3,890',
  },
  {
    image: '/images/product-bed.jpg',
    category: 'Modern',
    title: 'Oak Frame Bed',
    workshop: 'Najjar Studio',
    price: '960',
  },
];

export default function ShowroomPage() {
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
          <span className="text-gold text-xs uppercase tracking-[0.15em] font-medium">Digital Showroom</span>
          <h1 className="font-serif text-4xl lg:text-6xl text-dark-brown leading-[1.1] mt-2">
            Browse, save,<br />
            <em className="text-gold" style={{ fontStyle: 'italic' }}>commission.</em>
          </h1>
          <p className="text-muted-brown text-base leading-relaxed mt-4 max-w-2xl">
            A curated catalog of Damietta-made pieces. View in 3D, request customization, or favorite for your trip.
          </p>
        </div>
      </div>

      {/* Product Grid */}
      <div className="py-12">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p, i) => (
              <div key={i} className="group">
                <div className="relative overflow-hidden rounded-2xl aspect-square">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                  />
                  {/* Category Tag */}
                  <span className="absolute top-3 left-3 bg-cream/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-dark-brown">
                    {p.category}
                  </span>
                  {/* Heart */}
                  <button className="absolute top-3 right-3 w-8 h-8 bg-cream/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200">
                    <Heart size={16} className="text-dark-brown" />
                  </button>
                  {/* View in 3D */}
                  <button className="absolute bottom-3 right-3 bg-cream/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs text-dark-brown hover:bg-white transition-colors duration-200">
                    View in 3D
                  </button>
                </div>
                <div className="mt-4">
                  <h3 className="font-serif text-lg text-dark-brown group-hover:text-gold transition-colors duration-200">
                    {p.title}
                  </h3>
                  <p className="text-warm-gray text-sm mt-0.5">by {p.workshop}</p>
                  <p className="font-serif text-lg text-gold mt-1">${p.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

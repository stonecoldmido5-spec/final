import { useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const headerRef = useScrollReveal<HTMLDivElement>({ translateY: 30, duration: 0.6 });
  const imageRef = useScrollReveal<HTMLDivElement>({ translateY: 0, duration: 0.8 });
  const contentRef = useScrollReveal<HTMLDivElement>({ translateY: 25, duration: 0.6 });
  const missionRef = useScrollReveal<HTMLDivElement>({ translateY: 30, duration: 0.6 });

  return (
    <div className="min-h-[100dvh] bg-cream pt-16">
      {/* Header */}
      <div ref={headerRef} className="pt-24 lg:pt-32 pb-10">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <span className="text-gold text-xs uppercase tracking-[0.15em] font-medium">About Damietta</span>
          <h1 className="font-serif text-4xl lg:text-6xl text-dark-brown leading-[1.1] mt-2">
            Where the Nile<br />
            <em className="text-gold" style={{ fontStyle: 'italic' }}>meets the sea</em><br />
            — and the chisel.
          </h1>
          <p className="text-muted-brown text-base leading-relaxed mt-4 max-w-2xl">
            A 300-year-old craft tradition in a delta city of 1.5 million people, producing more than 60% of Egypt&apos;s furniture.
          </p>
        </div>
      </div>

      {/* Story Content */}
      <div className="py-16">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Image */}
            <div ref={imageRef}>
              <div className="rounded-3xl overflow-hidden aspect-[4/3]">
                <img
                  src="/images/damietta-aerial.jpg"
                  alt="Aerial view of Damietta"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div ref={contentRef} className="lg:pl-4">
              <h2 className="font-serif text-3xl text-dark-brown leading-[1.2]">
                A city of <em className="text-gold" style={{ fontStyle: 'italic' }}>makers</em>.
              </h2>
              <div className="space-y-4 mt-6">
                <p className="text-muted-brown text-base leading-relaxed">
                  For three centuries, Damietta has lived by the lathe. Generations of families pass down chisel, saw and gilding brush. Today, entire neighbourhoods are workshops — and the city ships its work across the Arab world.
                </p>
                <p className="text-muted-brown text-base leading-relaxed">
                  Damiture exists to open these doors to travellers — to turn a working industrial city into a cultural destination, on the makers&apos; terms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission */}
      <div ref={missionRef} className="py-20 border-t border-border-custom">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 text-center">
          <span className="text-warm-gray text-xs uppercase tracking-[0.15em] font-medium">Our mission</span>
          <h2 className="font-serif text-3xl lg:text-5xl text-dark-brown leading-[1.15] mt-3">
            Heritage tourism,<br />
            <em className="text-gold" style={{ fontStyle: 'italic' }}>paid back to the maker</em>.
          </h2>
          <div className="flex flex-wrap justify-center gap-12 lg:gap-16 mt-12">
            <div className="text-center">
              <p className="font-serif text-4xl text-dark-brown">380+</p>
              <p className="text-warm-gray text-sm mt-1">Verified workshops</p>
            </div>
            <div className="text-center">
              <p className="font-serif text-4xl text-dark-brown">85%</p>
              <p className="text-warm-gray text-sm mt-1">Revenue to makers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

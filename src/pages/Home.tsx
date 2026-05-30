import { Link } from 'react-router';
import { Search, MapPin, Star, ChevronRight, Sparkles, Languages, PenTool, Hammer, Compass } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useEffect } from 'react';

/* ─── Section: Hero ─── */
function HeroSection() {
  const labelRef = useScrollReveal<HTMLDivElement>({ delay: 0.3, translateY: 20, duration: 0.6 });
  const headingRef = useScrollReveal<HTMLDivElement>({ delay: 0.45, translateY: 30, duration: 0.7 });
  const subRef = useScrollReveal<HTMLDivElement>({ delay: 0.6, translateY: 20, duration: 0.6 });
  const searchRef = useScrollReveal<HTMLDivElement>({ delay: 0.75, translateY: 20, duration: 0.6 });
  const statsRef = useScrollReveal<HTMLDivElement>({ delay: 0.9, translateY: 15, duration: 0.5 });

  return (
    <section className="relative min-h-[100dvh] flex items-end overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-background.jpg"
          alt="Damietta craftsman carving furniture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(61, 37, 23, 0.55)' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 lg:px-12 pb-16 lg:pb-24 pt-32">
        {/* Label Pill */}
        <div ref={labelRef} className="mb-6">
          <span className="inline-block px-4 py-2 rounded-full text-xs uppercase tracking-[0.15em] font-medium"
            style={{ backgroundColor: 'rgba(201, 148, 62, 0.2)', border: '1px solid rgba(201, 148, 62, 0.4)', color: '#C9943E' }}>
            Industrial Heritage Tourism
          </span>
        </div>

        {/* Heading */}
        <div ref={headingRef} className="max-w-2xl">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.1]">
            Where wood{' '}
            <em className="text-gold not-italic" style={{ fontStyle: 'italic' }}>remembers</em>
            {' '}the hand.
          </h1>
        </div>

        {/* Subtitle */}
        <div ref={subRef} className="max-w-lg mt-5">
          <p className="text-white/85 text-base lg:text-lg leading-relaxed">
            Step into Damietta — the world capital of handcrafted furniture. Tour the workshops, meet the master carvers, and bring a story home.
          </p>
        </div>

        {/* Search Bar */}
        <div ref={searchRef} className="mt-8 max-w-xl">
          <div className="bg-cream rounded-2xl p-2 shadow-lg flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
            <div className="flex items-center gap-2 flex-1 px-3 py-2">
              <Search size={18} className="text-muted-brown shrink-0" />
              <input
                type="text"
                placeholder="Workshops, products, experiences..."
                className="bg-transparent text-sm text-dark-brown placeholder:text-warm-gray outline-none w-full"
              />
            </div>
            <div className="hidden sm:block w-px h-8 bg-border-custom" />
            <div className="flex items-center gap-1 px-3 py-2 text-warm-gray text-sm cursor-pointer hover:text-dark-brown transition-colors">
              <MapPin size={16} />
              <span>District</span>
            </div>
            <button className="bg-gold text-dark-brown text-sm font-medium px-6 py-3 rounded-xl hover:bg-gold/90 transition-all duration-200 hover:-translate-y-0.5 shrink-0">
              Explore
            </button>
          </div>
        </div>

        {/* Stats */}
        <div ref={statsRef} className="mt-10 flex flex-wrap gap-6 lg:gap-10">
          {[
            { value: '380+', label: 'Workshops' },
            { value: '65', label: 'Experiences' },
            { value: '12k+', label: 'Travellers hosted' },
          ].map((stat, i) => (
            <div key={i} className="flex items-center gap-4 lg:gap-6">
              {i > 0 && <div className="hidden sm:block w-px h-10 bg-white/20" />}
              <div>
                <p className="font-serif text-2xl lg:text-4xl text-white">{stat.value}</p>
                <p className="text-white/60 text-xs uppercase tracking-wider">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Section: Craft Styles ─── */
function CraftStylesSection() {
  const ref = useScrollReveal<HTMLDivElement>({ translateY: 15, duration: 0.5 });
  const styles = ['Classical', 'Baroque', 'Modern', 'Minimalist', 'Hand-carved', 'Gilded', 'Marquetry', 'Upholstered'];

  return (
    <section className="bg-cream py-6 border-b border-border-custom">
      <div ref={ref} className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="flex flex-wrap items-center gap-4 lg:gap-8">
          <span className="text-gold text-xs uppercase tracking-[0.15em] font-medium shrink-0">Craft Styles</span>
          <div className="flex flex-wrap gap-4 lg:gap-6">
            {styles.map((style) => (
              <button
                key={style}
                className="text-sm text-dark-brown hover:text-gold transition-colors duration-200"
              >
                {style}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Section: Featured Workshops ─── */
function FeaturedWorkshopsSection() {
  const headerRef = useScrollReveal<HTMLDivElement>({ translateY: 30, duration: 0.6 });
  const cardsRef = useScrollReveal<HTMLDivElement>({ translateY: 30, duration: 0.6, delay: 0.2 });

  const workshops = [
    {
      image: '/images/workshop-classic-baroque.jpg',
      category: 'Classic & Baroque',
      rating: '4.9',
      reviews: '312',
      title: 'Bayt Al-Khashab',
      location: 'El-Hadara, Damietta',
    },
    {
      image: '/images/workshop-modern-minimalist.jpg',
      category: 'Modern Minimalist',
      rating: '4.8',
      reviews: '187',
      title: 'Najjar Studio',
      location: 'Ras El-Bar, Damietta',
    },
    {
      image: '/images/workshop-handmade-gilding.jpg',
      category: 'Handmade & Gilding',
      rating: '5',
      reviews: '96',
      title: 'Atelier El-Sanaa',
      location: 'Old City, Damietta',
    },
  ];

  return (
    <section className="bg-cream py-20 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div ref={headerRef} className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-gold text-xs uppercase tracking-[0.15em] font-medium">Featured</span>
            <h2 className="font-serif text-3xl lg:text-5xl text-dark-brown leading-[1.15] mt-2">
              Houses of wood,<br />kept by hands.
            </h2>
          </div>
          <Link to="/workshops" className="text-sm text-dark-brown hover:text-gold transition-colors duration-200 flex items-center gap-1 shrink-0">
            All 380 workshops <ChevronRight size={16} />
          </Link>
        </div>

        {/* Cards Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workshops.map((w, i) => (
            <Link to="/workshops" key={i} className="group block">
              <div className="relative overflow-hidden rounded-2xl aspect-[4/5]">
                <img
                  src={w.image}
                  alt={w.title}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                />
                {/* Category Tag */}
                <span className="absolute top-3 left-3 bg-cream/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-dark-brown">
                  {w.category}
                </span>
                {/* Rating */}
                <div className="absolute bottom-3 right-3 bg-cream/90 backdrop-blur-sm px-2.5 py-1 rounded-full flex items-center gap-1 text-xs">
                  <Star size={12} className="text-gold fill-gold" />
                  <span className="text-dark-brown font-medium">{w.rating}</span>
                  <span className="text-warm-gray">({w.reviews})</span>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="font-serif text-xl text-dark-brown group-hover:text-gold transition-colors duration-200">{w.title}</h3>
                <div className="flex items-center gap-1 mt-1 text-warm-gray text-sm">
                  <MapPin size={14} />
                  <span>{w.location}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Section: Experiences ─── */
function ExperiencesSection() {
  const headerLeftRef = useScrollReveal<HTMLDivElement>({ translateY: 30, duration: 0.6 });
  const headerRightRef = useScrollReveal<HTMLDivElement>({ translateY: 20, duration: 0.5, delay: 0.1 });
  const cardsRef = useScrollReveal<HTMLDivElement>({ translateY: 40, duration: 0.7, delay: 0.2 });
  const btnRef = useScrollReveal<HTMLDivElement>({ translateY: 20, duration: 0.5, delay: 0.6 });

  const experiences = [
    { icon: Hammer, title: 'Carve your own chair', duration: '4 hours', price: '$65' },
    { icon: Compass, title: 'Guided factory trail', duration: 'Full day', price: '$89' },
    { icon: Sparkles, title: 'Gold-leaf masterclass', duration: '2 hours', price: '$45' },
  ];

  return (
    <section className="bg-dark-brown py-24 lg:py-28">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-12">
          <div ref={headerLeftRef}>
            <span className="text-gold text-xs uppercase tracking-[0.15em] font-medium">Experiences</span>
            <h2 className="font-serif text-3xl lg:text-5xl text-white leading-[1.15] mt-2">
              Don&apos;t just look.<br />
              <em className="text-gold" style={{ fontStyle: 'italic' }}>Make something.</em>
            </h2>
          </div>
          <div ref={headerRightRef} className="max-w-md">
            <p className="text-white/75 text-base leading-relaxed">
              Half-day workshops with master craftsmen, factory walks through the industrial quarters, and full immersions into a 300-year-old trade.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {experiences.map((exp, i) => {
            const Icon = exp.icon;
            return (
              <div
                key={i}
                className="rounded-2xl p-6 transition-all duration-300 hover:border-gold/30"
                style={{ border: '1px solid rgba(201, 148, 62, 0.15)' }}
              >
                <div className="w-12 h-12 bg-gold/20 rounded-xl flex items-center justify-center mb-4">
                  <Icon size={22} className="text-gold" />
                </div>
                <h3 className="font-serif text-xl text-white">{exp.title}</h3>
                <div className="border-t border-white/10 my-4" />
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/60 flex items-center gap-1.5">
                    <ClockIcon /> {exp.duration}
                  </span>
                  <span className="text-gold font-medium">From {exp.price}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div ref={btnRef} className="text-center mt-12">
          <Link
            to="/experiences"
            className="inline-block bg-gold text-dark-brown text-sm font-medium px-8 py-4 rounded-full hover:bg-gold/90 transition-all duration-200 hover:-translate-y-0.5"
          >
            Book an experience
          </Link>
        </div>
      </div>
    </section>
  );
}

function ClockIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12,6 12,12 16,14" />
    </svg>
  );
}

/* ─── Section: About Damietta ─── */
function AboutSection() {
  const imageRef = useScrollReveal<HTMLDivElement>({ translateX: 0, duration: 0.8 });
  const cardRef = useScrollReveal<HTMLDivElement>({ translateY: 20, duration: 0.5, delay: 0.4 });
  const contentRef = useScrollReveal<HTMLDivElement>({ translateY: 25, duration: 0.6 });

  const stats = [
    { value: '300+', label: 'Years of tradition' },
    { value: '60%', label: "Of Egypt's furniture" },
    { value: '45 km²', label: 'Industrial district' },
    { value: '2 hrs', label: 'From Cairo by train' },
  ];

  return (
    <section className="bg-cream py-24 lg:py-28">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Left - Image */}
          <div ref={imageRef} className="relative">
            <div className="rounded-3xl overflow-hidden aspect-[4/3]">
              <img
                src="/images/damietta-aerial.jpg"
                alt="Aerial view of Damietta"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Card */}
            <div ref={cardRef} className="absolute bottom-4 left-4 bg-cream rounded-xl p-4 shadow-lg flex items-center gap-3 max-w-[280px]">
              <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center shrink-0">
                <MapPin size={18} className="text-gold" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-dark-brown text-sm font-medium">Interactive tourism map</p>
                <p className="text-warm-gray text-xs mt-0.5">Workshops · hotels · restaurants · routes</p>
              </div>
              <ChevronRight size={16} className="text-warm-gray shrink-0" />
            </div>
          </div>

          {/* Right - Content */}
          <div ref={contentRef} className="lg:pl-8">
            <span className="text-gold text-xs uppercase tracking-[0.15em] font-medium">About Damietta</span>
            <h2 className="font-serif text-3xl lg:text-4xl text-dark-brown leading-[1.15] mt-3">
              A city that <em className="text-gold" style={{ fontStyle: 'italic' }}>smells of cedar</em> at dawn.
            </h2>
            <p className="text-muted-brown text-base leading-relaxed mt-5">
              Where the Nile meets the Mediterranean, an entire city turns wood into beauty. For three centuries, Damietta&apos;s families have passed down lathe, chisel and inlay — today producing more than 60% of Egypt&apos;s furniture.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              {stats.map((stat, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-0.5 h-10 bg-gold shrink-0 mt-1" />
                  <div>
                    <p className="font-serif text-2xl text-dark-brown">{stat.value}</p>
                    <p className="text-warm-gray text-xs uppercase tracking-wider mt-0.5">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link to="/about" className="inline-flex items-center gap-1 text-sm text-dark-brown hover:text-gold transition-colors duration-200 mt-8 underline underline-offset-4">
              Read the full guide <ChevronRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Section: Features ─── */
function FeaturesSection() {
  const ref = useScrollReveal<HTMLDivElement>({ translateY: 30, duration: 0.6 });

  const features = [
    {
      icon: Sparkles,
      title: 'Smart itinerary',
      description: 'AI plans your 2-day Damietta route around your taste — classical, modern, or hands-on.',
    },
    {
      icon: Languages,
      title: 'Arabic & English',
      description: 'Built bilingual. RTL-ready interface and local-language workshop guides on demand.',
    },
    {
      icon: PenTool,
      title: 'Meet the maker',
      description: 'Stories, interviews and reviews from the artisans shaping Damietta\'s living heritage.',
    },
  ];

  return (
    <section className="bg-cream py-20 border-t border-border-custom">
      <div ref={ref} className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div key={i}>
                <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center">
                  <Icon size={20} className="text-gold" />
                </div>
                <h3 className="font-serif text-xl text-dark-brown mt-4">{f.title}</h3>
                <p className="text-muted-brown text-[15px] leading-relaxed mt-2">{f.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─── Section: CTA ─── */
function CTASection() {
  const headingRef = useScrollReveal<HTMLDivElement>({ translateY: 30, duration: 0.6 });
  const subRef = useScrollReveal<HTMLDivElement>({ translateY: 20, duration: 0.5, delay: 0.15 });
  const btnsRef = useScrollReveal<HTMLDivElement>({ translateY: 15, duration: 0.5, delay: 0.3 });

  return (
    <section className="bg-cream py-28 lg:py-36">
      <div className="max-w-[640px] mx-auto px-6 text-center">
        <div ref={headingRef}>
          <h2 className="font-serif text-3xl lg:text-5xl text-dark-brown leading-[1.15]">
            Plan a journey<br />
            <em className="text-gold" style={{ fontStyle: 'italic' }}>into the workshop.</em>
          </h2>
        </div>
        <div ref={subRef} className="mt-5">
          <p className="text-muted-brown text-base leading-relaxed">
            Join the next generation of cultural travellers discovering Egypt beyond the pyramids.
          </p>
        </div>
        <div ref={btnsRef} className="flex flex-wrap justify-center gap-4 mt-10">
          <Link
            to="/experiences"
            className="bg-dark-brown text-white text-sm font-medium px-8 py-3 rounded-full hover:bg-dark-brown/90 transition-all duration-200 hover:-translate-y-0.5"
          >
            Start your itinerary
          </Link>
          <Link
            to="/workshops"
            className="border border-dark-brown text-dark-brown text-sm font-medium px-8 py-3 rounded-full hover:bg-dark-brown hover:text-white transition-all duration-200"
          >
            For workshop owners
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── Home Page ─── */
export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeroSection />
      <CraftStylesSection />
      <FeaturedWorkshopsSection />
      <ExperiencesSection />
      <AboutSection />
      <FeaturesSection />
      <CTASection />
    </>
  );
}

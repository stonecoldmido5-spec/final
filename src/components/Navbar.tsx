import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Workshops', path: '/workshops' },
  { label: 'Experiences', path: '/experiences' },
  { label: 'Showroom', path: '/showroom' },
  { label: 'About Damietta', path: '/about' },
  { label: 'Stories', path: '/blog' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-cream/95 backdrop-blur-sm shadow-sm' : 'bg-cream'
      }`}
      style={{ borderBottom: '1px solid #E8E0D4' }}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <div className="w-8 h-8 bg-dark-brown rounded-lg flex items-center justify-center">
            <span className="text-white font-serif text-lg">D</span>
          </div>
          <span className="font-serif text-xl text-dark-brown">Damiture.</span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors duration-200 hover:text-gold ${
                location.pathname === link.path ? 'text-gold' : 'text-dark-brown'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right Side */}
        <div className="hidden lg:flex items-center gap-4">
          <button className="text-sm text-dark-brown hover:text-gold transition-colors duration-200">
            EN / عربي
          </button>
          <button className="bg-dark-brown text-white text-sm font-medium px-5 py-2 rounded-full hover:bg-dark-brown/90 transition-all duration-200 hover:-translate-y-0.5">
            Sign in
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden text-dark-brown"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-16 left-0 right-0 bg-cream border-b border-border-custom transition-all duration-300 overflow-hidden ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-base font-medium transition-colors duration-200 hover:text-gold ${
                location.pathname === link.path ? 'text-gold' : 'text-dark-brown'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center gap-4 pt-2 border-t border-border-custom">
            <button className="text-sm text-dark-brown hover:text-gold transition-colors">
              EN / عربي
            </button>
            <button className="bg-dark-brown text-white text-sm font-medium px-5 py-2 rounded-full">
              Sign in
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

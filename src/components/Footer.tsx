import { Link } from 'react-router';

const exploreLinks = [
  { label: 'Workshops', path: '/workshops' },
  { label: 'Experiences', path: '/experiences' },
  { label: 'Digital showroom', path: '/showroom' },
  { label: 'Stories', path: '/blog' },
];

const visitLinks = [
  { label: 'About Damietta', path: '/about' },
  { label: 'Travel guide', path: '/about' },
  { label: 'Become a partner', path: '/about' },
  { label: 'Contact', path: '/about' },
];

export default function Footer() {
  return (
    <footer className="bg-darker-brown text-white">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Column 1 - Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-darker-brown font-serif text-lg">D</span>
              </div>
              <span className="font-serif text-xl text-white">Damiture.</span>
            </div>
            <p className="text-warm-gray text-sm leading-relaxed max-w-xs">
              A tourism gateway to Damietta — the world capital of handcrafted furniture. Discover workshops, book experiences, and meet the artisans behind the wood.
            </p>
            <p className="text-gold text-xs uppercase tracking-[0.15em] mt-4">
              Damietta · Nile Delta · Egypt
            </p>
          </div>

          {/* Column 2 - Explore */}
          <div>
            <h4 className="text-white font-medium text-base mb-4">Explore</h4>
            <ul className="space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-warm-gray text-sm hover:text-gold transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Visit */}
          <div>
            <h4 className="text-white font-medium text-base mb-4">Visit</h4>
            <ul className="space-y-3">
              {visitLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-warm-gray text-sm hover:text-gold transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-warm-gray text-sm">
            © 2026 Damiture. Crafted with care for Damietta.
          </p>
          <div className="flex items-center gap-2 text-warm-gray text-sm">
            <button className="hover:text-gold transition-colors">Privacy</button>
            <span>·</span>
            <button className="hover:text-gold transition-colors">Terms</button>
            <span>·</span>
            <button className="hover:text-gold transition-colors">Cookies</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

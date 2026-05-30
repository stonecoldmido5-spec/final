import { Routes, Route, useLocation } from 'react-router';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import WorkshopsPage from './pages/Workshops';
import ExperiencesPage from './pages/Experiences';
import ShowroomPage from './pages/Showroom';
import AboutPage from './pages/About';
import StoriesPage from './pages/Stories';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div className="min-h-[100dvh] bg-cream">
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/workshops" element={<WorkshopsPage />} />
          <Route path="/experiences" element={<ExperiencesPage />} />
          <Route path="/showroom" element={<ShowroomPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<StoriesPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

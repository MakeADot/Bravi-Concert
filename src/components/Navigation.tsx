import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';

const tabs = [
  { id: 'program', label: '곡 리스트' },
  { id: 'profiles', label: '연주자 프로필' },
];

export default function Navigation() {
  const [activeTab, setActiveTab] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = tabs.map((tab) => document.getElementById(tab.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveTab(tabs[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${
        isScrolled
          ? 'bg-[#000d28]/88 backdrop-blur-md border-b border-white/10 py-3'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="relative max-w-screen-md mx-auto px-4 sm:px-6">
        <Link
          to="/"
          aria-label="홈으로"
          className="absolute left-3 top-1/2 z-10 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-[#000d28]/85 text-bravi-ink shadow-[0_4px_14px_rgba(0,0,0,0.35)] transition-colors hover:bg-[#000d28] sm:left-5"
        >
          <ArrowLeft className="h-5 w-5" aria-hidden="true" />
        </Link>
        <ul className="flex items-center justify-center gap-2 sm:gap-3 pb-1">
          {tabs.map((tab) => (
            <li key={tab.id} className="flex-shrink-0">
              <button
                onClick={() => scrollToSection(tab.id)}
                className={`px-1.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-[11px] sm:text-sm font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-bravi-pill text-bravi-night shadow-[0_6px_16px_rgba(0,0,0,0.35)]'
                    : 'bg-[#000d28]/70 text-bravi-ink/90 hover:text-bravi-ink hover:bg-[#000d28]/85'
                }`}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}

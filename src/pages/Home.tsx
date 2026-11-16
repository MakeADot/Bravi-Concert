import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Calendar, Clock, MapPin } from 'lucide-react';
import WinterFrame from '../components/WinterFrame';
import { series, sessions } from '../data/sessions';
import { asset } from '../site';

export default function Home() {
  useEffect(() => {
    document.title = `${series.title} | 브라비`;
  }, []);

  return (
    <div className="relative min-h-screen font-sans pb-20 overflow-hidden">
      <WinterFrame />
      <div className="relative z-10 max-w-screen-md mx-auto px-6 -mt-[14vw]">
        <header className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img src={asset('logo-light.svg')} alt="브라비" className="h-7 w-auto mx-auto mb-8" />
            <p className="text-bravi-ink/70 text-sm font-semibold tracking-[0.28em] uppercase mb-2">FKI Tower</p>
            <h1 className="font-script text-6xl sm:text-7xl text-bravi-deep leading-none mb-8">Lobby Concert</h1>

            <div className="flex flex-col items-center gap-3 text-bravi-ink/75 text-sm sm:text-base">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-bravi-pill" />
                <span>
                  {series.dateRange} · {series.weekday}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-bravi-pill" />
                <span>{series.time}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-bravi-pill" />
                <span>{series.location}</span>
              </div>
            </div>
          </motion.div>
        </header>

        <main className="space-y-4">
          <h2 className="text-xl font-bold tracking-tight mb-6">공연 일정</h2>
          {sessions.map((session, index) => (
            <motion.div
              key={session.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
            >
              <Link
                to={session.path}
                className="glass-panel p-6 sm:p-8 block group hover:border-bravi-deep/40 transition-all duration-300 hover:shadow-[0_16px_40px_rgba(0,0,0,0.4)] relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  <span className="inline-block text-bravi-night font-medium text-sm tracking-wide bg-bravi-pill px-3 py-1 rounded-full mb-4">
                    {session.dateLabel}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-bravi-ink group-hover:text-bravi-deep transition-colors">
                    {session.title}
                  </h3>
                  <p className="mt-2 text-bravi-deep text-sm font-medium">{session.ensemble}</p>
                  <p className="mt-3 flex items-center gap-2 text-bravi-ink/70 text-sm">
                    <Clock className="w-4 h-4 text-bravi-pill" />
                    {series.time}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </main>

        <footer className="mt-20 pt-8 border-t border-bravi-line text-center text-bravi-ink/45 text-xs">
          © 2026 브라비. All rights reserved.
        </footer>
      </div>
    </div>
  );
}

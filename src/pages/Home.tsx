import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Calendar, ChevronRight, Clock, MapPin } from 'lucide-react';
import WinterFrame from '../components/WinterFrame';
import Footer from '../components/Footer';
import { isPastSession, isTodaySession, series, sessions, type Session } from '../data/sessions';

function SessionCard({
  session,
  past,
  today = false,
  index,
}: {
  session: Session;
  past: boolean;
  today?: boolean;
  index: number;
}) {
  const date = session.dateLabel.split(' ')[0];
  const open = session.available || past;
  const card = (
    <>
      {open && (
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}

      <div className="relative z-10 flex items-center gap-4">
        <div
          className={`grid h-[4.5rem] w-[4.5rem] shrink-0 place-items-center rounded-2xl text-bravi-night sm:h-20 sm:w-20 ${
            open ? 'bg-bravi-pill' : 'bg-bravi-pill/60'
          }`}
        >
          <p className="date-mark">
            <span className="date-mark-num">{date}</span>
            <span className="date-mark-day">WED</span>
          </p>
        </div>

        <div className="min-w-0 flex-1">
          <h3
            className={`text-lg font-bold leading-snug transition-colors sm:text-xl ${
              open ? 'text-bravi-ink group-hover:text-bravi-deep' : 'text-bravi-ink/55'
            }`}
          >
            {session.title}
          </h3>
          <p className={`mt-1 text-sm ${open ? 'text-bravi-deep' : 'text-bravi-deep/45'}`}>{session.ensemble}</p>
          {!open && (
            <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.16em] text-bravi-ink/45">Coming Soon</p>
          )}
        </div>

        {open && (
          <ChevronRight
            className="h-5 w-5 shrink-0 text-bravi-pill transition-transform duration-300 group-hover:translate-x-1 group-hover:text-bravi-deep"
            aria-hidden="true"
          />
        )}
      </div>
    </>
  );

  return (
    <motion.div
      key={session.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08 }}
    >
      {open ? (
        <Link
          to={session.path}
          className={`glass-panel relative block overflow-hidden p-3 transition-all duration-300 group hover:border-bravi-deep/40 hover:shadow-[0_16px_40px_rgba(0,0,0,0.4)] sm:p-4 ${today ? 'today-glow' : ''}`}
        >
          {card}
        </Link>
      ) : (
        <div
          aria-disabled="true"
          className={`glass-panel relative block cursor-not-allowed select-none overflow-hidden p-3 sm:p-4 ${today ? 'today-glow' : ''}`}
        >
          {card}
        </div>
      )}
    </motion.div>
  );
}

export default function Home() {
  useEffect(() => {
    document.title = `${series.title} | 브라비`;
  }, []);

  const today = sessions.filter((session) => isTodaySession(session));
  const upcoming = sessions.filter((session) => !isPastSession(session) && !isTodaySession(session));
  const past = sessions.filter((session) => isPastSession(session));

  return (
    <div className="relative min-h-screen font-sans overflow-hidden">
      <WinterFrame />
      <div className="relative z-10 max-w-screen-md mx-auto px-6 -mt-[14vw]">
        <header className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
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

        <main className="space-y-3">
          {today.length > 0 && <h2 className="text-xl font-bold tracking-tight mb-6">오늘 공연</h2>}
          {today.map((session, index) => (
            <SessionCard key={session.id} session={session} past={false} today index={index} />
          ))}
          {upcoming.length > 0 && (
            <h2 className={`text-xl font-bold tracking-tight mb-6 ${today.length > 0 ? 'pt-10' : ''}`}>예정된 공연</h2>
          )}
          {upcoming.map((session, index) => (
            <SessionCard key={session.id} session={session} past={false} index={today.length + index} />
          ))}
          {past.length > 0 && (
            <h2 className={`text-xl font-bold tracking-tight mb-6 ${today.length + upcoming.length > 0 ? 'pt-10' : ''}`}>
              종료된 공연
            </h2>
          )}
          {past.map((session, index) => (
            <SessionCard key={session.id} session={session} past index={today.length + upcoming.length + index} />
          ))}
        </main>
      </div>
      <Footer />
    </div>
  );
}

import { useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Program from '../components/Program';
import Profiles from '../components/Profiles';
import Footer from '../components/Footer';
import { findSession, isSessionOpen, series } from '../data/sessions';

export default function FkiLobbyConcert() {
  const { sessionId } = useParams();
  const session = findSession(sessionId);

  useEffect(() => {
    if (!session) return;
    document.title = `${session.title} | ${series.title}`;
    window.scrollTo(0, 0);
  }, [session]);

  if (!session || !isSessionOpen(session)) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen font-sans">
      <Navigation />
      <main>
        <Hero session={session} />
        <section id="intro" className="px-6 max-w-screen-md mx-auto">
          <div className="glass-panel p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-bravi-ink mb-8">오늘 공연을 소개합니다</h2>
            <dl className="space-y-8 text-sm sm:text-base">
              <div>
                <dt className="font-semibold text-bravi-deep mb-1">악기 구성</dt>
                <dd className="text-bravi-ink/80 leading-relaxed">{session.lineup}</dd>
              </div>
              <div>
                <dt className="font-semibold text-bravi-deep mb-1">무대 소개</dt>
                <dd className="space-y-1.5 text-bravi-ink/80 leading-normal">
                  {session.feature.split('\n').map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </dd>
              </div>
            </dl>
          </div>
        </section>
        <Program />
        <Profiles />
      </main>
      <Footer />
    </div>
  );
}

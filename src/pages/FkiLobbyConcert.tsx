import { useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Program from '../components/Program';
import Profiles from '../components/Profiles';
import Footer from '../components/Footer';
import { findSession, series } from '../data/sessions';

export default function FkiLobbyConcert() {
  const { sessionId } = useParams();
  const session = findSession(sessionId);

  useEffect(() => {
    if (!session) return;
    document.title = `${session.title} | ${series.title}`;
    window.scrollTo(0, 0);
  }, [session]);

  if (!session) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen font-sans">
      <Navigation />
      <main>
        <Hero session={session} />
        <section id="intro" className="px-6 max-w-screen-md mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3 tracking-tight">공연 소개</h2>
          </div>
          <div className="glass-panel p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-bravi-ink mb-5">{session.ensemble}</h3>
            <dl className="space-y-4 text-sm sm:text-base">
              <div>
                <dt className="font-semibold text-bravi-deep mb-1">구성</dt>
                <dd className="text-bravi-ink/80 leading-relaxed">{session.lineup}</dd>
              </div>
              <div>
                <dt className="font-semibold text-bravi-deep mb-1">특징</dt>
                <dd className="text-bravi-ink/80 leading-relaxed">{session.feature}</dd>
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

import { motion } from 'motion/react';
import WinterFrame from './WinterFrame';
import { series, type Session } from '../data/sessions';

export default function Hero({ session }: { session: Session }) {
  return (
    <section className="relative pb-16 overflow-hidden">
      <WinterFrame />
      <div className="relative z-10 max-w-screen-md mx-auto flex flex-col items-center text-center px-6 -mt-[14vw]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <p className="text-bravi-ink/55 text-xs font-semibold tracking-[0.28em] uppercase mb-1">FKI Tower</p>
          <p className="font-script text-3xl sm:text-4xl text-bravi-deep/80 leading-none mb-4">Lobby Concert</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-bravi-ink leading-tight mb-4">{session.title}</h1>
          <p className="text-bravi-ink/75 text-sm sm:text-base leading-relaxed">
            {session.dateLabel} · {series.time}
            <br />
            {series.location}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

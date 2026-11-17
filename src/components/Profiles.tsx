import { useEffect, useId, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { X } from 'lucide-react';
import { profiles, type Profile } from '../data/profiles';
import { asset } from '../site';

export default function Profiles() {
  const [selected, setSelected] = useState<Profile | null>(null);

  return (
    <section id="profiles" className="py-16 px-6 max-w-screen-md mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold tracking-tight">연주자 프로필</h2>
      </div>

      <div className="space-y-4">
        {profiles.map((profile, index) => (
          <motion.article
            key={profile.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: index * 0.1 }}
            className="glass-panel p-4 sm:p-5 flex gap-4 sm:gap-5"
          >
            <div className="w-28 sm:w-36 shrink-0 aspect-[3/4] rounded-xl overflow-hidden border border-white/20 bg-[#10243f]">
              <img
                src={asset(profile.photo)}
                alt=""
                className="h-full w-full object-cover"
                style={{ objectPosition: profile.photoPosition }}
              />
            </div>

            <div className="min-w-0 flex-1 flex flex-col">
              <span className="text-bravi-deep text-xs font-bold tracking-widest uppercase block mb-1">
                {profile.instrument}
              </span>
              <h3 className="text-xl font-semibold text-bravi-ink mb-2">{profile.name}</h3>
              <p className="text-sm text-bravi-ink/70 leading-relaxed flex-1 whitespace-pre-line">{profile.intro}</p>
              <button
                type="button"
                onClick={() => setSelected(profile)}
                className="mt-3 sm:mt-4 inline-flex w-full items-center justify-center bg-white/10 hover:bg-white/16 text-bravi-deep border border-bravi-line hover:border-bravi-deep/30 px-4 py-2.5 rounded-xl text-sm font-medium transition-all"
              >
                자세히 보기
              </button>
            </div>
          </motion.article>
        ))}
      </div>

      <ProfileModal profile={selected} onClose={() => setSelected(null)} />
    </section>
  );
}

function ProfileModal({ profile, onClose }: { profile: Profile | null; onClose: () => void }) {
  const titleId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!profile) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    dialogRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus();
    };
  }, [profile, onClose]);

  return (
    <AnimatePresence>
      {profile && (
        <motion.div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            type="button"
            aria-label="프로필 닫기"
            className="absolute inset-0 bg-[#000814]/70 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            tabIndex={-1}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ type: 'spring', stiffness: 320, damping: 32 }}
            className="glass-panel relative z-10 w-full sm:max-w-lg max-h-[88vh] flex flex-col rounded-t-2xl sm:rounded-2xl outline-none bg-[#061428]/95"
          >
            <div className="flex items-start gap-4 p-5 sm:p-6 pb-4 border-b border-bravi-line shrink-0">
              <div className="w-16 h-20 sm:w-20 sm:h-24 rounded-xl overflow-hidden bg-[#10243f] shrink-0">
                <img
                  src={asset(profile.photo)}
                  alt=""
                  className="h-full w-full object-cover"
                  style={{ objectPosition: profile.photoPosition }}
                />
              </div>
              <div className="min-w-0 flex-1 pt-0.5">
                <span className="text-bravi-deep text-xs font-bold tracking-widest uppercase block mb-1">
                  {profile.instrument}
                </span>
                <h3 id={titleId} className="text-xl font-semibold text-bravi-ink">
                  {profile.name}
                </h3>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="닫기"
                className="shrink-0 p-2 -mt-1 -mr-1 rounded-lg text-bravi-ink/60 hover:text-bravi-ink hover:bg-bravi-blush transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="overflow-y-auto p-5 sm:p-6 space-y-3">
              {profile.bio.map((paragraph) => (
                <p key={paragraph.slice(0, 24)} className="text-bravi-ink/75 text-sm leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

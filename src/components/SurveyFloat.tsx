import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

const SURVEY_URL = 'https://walla.my/a/26winter-fki-tower';

export default function SurveyFloat() {
  const barRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(128);

  useEffect(() => {
    const el = barRef.current;
    if (!el) return;

    const update = () => setHeight(el.offsetHeight + 16);
    update();

    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div style={{ height }} aria-hidden="true" />
      <motion.div
        ref={barRef}
        initial={{ y: 28, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.45, ease: 'easeOut' }}
        className="fixed inset-x-0 bottom-0 z-[70]"
      >
        <div className="bg-gradient-to-t from-[#000d28] via-[#000d28] to-transparent px-3 pt-3 pb-[max(0.7rem,env(safe-area-inset-bottom))]">
          <a
            href={SURVEY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="survey-float mx-auto flex max-w-screen-md items-center gap-3 rounded-2xl border border-white/80 bg-[#f6d5e0] px-4 py-3 text-[#000d28] transition-transform active:scale-[0.985] sm:gap-5 sm:px-5"
          >
            <span className="min-w-0 flex-1">
              <span className="block text-[15px] font-extrabold leading-snug tracking-tight sm:text-base">
                오늘 공연 재밌게 보셨나요?
              </span>
              <span className="mt-0.5 block break-keep text-[13px] font-semibold leading-snug">
                <span className="block sm:inline">15초 설문 참여하고,</span>{' '}
                <span className="block sm:inline">스타벅스 커피 받아가세요!</span>
              </span>
            </span>
            <span className="inline-flex shrink-0 items-center gap-0.5 self-center rounded-full bg-[#000d28] px-3.5 py-2.5 text-sm font-bold text-[#f6d5e0]">
              참여하기
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
              <span className="sr-only">새 창에서 열림</span>
            </span>
          </a>
        </div>
      </motion.div>
    </>
  );
}

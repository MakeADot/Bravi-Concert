import { Award, Sparkles, EyeOff } from 'lucide-react';

type Ensemble = '현악' | '피아노' | '하프' | '브라스';
type Highlight = 'signature' | 'premiere';

type ProgramItem = {
  id: number;
  ensemble: Ensemble;
  title: string;
  source?: string;
  note: string;
  highlight?: Highlight;
  veiled?: boolean;
};

const highlightBadge: Record<Highlight, { label: string; Icon: typeof Award; className: string }> = {
  signature: {
    label: '로비 콘서트 시그니처',
    Icon: Award,
    className: 'bg-white/10 text-bravi-deep border border-bravi-deep/30',
  },
  premiere: {
    label: '이번 시리즈 선공개',
    Icon: Sparkles,
    className: 'premiere-badge bg-bravi-pill text-bravi-night border border-bravi-pill font-semibold shadow-[0_6px_16px_rgba(0,0,0,0.35)]',
  },
};

const ensembleTheme: Record<Ensemble, { badge: string; track: string; card: string }> = {
  현악: {
    badge: 'bg-white/10 text-bravi-deep border-bravi-rose',
    track: 'text-bravi-deep',
    card: 'hover:border-bravi-deep/35',
  },
  피아노: {
    badge: 'bg-white/10 text-bravi-ink border-bravi-line',
    track: 'text-bravi-ink',
    card: 'hover:border-bravi-ink/30',
  },
  하프: {
    badge: 'bg-[#d5e4f6]/10 text-[#d5e4f6] border-[#d5e4f6]/30',
    track: 'text-[#d5e4f6]',
    card: 'hover:border-[#d5e4f6]/40',
  },
  브라스: {
    badge: 'bg-bravi-pill/15 text-bravi-pill border-bravi-pill/40',
    track: 'text-bravi-pill',
    card: 'hover:border-bravi-pill/50',
  },
};

const programs: ProgramItem[] = [
  {
    id: 1,
    ensemble: '현악',
    title: '사계 중 겨울 2악장',
    source: '안토니오 비발디',
    highlight: 'signature',
    note: '난롯가에 앉은 듯 따뜻한 선율로 시리즈의 문을 엽니다. 로비에 머무는 짧은 시간에 맞춘 편곡입니다.',
  },
  {
    id: 2,
    ensemble: '피아노',
    title: '녹턴',
    source: '프레데리크 쇼팽',
    note: '건반 하나로 공간을 조용히 적시는 곡입니다. 오가는 발걸음 사이에서도 선율이 남도록 템포를 느긋하게 잡습니다.',
  },
  {
    id: 3,
    ensemble: '현악',
    title: '겨울 캐롤 모음',
    highlight: 'premiere',
    note: '익숙한 캐롤을 살롱풍 현악으로 다시 엮었습니다. 이 로비 시리즈에서 처음 공개하는 편곡입니다.',
  },
  {
    id: 4,
    ensemble: '피아노',
    title: '캐논',
    source: '요한 파헬벨',
    note: '반복되는 화음 위에 악기가 하나씩 올라탑니다. 점심시간의 일정한 흐름과 닮은 곡입니다.',
  },
  {
    id: 5,
    ensemble: '하프',
    title: '살롱 스케치',
    highlight: 'premiere',
    note: '하프가 로비의 천장으로 음을 띄우는 짧은 소품입니다. 가까운 거리에서 듣는 잔향을 살렸습니다.',
  },
  {
    id: 6,
    ensemble: '현악',
    title: '엘리제를 위하여',
    source: '루트비히 판 베토벤',
    note: '누구나 아는 주제를 첼로와 현악이 주고받습니다. 인사처럼 가볍고, 끝은 단정하게 맺습니다.',
  },
  {
    id: 7,
    ensemble: '브라스',
    title: '행진 소품',
    note: '금관이 로비의 폭을 가로지르며 회차의 마무리를 준비합니다. 음량은 통행에 맞추어 조절합니다.',
  },
  {
    id: 8,
    ensemble: '현악',
    title: '',
    note: '마지막 수요일에는 현장의 반응을 보고 고르는 짧은 앵콜이 이어집니다. 곡명은 그 자리에서 공개됩니다.',
    veiled: true,
  },
];

export default function Program() {
  return (
    <section id="program" className="py-16 px-6 max-w-screen-md mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-3 tracking-tight">곡 리스트</h2>
        <p className="text-bravi-ink/60 text-sm">시리즈의 결을 보여 주는 예시 레퍼토리입니다. 회차마다 곡은 달라집니다.</p>
      </div>

      <div className="space-y-3">
        {programs.map((item) => {
          if (item.veiled) {
            return (
              <div
                key={item.id}
                className="encore-veil glass-panel px-5 py-4 sm:px-6 sm:py-5 border-bravi-pill/40"
              >
                <div className="relative z-10">
                  <span className="sr-only">Track 08, 현장 공개 앵콜. 곡명은 공연 현장에서 공개됩니다.</span>
                  <div className="flex items-start justify-between gap-4" aria-hidden="true">
                    <div className="min-w-0 flex-1">
                      <span className="text-bravi-deep/70 font-mono text-sm mb-1 block">Track {String(item.id).padStart(2, '0')}</span>
                      <h3 className="veiled-title text-lg sm:text-xl font-semibold text-bravi-ink leading-tight pointer-events-none">
                        비밀의 앵콜 트랙
                      </h3>
                      <p className="text-bravi-deep/80 text-xs sm:text-sm mt-1 tracking-[0.18em]">현장에서 공개됩니다</p>
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium mt-2.5 bg-white/10 text-bravi-deep border border-bravi-deep/25">
                        <EyeOff className="w-3.5 h-3.5" />
                        현장 공개 앵콜
                      </div>
                    </div>
                    <span className="shrink-0 mt-0.5 border border-bravi-line bg-white/10 text-bravi-ink/50 px-2.5 py-1 rounded-md text-xs font-medium tracking-[0.2em]">
                      ???
                    </span>
                  </div>
                  <p className="text-bravi-ink/75 text-sm mt-3 leading-relaxed">{item.note}</p>
                </div>
              </div>
            );
          }

          const theme = ensembleTheme[item.ensemble];
          const highlight = item.highlight ? highlightBadge[item.highlight] : null;
          const isPremiere = item.highlight === 'premiere';
          return (
            <div
              key={item.id}
              className={`glass-panel px-5 py-4 sm:px-6 sm:py-5 transition-colors ${theme.card} ${
                isPremiere ? 'border-bravi-pill/50 shadow-[0_10px_28px_rgba(0,0,0,0.28)]' : ''
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0 flex-1">
                  <span className={`${theme.track} font-mono text-sm mb-1 block`}>Track {String(item.id).padStart(2, '0')}</span>
                  <h3 className="text-lg sm:text-xl font-semibold text-bravi-ink leading-tight">{item.title}</h3>
                  {item.source && <p className="text-bravi-ink/50 text-xs sm:text-sm mt-1">{item.source}</p>}
                  {highlight && (
                    <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium mt-2.5 ${highlight.className}`}>
                      <highlight.Icon className={`w-3.5 h-3.5 ${isPremiere ? 'sparkle-icon' : ''}`} />
                      {highlight.label}
                    </div>
                  )}
                </div>
                <span className={`shrink-0 mt-0.5 border px-2.5 py-1 rounded-md text-xs font-medium ${theme.badge}`}>
                  {item.ensemble}
                </span>
              </div>
              <p className="text-bravi-ink/75 text-sm mt-3 leading-relaxed">{item.note}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

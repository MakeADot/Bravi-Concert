import { EyeOff } from 'lucide-react';

type ProgramItem = {
  id: number;
  title: string;
  source: string;
  note?: string;
};

const programs: ProgramItem[] = [
  { id: 1, title: '마중', source: '윤학준' },
  { id: 2, title: 'Libertango', source: '피아졸라' },
  { id: 3, title: 'A time for us', source: '영화 「로미오와 줄리엣」 OST' },
  {
    id: 4,
    title: '사랑의 찬가',
    source: '에디트 피아프',
    note: '2024 파리 올림픽 개막식 삽입곡',
  },
  { id: 5, title: 'Czardas', source: '몬티' },
  { id: 6, title: '항구의 겨울', source: '피아졸라', note: '부에노스아이레스의 사계 中' },
  { id: 7, title: '시편 24', source: '소마트리오' },
  { id: 8, title: 'Reality', source: '영화 「라붐」 OST' },
  { id: 9, title: 'Finale', source: '엔니오 모리코네' },
];

export default function Program() {
  return (
    <section id="program" className="py-16 px-6 max-w-screen-md mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold tracking-tight">곡 리스트</h2>
      </div>

      <div className="glass-panel overflow-hidden">
        <table className="w-full text-left text-sm">
          <caption className="sr-only">11월 18일 1회차 곡 리스트</caption>
          <thead>
            <tr className="border-b border-bravi-line text-xs text-bravi-ink/45">
              <th scope="col" className="w-14 px-4 py-3 font-medium sm:px-5">
                No.
              </th>
              <th scope="col" className="px-3 py-3 font-medium">
                곡명
              </th>
              <th scope="col" className="hidden px-4 py-3 font-medium sm:table-cell sm:px-5">
                작곡 · 출처
              </th>
            </tr>
          </thead>
          <tbody>
            {programs.map((item) => (
              <tr key={item.id} className="border-b border-white/10 align-top">
                <th scope="row" className="px-4 py-2.5 font-mono text-sm font-medium text-bravi-deep sm:px-5">
                  {String(item.id).padStart(2, '0')}
                </th>
                <td className="px-3 py-2.5">
                  <span className="font-semibold text-bravi-ink">{item.title}</span>
                  <span className="mt-0.5 block text-xs leading-relaxed text-bravi-ink/60 sm:hidden">
                    {item.source}
                    {item.note && <span className="mt-0.5 block text-bravi-ink/55">{item.note}</span>}
                  </span>
                </td>
                <td className="hidden px-4 py-2.5 text-bravi-ink/60 sm:table-cell sm:px-5">
                  {item.source}
                  {item.note && <span className="mt-0.5 block text-xs leading-relaxed text-bravi-ink/55">{item.note}</span>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="encore-veil">
          <div className="relative z-10 px-4 py-3 sm:px-5">
            <span className="sr-only">
              앵콜은 곡명을 공개하지 않습니다. 공연이 끝나면 힘찬 박수를 보내 주세요. 박수가 이어지면 앵콜 한 곡을 더 들려드립니다.
            </span>
            <div aria-hidden="true">
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <span className="font-mono text-sm text-bravi-deep/80">Encore</span>
                <span className="font-semibold text-bravi-ink">앵콜</span>
                <span className="inline-flex items-center gap-1 rounded-md border border-bravi-deep/25 bg-white/10 px-2 py-0.5 text-[11px] font-medium text-bravi-deep">
                  <EyeOff className="h-3 w-3" />
                  비공개
                </span>
              </div>
              <p className="mt-1 text-xs leading-relaxed text-bravi-ink/75 sm:text-sm">
                공연이 끝나면 힘찬 박수를 보내 주세요. 박수가 이어지면 앵콜 한 곡을 더 들려드립니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

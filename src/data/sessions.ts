export type Session = {
  id: string;
  path: string;
  dateLabel: string;
  title: string;
  ensemble: string;
  lineup: string;
  feature: string;
};

export const series = {
  title: 'FKI Tower Lobby Concert',
  dateRange: '11.18 – 12.23',
  weekday: '매주 수요일',
  time: '11:50–12:50',
  location: 'FKI타워 1층 로비',
};

export const sessions: Session[] = [
  {
    id: '11-18',
    path: '/11-18',
    dateLabel: '11.18 수',
    title: '3인 3색 겨울 낭만 클래식',
    ensemble: '피아노 3중주 (3인)',
    lineup: '플룻, 첼로, 피아노',
    feature: '3가지 악기의 매력과 차가운 겨울이 만나 꽃피우는 낭만적인 사랑과 열정',
  },
  {
    id: '11-25',
    path: '/11-25',
    dateLabel: '11.25 수',
    title: '굿바이 2026 클래식 세레나데',
    ensemble: '피아노 5중주 (5인)',
    lineup: '바이올린1, 바이올린2, 비올라, 첼로, 피아노',
    feature: '익숙한 현악 4중주 구성에 피아노를 더해 한층 깊어진 음악으로 2026년 한해를 돌아보다.',
  },
  {
    id: '12-02',
    path: '/12-02',
    dateLabel: '12.02 수',
    title: '브라스 판타지아 in christmas',
    ensemble: '금관악기 5중주 (5인)',
    lineup: '트롬본, 호른, 트럼펫1, 트럼펫2, 튜바',
    feature: '금관악기의 화려한 울림으로 명곡을 듣고, 온몸으로 느끼는 크리스마스 사운드.',
  },
  {
    id: '12-09',
    path: '/12-09',
    dateLabel: '12.09 수',
    title: '첼로 프로포즈',
    ensemble: '첼로, 피아노 2중주 (2인)',
    lineup: '첼로 독주, 피아노 반주',
    feature: '로비에서 만나는 첼로 클래식 리사이틀. 첼로의 따뜻한 음색으로 녹이는 추운 겨울.',
  },
  {
    id: '12-16',
    path: '/12-16',
    dateLabel: '12.16 수',
    title: '처음 만나는 하프',
    ensemble: '플룻 하프 듀오 (2인)',
    lineup: '플룻, 하프',
    feature: '대중들에게 낯선 악기인 ‘하프’를 직접 만나보고, 플룻과 하프 선율로 만나는 명곡 리스닝.',
  },
  {
    id: '12-23',
    path: '/12-23',
    dateLabel: '12.23 수',
    title: '재즈 렉처 콘서트',
    ensemble: '재즈 트리오 (3인)',
    lineup: '재즈 보컬 & 피아노, 콘트라베이스, 기타',
    feature: '자연과 동식물을 주제로 한 재즈로 전하는 힐링. 재즈보컬 교수와 함께하는 렉처 콘서트.',
  },
];

export function findSession(id: string | undefined) {
  return sessions.find((session) => session.id === id);
}

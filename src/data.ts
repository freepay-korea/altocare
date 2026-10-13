export interface Product {
  id: string;
  category: "ess" | "custom_pack" | "charger" | "solar";
  name: string;
  subName: string;
  tagline: string;
  imageAlt: string;
  specifications: Record<string, string>;
  features: string[];
  description: string;
}

export interface Strength {
  title: string;
  description: string;
  iconName: string;
}

export interface Partner {
  name: string;
  country: string;
  collaboration: string;
  description: string;
}

export interface Award {
  date: string;
  organization: string;
  prize: string;
  description: string;
}

export interface Milestone {
  year: string;
  title: string;
  items: string[];
}

export const strengths: Strength[] = [
  {
    title: "인버터-BMS-EMS 올인원 통합",
    description: "기존의 분리형 ESS와 달리 인버터, 배터리 관리 장치(BMS), 에너지 관리 소프트웨어(EMS)가 하나로 정교하게 통합 탑재되어 설치 복잡성과 불필요한 비용을 30% 이상 경감합니다.",
    iconName: "Cpu",
  },
  {
    title: "화재 안전성 극대화 (LFP 셀)",
    description: "열 폭발 및 가스 노출 위험이 極히 낮은 최고급 LFP(리튬인산철) 셀을 기반으로 설계되었으며, 다중 보호 안전 회로 알고리즘을 장착하여 도심 주거 공간에서도 완벽히 안심하고 사용합니다.",
    iconName: "ShieldAlert",
  },
  {
    title: "자유로운 블록형 적층 확장",
    description: "2.4kWh 단위의 블록형 모듈 설계를 채택하여 사용자의 가구 에너지 패턴에 맞춰 세로 공간에 자유롭게 쌓아 올릴 수 있습니다 (최소 2.4kWh ~ 최대 24kWh 확장).",
    iconName: "Layers",
  },
  {
    title: "X-Stream 초고속 충전 기술",
    description: "알토케어만의 독자적인 충전 알고리즘 설계로, 단 1시간 이내에 전체 전력의 85%까지 초고속 충전이 가능하여 일상의 비상 전원 대비 능력을 획기적으로 올립니다.",
    iconName: "Zap",
  },
  {
    title: "DFAM 카본 3D 프린팅 하우징",
    description: "특허받은 카본 3D 프린팅 기술과 DFAM(적층제조특화설계)을 접목하여 강성 보강 및 부품 수를 최소화했으며, 수백 배 우수한 열 분산을 유도하는 Heat Pipe 쿨링 설계를 도입했습니다.",
    iconName: "Printer",
  },
  {
    title: "검증된 Made in Korea 신뢰성",
    description: "구미 우수 강소특구 메이커스페이스 연계 및 경북테크노파크 배터리 특구 지정을 기반으로 다수 특허 출원과 정부 수상이 입증한 독보적인 대한민국 차세대 배터리 대표 브랜드입니다.",
    iconName: "CheckCircle",
  },
];

export const products: Product[] = [
  {
    id: "pk-home-ess",
    category: "ess",
    name: "PK HOME ESS",
    subName: "블록형 적층형 올인원 가정용 ESS 시스템",
    tagline: "따뜻하고 안전한 우리집을 위한 올인원 에너지 디바이스",
    imageAlt: "PK HOME ESS System Mockup",
    specifications: {
      "기본 유닛 용량": "2.4 kWh",
      "최대 적층 용량": "24 kWh (최대 10개 모듈 연결)",
      "정격 전압": "315 V / 51.2 V 모듈 규종",
      "출력 파형": "순수 정현파 (Pure Sine Wave)",
      "최대 출력": "4,400 W (순간 피크 차단 기능 탑재)",
      "최적 작동 온도": "20℃ ~ 30℃",
      "보장 사이클": "6,500 Cycle 이상 (하루 1회 완방 기준 17년 이상)",
    },
    features: [
      "인버터 내부 일체형으로 별도의 PCS 배선 작업 불필요",
      "공구가 필요 없는 원터치 Plug & Play 안심 적층 인터페이스",
      "Wi-Fi 및 Bluetooth 연동 모바일 스마트 클라우드 실시간 모니터링 수록",
      "과과전압 보호, 온도 과열 센서 자동 차단 4중 안전 제어",
    ],
    description: "아파트 베란다나 다가구 주택, 복잡한 실외 공간에서도 누구나 쉽게 블록처럼 얹어 설치하는 혁신적인 가정용 에너지 저장장치입니다. 태양광 발전 패널과 즉각 호환되어 누진세를 피하고, 낮에 모은 에너지를 밤에 풍부하게 활용하도록 연계합니다.",
  },
  {
    id: "custom-battery-pack",
    category: "custom_pack",
    name: "Custom Battery Pack",
    subName: "고부가가치 산업 특화형 에너지 팩",
    tagline: "한계를 뛰어넘는 특수 목적 맞춤형 프리미엄 배터리",
    imageAlt: "Custom Laser 3D-Printed Carbon Battery Case",
    specifications: {
      "하우징 소재": "탄소 섬유 복합소재 (Carbon-Reinforced Polyimide)",
      "적용 공법": "DFAM 3D 프린트 적층형 하우징 기법",
      "열관리 기술": "Active Copper Heat Pipe & 전도성 쿨링 모듈",
      "안전 등급": "방수방진 IP65 최고 하이브리드 수준 충족",
    },
    features: [
      "Z축 수직 충격 및 낙하 파손 방지용 강화 셀 홀더 아키텍처",
      "수백 배 빠른 전열 효율의 히트파이프 모사로 배터리 소모 수명 대시 급증 제거",
      "수요 부처의 규격과 외형(L자, ㄷ자, 원형 등)에 맞춰 자유로운 3D 프리폼 설계 가능",
      "방산용 초정밀 전자기 배기 차단 및 경량 마그네틱 인클로저 적용",
    ],
    description: "국방 방산 현장의 군용 장비를 비롯해 캠핑 매니아들을 위한 초경량 파워뱅크, 극한의 환경에서 구동하는 AGV 스마트 팩토리 로봇, 미세 정밀 원격을 제어하는 태양광 무인 드론, 스마트 농기계 등 배터리 가혹 조건이 지속되는 분야에 완벽하게 대응하기 위해 3D 프린팅 공법과 탄소소재 엔지니어링으로 맞춤 생산되는 배터리팩 솔루션입니다.",
  },
  {
    id: "ev-charger-explorer",
    category: "charger",
    name: "EV Charger | 22kW Explorer",
    subName: "프리미엄 3상 급완속 벽걸이 충전기",
    tagline: "전 세계 까다로운 안전 인증을 통과한 미래형 충전 터미널",
    imageAlt: "Altocare EV Charger Explorer Style",
    specifications: {
      "정격 전계": "11kW / 22kW (3상 32A 선택 사양)",
      "인증 내역": "CE, CB, UKCA, TR25 유럽 글로벌 표준 충족",
      "보안 기능": "RFID 카드(2개 기본 제공) 및 지능형 과충전 방지 스마트 IC 탑재",
      "기본 하우징": "알루미늄 아우터쉘 & 난연 하이테크 소재 적용",
    },
    features: [
      "벽면 장착(Wall-Mount) 및 스탠드 전용 옵션 받침대 교체 가능",
      "지능형 쿨링 회회로 및 실시간 전력 사용량 계측 전면 디스플레이 스크린",
      "글로벌 표준 Type 2 커넥터 일치 및 높은 내충격 등급 확보",
    ],
    description: "유럽 및 영미권의 복잡한 국가 안전 표준을 단숨에 국산화한 22kW 프리미엄 충전기로, 주차 타워, 빌라 주동, 관공서 및 소형 상업시설 벽면에 세련되게 장착할 수 있습니다. 수려한 유치형 인터페이스와 스마트 보안 충전을 지원합니다.",
  },
  {
    id: "solar-panel-flex",
    category: "solar",
    name: "Flexible & Portable Solar Panels",
    subName: "고효율 박막 곡면 및 고성능 보더형 야외 태양광 패널",
    tagline: "어디서나 태양빛을 모아 에너지를 영원히 채우다",
    imageAlt: "High-Flex Curve Solar Panel Layout",
    specifications: {
      "Flexible 패널 출력": "100W / 200W / 110W 선택식",
      "Flexible 곡면 범위": "최대 30도 복합 곡률 완전 밀착형 아치 구현",
      "Portable 패널 출력": "60W / 100W / 120W / 200W 폴딩형",
      "변환 효율": "22% 이상의 최고 등급 단결정 고효율 셀 장착",
    },
    features: [
      "캠핑카 루프, 보트 데크, 가파른 기와 지붕 곡면에도 유연하게 부착하는 Flexible 형",
      "야외 텐트 바닥이나 베란다 펜스 난간에 간편하게 걸어 사용하는 휴대 슬라이드 형",
      "방수 정션 박스(IP67) 가혹한 열대 조우 야외 야생 사용 최적화 설계",
    ],
    description: "자연으로부터 전력을 자급자족하는 최선의 동반자입니다. 뛰어난 아우터 내구성 가죽과 특수 무광 에폭시 마감 기공 기법으로 오염을 최소화하며, 적층형 HOME ESS 입력을 위해 최적의 DC 전송 제어 단자를 규격화하여 직결 사용하도록 도왔습니다.",
  },
];

export const partners: Partner[] = [
  {
    name: "중국 Xinhui Group (신휘 그룹)",
    country: "China (중국)",
    collaboration: "LFP 배터리 셀 독점 계약 공급선 및 글로벌 유통협력",
    description: "BYD 자동차의 핵심 배터리 부문 연구소장 출신인 왕이쥔 회장이 설립한 상위 10대 배터리 전문 대기업. 8만 평 규모 공장 및 35개 SMT 자동화 생산 라인을 가동하며 알토케어에 정품 최고성능 인산철 배터리 셀을 안정적인 가격 조건으로 전량 공급해줍니다.",
  },
  {
    name: "중국 심천 Troncube (트론큐브 R&D 센터)",
    country: "China Shenzhen (심천)",
    collaboration: "고지능형 BMS 및 초정밀 EMS 알고리즘 독점 기술 제휴",
    description: "ATL, Ecoflow, Emerson의 핵심 기술 개발을 주도한 장치 사장이 이끄는 전문 하드웨어/임베디드 솔루션 그룹. 70명 이상의 일급 R&D 역량을 바탕으로 알토케어 전용 초정밀 스마트 배터리 진단 보정 프로그램을 공급 및 현지 실증 가치를 공유하고 있습니다.",
  },
  {
    name: "B2Solution (비투솔루션)",
    country: "South Korea (대한민국)",
    collaboration: "방산 민수용 극강 배터리 공동 개발 및 10억 규모 수주 협력",
    description: "한화(Hanwha) 우수 공식 파트너이자 20년 이상의 정밀 방위 산업 분야 특수 노하우를 갖춘 전력 솔루션 리더. 알토케어 고내구성 카본 배터리팩 유치를 통해 국방/방산 장비 전원에 대한 대규모 계약을 함께 주도하고 있습니다.",
  },
  {
    name: "금오공과대학교 & 경북창조경제혁신센터",
    country: "South Korea (대한민국)",
    collaboration: "SOH 예측 진단 장치 특허 이전, 대학내 연구소기업 설립 유치",
    description: "배터리 잔여 기수 수명(State of Health, SOH)을 98% 이상의 높은 지수로 정밀 감별해내는 금오공대 학문 특허를 양수받았으며, 경북 테크노파크 배터리 특구 지정을 발판으로 산학 연계 기술 고도화에 전폭 기여하고 있습니다.",
  },
];

export const awards: Award[] = [
  {
    date: "2016.12",
    organization: "대한민국 국방부 장관 및 행정부",
    prize: "도전! K-Start Up 국방부 장관상 수상",
    description: "군수 부대 내 무정전 하이브리드 고신뢰성 전원장치 배치 특성화 아이디어로 최고 훈격 장관상 수상.",
  },
  {
    date: "2016.06",
    organization: "대한민국 국방부",
    prize: "국방 창업 챌린지 육군참모총장상 수상",
    description: "야지에서 사용되는 스마트 임베디드 백업 파워 서플라이 시제품으로 혁신 가치 입증.",
  },
  {
    date: "2018.12",
    organization: "대한민국 산업통상자원부",
    prize: "임베디드 SW 경진대회 산업부 장관상 수상",
    description: "인공지능 기반 IoT 에너지 다중 전력 복구 분산 관리 알고리즘 프로그램의 완성도 부각.",
  },
  {
    date: "2025.02",
    organization: "구미강소특구 발전협의회",
    prize: "구미 Tech-Challenge 최우수상 수상",
    description: "카본 3D 프린팅 가벼운 구조 하우징을 활용한 전기차(EV) 및 스마트 카트용 패키징 혁신 공로 인정.",
  },
];

export const milestones: Milestone[] = [
  {
    year: "2025",
    title: "기술 완성 및 초기 계약",
    items: [
      "인버터-BMS 일체형 HOME ESS 1차 시제품 성능 검증 완료",
      "B2Solution 방산 제품 연합 개발 및 10억 발주 수주",
      "금오공대 SOH 상태 예측 특허 권한 양도 이전 및 연구소기업 통과",
    ],
  },
  {
    year: "2026",
    title: "국내 시장 점유율 본격 진입 및 해외 인증",
    items: [
      "초간편 설치형 주택 ESS 국내 시범 단지 프로젝트 가동",
      "전기차 충전기 국내 및 KC/CE 추가 통신 전정 표준 적합성 통과",
      "LFP 브랜딩 확산 및 전동 골프카트용 국산화 본격 납품 시작",
    ],
  },
  {
    year: "2027",
    title: "글로벌 시장 수출 및 제품다양화",
    items: [
      "유럽 폴란드 대리점 구축 및 서유럽/남유럽 가구 ESS 정부 보조금 매칭 수출 (목표 매출 120억 돌파 예상)",
      "LFP 친환경 아키텍처 연계 차세대 소형 모빌리티 수출 및 인도 국방 시장 타겟 공급량 확산",
    ],
  },
  {
    year: "2028-2030",
    title: "글로벌 Top-Tier 강소브랜드 등극",
    items: [
      "동남아 전력 인프라 취약지 맞춤형 오프그리드 마이크로그리드 HOME ESS 보급 확대",
      "사용후 배터리 잔여 자원 리사이클링 재조립(Re-manufacturing) 친환경 패키징 공정화",
      "2030년 매출 748억, 평균 영업이익률 14.5% 달성 및 기술성 평가 통과 기술특례 주식상장(IPO) 실현",
    ],
  },
];

export const faqs = [
  {
    question: "리튬 인산철(LFP) 배터리는 기존 리튬 이온 배터리보다 왜 안전한가요?",
    answer: "리튬 이온 배터리에 주로 흔히 쓰이는 코발트나 니켈 계열은 고온이나 외부 자극 시 화학적으로 산소를 쉽게 배출하여 순식간에 화재나 가스 열 폭주를 유발합니다. 반면 LFP 배터리는 열적 안정성이 매우 강한 오산화철인 올리빈 원소 구조(LiFePO4)를 갖고 있어서 과충전이나 내부 쇼트에도 가스 방출이나 폭발 위험이 없고 안전합니다. 이에 알토케어는 오직 LFP 배터리만을 원자재로 엄격히 규격 사용합니다.",
  },
  {
    question: "블록형 배터리를 추가로 쌓을 때 공구나 스크류 조립이 필요한가요?",
    answer: "아니요, 전혀 필요하지 않습니다. 조립 편의성과 안전한 연결 전력 절연을 완벽하게 맞물리게 하는 알토케어만의 원터치 락킹 플러그 설계가 하드웨어 모듈 하단과 상단에 구비되어 있습니다. 가벼운 모듈을 순서대로 블록처럼 맞춰 끼우기만 하면 전원 전송 및 통신 신호 버스라인이 실시간 내부 통합 제어되며 즉각 작동합니다.",
  },
  {
    question: "아파트 베란다나 좁은 다가구 주택에도 설치하기 수월할까요?",
    answer: "네! 매우 이상적인 주택형 설치를 지향합니다. 인버터(PCS) 케이스가 배터리 외벽과 단일하게 결합된 슬림 세로형 구조이므로 단 가로 50cm, 세로 30cm 내외의 슬림한 세로 유휴 바닥만 있다면 베란다 벽면 에어컨 실외기 벤트 공간이나 유휴 구역에 설치하기 좋습니다. Flexible 곡면형 태양광 패널을 창문 밖 난간 펜스에 매달면 누구나 자급자족을 위한 스마트한 자체 발전소를 무리 없이 완성할 수 있습니다.",
  },
  {
    question: "보증 기간과 셀 수명은 어느 정도인가요?",
    answer: "알토케어 전용 HOME ESS 등급 셀은 극단적 가혹 구동 충방전에도 무려 6,500회(Cycle) 이상의 성능 충족을 유지합니다. 이는 매일 매일 한 번씩 끝까지 충전하고 다 쓰는 것을 평생 복사하여 17년 이상 장기 구동해도 새 배터리 성능 대비 80% 이상의 극강 보존율을 자랑하는 수치입니다. 자사는 뛰어난 품질을 기반으로 업계 최고 수준의 장기 품질 연장 워런티를 함께 약속합니다.",
  },
];

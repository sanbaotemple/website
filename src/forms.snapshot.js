// Shared by the browser form and the server validator. Edit dates, prices and
// wording here; the server re-checks every amount against this file.

// 稱謂下拉選單（順序 1 → 2 → 3，依寺方提供）
export const RELATIONS = [
  '祖先', '高祖父', '高祖母', '曾祖父', '曾祖母', '祖父', '祖母', '外祖父', '外祖母', '父', '母',
  '伯父', '伯母', '叔父', '叔母', '姑父', '姑母', '舅父', '舅母', '姨父', '姨母',
  '夫', '妻', '兄(未婚)', '姊(未婚)', '弟', '妹', '兒', '女', '未出世子女', '朋友', '累劫',
  '地基主', '十方(敬薦)', '無緣子女', '師長', '比丘／尼(叩薦)', '嫂嫂', '姊夫', '姪兒', '十方(薦)',
  '比丘／尼(敬薦)', '地基主(等眾)', '兄(已婚)', '姊(已婚)', '優婆夷', '弟媳', '妹婿'
];

// 可同登一支超薦大牌的夫妻組合
export const COUPLES = [
  ['高祖父', '高祖母'], ['曾祖父', '曾祖母'], ['祖父', '祖母'], ['外祖父', '外祖母'], ['父', '母'],
  ['伯父', '伯母'], ['叔父', '叔母'], ['姑父', '姑母'], ['舅父', '舅母'], ['姨父', '姨母'],
  ['夫', '妻'], ['兄(已婚)', '嫂嫂'], ['姊(已婚)', '姊夫'], ['弟', '弟媳'], ['妹', '妹婿']
];

const ANCESTOR = '祖先';
const isCouple = (a, b) => COUPLES.some(([x, y]) => (x === a && y === b) || (x === b && y === a));

// 一支牌位可登：任一位；祖先＋一位；一對夫妻；祖先＋一對夫妻。
export function validRelations(list) {
  if (list.length <= 1) return true;
  if (new Set(list).size !== list.length) return false;
  const rest = list.filter(r => r !== ANCESTOR);
  if (list.length === 2) return rest.length === 1 || isCouple(list[0], list[1]);
  if (list.length === 3) return rest.length === 2 && isCouple(rest[0], rest[1]);
  return false;
}

export const VOWS = [
  '國無惡道願', '不更惡道願', '身真金色願', '形色相同願', '宿命智通願', '天眼普見願', '天耳普聞願', '他心悉知願',
  '神足無礙願', '不貪計身願', '住正定滅願', '光明無量願', '壽命無量願', '聲聞無量願', '隨願修短願', '不聞惡名願',
  '諸佛稱揚願', '十念必生願', '臨終接引願', '欲生果遂願', '三十二相願', '一生補處願', '供養諸佛願', '供具隨意願',
  '演說妙智願', '那羅延身願', '一切嚴淨願', '道樹高顯願', '誦經得慧願', '慧辯無限願', '國土清淨願', '寶香妙嚴願',
  '蒙光柔軟願', '聞名得忍願', '脫離女身願', '常修梵行願', '人天致敬願', '衣服隨念願', '樂如漏盡願', '樹中現剎願',
  '諸根具足願', '清淨解脫願', '生尊貴家願', '具足德本願', '住定見佛願', '隨願聞法願', '聞名不退願', '得三法忍願'
].map((name, i) => `第${i + 1}願 ${name}`);

// kind: tablet（稱謂＋亡者＋陽上）、vow（芳名＋願）、offer（芳名＋多項金額）
// price: 美分；null = 信眾自填金額
export const FORMS = {
  amitabha: {
    items: [
      { key: 'big', label: '超薦大牌', price: 10000, kind: 'tablet', deceased: 3, living: 6 },
      { key: 'small', label: '超薦小牌', price: 3000, kind: 'tablet', deceased: 1, living: 4 },
      { key: 'tablet', label: '隨喜牌位', price: null, kind: 'tablet', deceased: 1, living: 2 },
      { key: 'vow', label: '四十八大願', price: 10000, kind: 'vow' },
      { key: 'offer', label: '供齋花果', price: null, kind: 'offer', parts: ['供齋', '花果'] }
    ]
  },
  // 2027 護法委員（以一年為期）：每月金額不得低於該級別最低額；一次繳全年＝每月金額 × 12
  guardian: {
    title: '2027 護法委員功德登記表',
    period: '2027 年 1 月至 2027 年 12 月',
    items: [
      { key: 'member', label: '護法委員', price: null, kind: 'member',
        levels: [
          { key: 'light', label: '佛光委員', min: 20000, note: '一個名字闔家' },
          { key: 'prajna', label: '般若委員', min: 10000, note: '個人名' },
          { key: 'compassion', label: '慈悲委員', min: 5000, note: '個人名' },
          { key: 'wisdom', label: '智慧委員', min: 2000, note: '個人名' }
        ],
        plans: [{ key: 'monthly', label: '每月繳', months: 1 }, { key: 'yearly', label: '一次繳全年', months: 12 }] }
    ]
  }
};

// open / close: 登記開放與截止日期（舊金山時間）。未填則自動為法會前兩個月開放、法會結束後關閉。
// form: 對應 FORMS；未填表示表單尚在準備，網站顯示聯絡方式。
export const EVENTS = [
  { id: 'amitabha-2026', title: '彌陀法會', start: '2026-12-19', end: '2026-12-20', time: '上午 9:30 – 下午 5:00', form: 'amitabha',
    intro: '念佛一聲，福增無量；禮佛一拜，罪滅河沙。' },
  { id: 'guardians-2026', title: '護法委員功德回向法會', start: '2026-12-27', end: '2026-12-27', form: 'guardian',
    intro: '護持道場，培福植慧。功德回向：每日早晚課誦經文回向；年度大型法會時於佛前宣讀文疏回向；護法委員家中婚喪喜慶，可享本寺之協助與服務。' },
  { id: 'light-2027', title: '2027 光明燈', start: '2027-02-21', end: '2027-02-21' },
  { id: 'peace-lantern-2027', title: '春節平安燈法會', start: '2027-02-05', end: '2027-02-20' },
  { id: 'celestial-2027', title: '供佛齋天法會', start: '2027-02-13', end: '2027-02-14' },
  { id: 'compassion-spring-2027', title: '觀世音菩薩誕辰大悲懺法會', start: '2027-03-21', end: '2027-03-21' },
  { id: 'qingming-2027', title: '孝親報恩清明水懺法會', start: '2027-04-04', end: '2027-04-04' },
  { id: 'bathing-2027', title: '浴佛法會', start: '2027-05-09', end: '2027-05-09' },
  { id: 'ulkamukha-2027', title: '焰口法會', start: '2027-06-13', end: '2027-06-13' },
  { id: 'compassion-summer-2027', title: '觀世音菩薩成道大悲懺法會', start: '2027-07-11', end: '2027-07-11' },
  { id: 'sangha-2027', title: '供僧道糧', start: '2027-07-18', end: '2027-07-18' },
  { id: 'liang-2027', title: '孝親報恩梁皇法會', start: '2027-08-05', end: '2027-08-08' },
  { id: 'compassion-autumn-2027', title: '觀世音菩薩出家大悲懺法會', start: '2027-10-17', end: '2027-10-17' },
  { id: 'medicine-2027', title: '藥師法會', start: '2027-10-23', end: '2027-10-24' }
];

const WEEKDAY = '日一二三四五六';
const parts = iso => iso.split('-').map(Number);
const weekday = iso => { const [y, m, d] = parts(iso); return WEEKDAY[new Date(Date.UTC(y, m - 1, d)).getUTCDay()]; };
const shift = (iso, months, days = 0) => { const [y, m, d] = parts(iso); return new Date(Date.UTC(y, m - 1 + months, d + days)).toISOString().slice(0, 10); };

export function dateText(ev) {
  const [y, m, d] = parts(ev.start), [, m2, d2] = parts(ev.end);
  if (ev.start === ev.end) return `${y} 年 ${m} 月 ${d} 日（週${weekday(ev.start)}）`;
  const tail = m2 === m ? `${d2} 日` : `${m2} 月 ${d2} 日`;
  return `${y} 年 ${m} 月 ${d} 日 – ${tail}（週${weekday(ev.start)} – 週${weekday(ev.end)}）`;
}

export function shortDate(ev) {
  const [, m, d] = parts(ev.start), [, m2, d2] = parts(ev.end);
  return ev.start === ev.end ? `${m}/${d}` : m === m2 ? `${m}/${d} – ${d2}` : `${m}/${d} – ${m2}/${d2}`;
}

// 舊金山當地日期
export const today = (now = new Date()) => now.toLocaleDateString('en-CA', { timeZone: 'America/Los_Angeles' });

export function windowOf(ev) {
  return { open: ev.open || shift(ev.start, -2), close: ev.close || ev.end };
}

export function stateOf(ev, now = new Date()) {
  const t = today(now), w = windowOf(ev);
  if (t > w.close) return 'closed';
  if (t < w.open) return 'upcoming';
  return ev.form ? 'open' : 'preparing';
}

export const findEvent = id => EVENTS.find(e => e.id === id);

// All site text lives here (中文 + English). Edit freely; run `npm run build`.
// Photos: put files in public/img/ and reference them by file name.
// Event dates & registration windows come from the registration site (forms.js),
// so they are NOT repeated here — only display extras (photo, English name).

export const FORM_URL = 'https://sanbao-dharma-2026.vercel.app';

const site = {
  phone: '(415) 776-6538', phoneTel: '+14157766538', email: 'sanbao@ibps.org',
  mapUrl: 'https://maps.google.com/?q=1750+Van+Ness+Ave,+San+Francisco,+CA+94109',
  mapEmbed: 'https://www.google.com/maps?q=1750+Van+Ness+Ave,+San+Francisco,+CA+94109&output=embed',
  social: [
    { label: 'YouTube', href: 'https://www.youtube.com/@SanBaoTemple' },
    { label: 'Instagram', href: 'https://www.instagram.com/san.bao.temple' },
    { label: 'Facebook', href: 'https://www.facebook.com/sanbaotemple/' },
  ],
};

// 2027 行事曆（2026.11.05 對外版）
const calendar = [
  { d: '2026-12-19', to: '20', w: '六–日', zh: '彌陀法會', en: 'Amitabha Buddha Dharma Service' },
  { d: '2026-12-27', w: '日', zh: '護法委員功德回向法會', en: 'Dharma Protectors Merit Dedication Service' },
  { d: '2027-01-03', w: '日', zh: '春節出普坡（大掃除）', en: 'Temple Spring Cleaning Day' },
  { d: '2027-01-10', w: '日', zh: '佛陀成道紀念日－法寶節', en: 'Shakyamuni Buddha Enlightenment Day' },
  { d: '2027-01-15', w: '五', zh: '法寶節正日', en: 'Dharma Day' },
  { d: '2027-01-17', w: '日', zh: '2026 年光明燈圓燈法會（無超薦）', en: 'Completion of 2026 Light Offering Dharma Service' },
  { d: '2027-02-01', w: '一', zh: '《杯杯精彩・生活有味》展覽', en: '' },
  { d: '2027-02-05', w: '五', zh: '除夕延生普佛', en: "Chinese New Year's Eve Dharma Service" },
  { d: '2027-02-06', to: '2/20', w: '五–六', zh: '春節平安燈（無超薦）', en: 'Peace Lantern Inauguration Service' },
  { d: '2027-02-07', w: '日', zh: '新春禮千佛法會（無超薦）', en: 'Homage to Thousand Buddhas' },
  { d: '2027-02-13', to: '14', w: '六–日', zh: '供佛齋天法會（無超薦）', en: 'Offering Ceremony for Buddhas and Celestial Guardians' },
  { d: '2027-02-20', w: '三', zh: '星雲大師圓寂紀念日', en: 'Venerable Master Hsing Yun Memorial Day' },
  { d: '2027-02-21', w: '日', zh: '2027 年光明燈上燈法會（無超薦）', en: '2027 Light Offering Inauguration Service' },
  { d: '2027-03-08', w: '一', zh: '佛光山信徒香會暨星雲大師出家紀念日', en: "Devotee Gathering (Ven. Master Hsing Yun's Renunciation Day)" },
  { d: '2027-03-21', w: '日', zh: '大悲懺法會（觀世音菩薩誕辰紀念日・無超薦）', en: 'Great Compassion Repentance Service' },
  { d: '2027-03-23', w: '二', zh: '春季社教課開學', en: 'Spring classes begin' },
  { d: '2027-03-26', w: '五', zh: '觀世音菩薩誕辰紀念日正日', en: "Avalokitesvara Bodhisattva's Birthday" },
  { d: '2027-03-27', w: '六', zh: '義工培訓日', en: 'Volunteer Training Day' },
  { d: '2027-03-28', w: '日', zh: '洪蘭老師演講', en: 'Lecture by Prof. Ovid Tzeng Hung Lan' },
  { d: '2027-04-04', w: '日', zh: '孝親報恩清明水懺法會', en: 'Qing-Ming Water Repentance Dharma Service' },
  { d: '2027-04-05', w: '一', zh: '清明正日', en: 'Qing-Ming Day' },
  { d: '2027-04-23', to: '25', w: '五–日', zh: '北美洲聯誼會（4/24 慧寬法師演講；4/25 無共修）', en: 'North America Fellowship Gathering' },
  { d: '2027-05-01', w: '六', zh: '佛誕節展覽', en: "Buddha's Birthday Exhibition" },
  { d: '2027-05-02', w: '日', zh: '慧開法師佛學講座', en: 'Buddhist lecture by Ven. Hui Kai' },
  { d: '2027-05-08', w: '日', zh: '雲水浴佛車', en: 'Mobile Buddha Bathing' },
  { d: '2027-05-09', w: '日', zh: '浴佛法會（無超薦）／母親節', en: "Buddha Bathing Dharma Service / Mother's Day" },
  { d: '2027-05-16', w: '日', zh: '佛光日──佛光山開山 61 周年（全球同步抄寫心經）', en: "Fo Guang Shan 61st Anniversary — Global Heart Sutra Transcription" },
  { d: '2027-06-13', w: '日', zh: '焰口法會', en: 'Yankou Dharma Service' },
  { d: '2027-06-20', w: '日', zh: '慶祝父親節活動', en: "Father's Day Celebration" },
  { d: '2027-07-11', w: '日', zh: '大悲懺法會（觀世音菩薩成道紀念日・無超薦）', en: 'Great Compassion Repentance Service (Enlightenment Day of Avalokitesvara)' },
  { d: '2027-07-18', w: '日', zh: '北美供僧法會', en: 'North America Sangha Offering Service' },
  { d: '2027-08-02', w: '一', zh: '孝道月／早晚課地藏經開始', en: 'Filial Piety Month begins' },
  { d: '2027-08-05', to: '8', w: '四–日', zh: '北加州孝親報恩梁皇法會', en: 'Emperor Liang Repentance Service' },
  { d: '2027-08-23', w: '一', zh: '佛光山供僧法會暨星雲大師誕辰紀念日', en: "Sangha Offering Service & Ven. Master Hsing Yun's Birthday" },
  { d: '2027-10-12', w: '六', zh: '秋季社教課開學', en: 'Autumn classes begin' },
  { d: '2027-10-17', w: '日', zh: '大悲懺法會（觀世音菩薩出家紀念日・無超薦）', en: 'Great Compassion Repentance Service (Renunciation Day of Avalokitesvara)' },
  { d: '2027-10-23', to: '24', w: '六–日', zh: '藥師法會', en: 'Medicine Buddha Dharma Service' },
  { d: '2027-10-30', w: '六', zh: '義工培訓日', en: 'Volunteer Training Day' },
  { d: '2027-11-06', w: '六', zh: '三寶寺建築影像展', en: 'San Bao Temple Architecture Photo Exhibition' },
  { d: '2027-12-11', to: '12', w: '六–日', zh: '彌陀法會', en: 'Amitabha Buddha Dharma Service' },
  { d: '2027-12-26', w: '日', zh: '護法委員、建寺委員功德回向法會', en: 'Dharma Protectors & Temple-Building Committee Merit Dedication' },
];

// Extras for events listed in the registration site's forms.js
const eventInfo = {
  'amitabha-2026': { en: 'Amitabha Buddha Dharma Service', img: 'poster-amitabha.jpg' },
  'guardians-2026': { en: 'Dharma Protectors Merit Dedication', img: 'news/2026-01-03-2/1.jpg' },
  'light-2027': { en: '2027 Light Offering', img: 'news/2026-03-08-2/1.jpg' },
  'peace-lantern-2027': { en: 'Peace Lantern Service', img: 'news/2026-02-18-1/1.jpg' },
  'celestial-2027': { en: 'Offering to Buddhas & Celestial Guardians', img: 'shrine-hall.jpg' },
  'compassion-spring-2027': { en: 'Great Compassion Repentance' },
  'qingming-2027': { en: 'Qing-Ming Water Repentance' },
  'bathing-2027': { en: 'Buddha Bathing Service' },
  'ulkamukha-2027': { en: 'Yankou Dharma Service' },
  'compassion-summer-2027': { en: 'Great Compassion Repentance' },
  'sangha-2027': { en: 'Sangha Offering' },
  'liang-2027': { en: 'Emperor Liang Repentance' },
  'compassion-autumn-2027': { en: 'Great Compassion Repentance' },
  'medicine-2027': { en: 'Medicine Buddha Dharma Service' },
};

// 友善連結（首頁文本素材）
const friends = {
  zh: [
    { label: '佛光山全球資訊網', href: 'https://www.fgs.org.tw/' },
    { label: '佛陀紀念館', href: 'https://www.fgsbmc.org.tw/tw/index.aspx' },
    { label: '人間佛教研究院', href: 'https://www.fgsihb.org/dictionary/?__locale=zh_TW' },
    { label: '佛光山叢林學院', href: 'https://tsunglin.fgs.org.tw/' },
    { label: '人間衛視', href: 'https://www.bltv.tv/' },
    { label: '人間通訊社', href: 'https://www.lnanews.com/home' },
  ],
  en: [
    { label: 'Fo Guang Shan', href: 'https://www.fgs.org.tw/en/' },
    { label: 'Buddha Museum', href: 'https://www.fgsbmc.org.tw/en/index.aspx' },
    { label: 'Institute of Humanistic Buddhism', href: 'https://www.fgsihb.org/dictionary/?__locale=en' },
    { label: 'FGS Monastic Retreat', href: 'https://www.fgs.org.tw/events/fgmonasticretreat/index.html' },
    { label: 'BLTV', href: 'https://www.youtube.com/@FGSBLTV' },
    { label: 'Merit Times News', href: 'https://www.lnanews.com/home' },
  ],
};

// 大師法語 (scratch card). 寺方可增刪。
const quotes = {
  zh: [
    { text: '心中有佛，所見皆佛。' },
    { text: '給人信心、給人歡喜、給人希望、給人方便。', note: '四給' },
    { text: '做好事、說好話、存好心。', note: '三好' },
    { text: '有佛法就有辦法。' },
    { text: '你大我小，你對我錯，你樂我苦，你有我無。' },
    { text: '以退為進，以眾為我，以無為有，以空為樂。' },
  ],
  en: [
    { text: 'When the Buddha is in your heart, everything you see is the Buddha.' },
    { text: 'Give others faith, joy, hope and convenience.', note: 'The Four Givings' },
    { text: 'Do good deeds, speak good words, think good thoughts.', note: 'The Three Acts of Goodness' },
    { text: 'With the Dharma, there is always a way.' },
    { text: 'You are great, I am small; you are right, I am wrong; you are happy, I endure; you have, I go without.' },
    { text: 'Retreat in order to advance; see the community as oneself; find having in not having; find joy in emptiness.' },
  ],
};

const history = {
  // 依寺方確認文本，逐字照錄
  zh: ["1987年佛光山三寶寺落腳舊金山5499 California Street，在星雲大師的指導下，依門法師覓得1750 Van Ness Avenue (現三寶寺位址)，經依勤法師與信眾的集體創作，終於1991年元旦佛光書局落成，同年3月27日，新任住持依照法師代大眾向大師請法，為三寶寺大殿紅柱題字：「佛光法水常住三寶寺，功德平安永在信徒家。」", "三十多年來，除寺院一般共修與年度法會外，三寶寺駐錫法師與國際佛光會舊金山協會陸續舉辦其他各項弘法活動，如：佛學講座、家庭普照、禪修班、中英文佛學研討班、灣區各地讀書會、佛光書局、冬令救濟、義診、慰問老人院、臨終關懷，以達淨化人心的宗教功能。多年努力下，信眾需求增加，建築空間幾次調整仍不敷使用，故在佛光山開山星雲大師的指導下，特派如揚法師開始重建計畫；如揚法師為佛光山北加州總住持，統籌管理三寶寺、佛光寺、佛立門文教中心、菩提寺，在北加州實踐星雲大師人間佛教弘法。", "三寶寺興建經過2年的努力，終於在2021年9月9日將進行三寶寺重建公聽會。3月14日舊金山市府廳出席「舊金山土地使用性質公聽會 」通過。2024年11月舉行「上梁典禮」典禮。2025年3月大殿大佛定位，並舉辦一場新三寶寺興建座談會。今三寶寺即將完工，年底將回1750 Van Ness Ave, San Francisco, CA 94109繼續人間佛教的弘法。"],
  en: [
    'San Bao Temple began in 1987 at 5499 California Street, San Francisco. Under the guidance of Venerable Master Hsing Yun, Venerable Yi Men found the site at 1750 Van Ness Avenue, and through the joint effort of Venerable Yi Qin and devotees, the Fo Guang Bookstore opened there on New Year’s Day 1991. That March 27, Venerable Yi Zhao, the temple’s new head, asked the Master for an inscription for the shrine’s red pillars: “May the Dharma of Buddha’s Light abide in San Bao Temple; may merit and peace dwell in every devotee’s home.”',
    'For more than thirty years, alongside regular practice and annual services, the temple and the BLIA San Francisco chapter have offered Buddhist lectures, home blessings, meditation classes, Chinese and English study groups, book clubs across the Bay Area, the bookstore, winter relief, free clinics, visits to senior homes and hospice care.',
    'As the community grew, the old building could no longer serve it. At the Master’s direction, Venerable Ru Yang — head of Fo Guang Shan Northern California, overseeing San Bao Temple, Fo Guang Temple, Bodhi Temple and the Fo Li Men center — began the rebuilding.',
    'After two years of work, the rebuild went to a public hearing on September 9, 2021, and was approved by San Francisco City Hall at a land-use hearing on March 14. The topping-out ceremony was held in November 2024, and the great Buddha was set in place in March 2025. The temple has now returned to 1750 Van Ness Ave to continue sharing Humanistic Buddhism.',
  ],
};

// ---------------- 中文 ----------------
const zh = {
  site: { ...site, name: '佛光山三寶寺', society: 'American Buddhist Cultural Society', address: '1750 Van Ness Ave, San Francisco, CA 94109', hours: '週二至週日 10:00 – 16:00（週一休息）', desc: '佛光山三寶寺位於舊金山 Van Ness 大道，提供法會共修、佛學課程、社區關懷與義工服務。' },
  ui: { register: '線上登記', registerShort: '法會登記', registerOnline: '線上登記', registering: '登記中', donate: '護寺捐款', calendar: '行事曆', nextService: '下一場法會', opensOn: d => `${Number(d.slice(5, 7))}/${Number(d.slice(8))} 開放登記`, byPhone: '請致電寺方登記', menu: '選單', mainNav: '主選單', skip: '跳到主要內容', visit: '參訪', contact: '聯絡', friends: '友善連結', date: '日期', event: '活動', older: '上一篇', newer: '下一篇', poster: '海報', close: '關閉', open: '線上登記', prev: '上一張', next: '下一張', save: '儲存星雲法語', signup: '報名', signupSoon: '報名連結即將提供', courseCount: n => `${n} 門課程`, newsInChinese: '' },
  eventInfo: Object.fromEntries(Object.entries(eventInfo).map(([k, v]) => [k, { img: v.img }])), eventFallbackImg: 'shrine-hall.jpg',
  calendar, friends: friends.zh,
  nav: [
    { label: '認識三寶寺', href: '/about/', sub: [{ label: '建寺緣起', href: '/about/#temple' }, { label: '設計理念', href: '/about/#design' }, { label: '佛光山宗旨', href: '/about/#fgs' }, { label: '佛光會・青年團', href: '/about/#blia' }] },
    { label: '空間導覽', href: '/tour/' },
    { label: '創辦人', href: '/founder/' },
    { label: '活動資訊', href: '/events/', sub: [{ label: '年度法會', href: '/events/#upcoming' }, { label: '每週共修', href: '/events/#weekly' }, { label: '戒會修持', href: '/events/#precepts' }, { label: '課程講座', href: '/events/#classes' }, { label: '社區活動', href: '/events/#community' }, { label: '寺院行事曆', href: '/events/#calendar' }] },
    { label: '人間報導', href: '/news/' },
    { label: '義工服務', href: '/volunteer/' },
    { label: '聯絡我們', href: '/contact/' },
  ],
  home: {
    hero: { img: 'facade-hero.jpg', pos: '50% 72%', alt: '三寶寺外觀', title: '佛光山三寶寺', sub: 'American Buddhist Cultural Society', cta1: { label: '近期法會', href: '/events/' }, cta2: { label: '參訪資訊', href: '/contact/' } },
    sections: [
      { kind: 'welcome', title: '三寶寺歡迎您', body: '佛光山三寶寺自 1987 年在舊金山弘法，1991 年於 Van Ness 大道落成。重建後的新道場於 2026 年元旦重新開放，設有大雄寶殿、禪堂、佛光書局、展覽空間與教室。\n\n秉承星雲大師「人間佛教」的理念，以文化弘揚佛法，以教育培養人才，以慈善福利社會，以共修淨化人心。', link: { label: '建寺緣起', href: '/about/' }, tiles: [
        { label: '最新公告', href: '#notice', img: 'poster-amitabha.jpg' },
        { label: '近期法會', href: '/events/#upcoming', img: 'shrine-hall.jpg' },
        { label: '空間導覽', href: '/tour/', img: 'courtyard.jpg' },
        { label: '人間報導', href: '/news/', img: 'lanterns-dining.jpg' },
        { label: '課程講座', href: '/events/#classes', img: 'lecture.jpg' },
        { label: '義工服務', href: '/volunteer/', img: 'opening-crowd.jpg' },
        { label: '佛光會', href: 'https://sites.google.com/blia.org/blia-sf/home', img: 'sutra-copying.jpg' },
        { label: '寺院行事曆', href: '/events/#calendar', img: 'rooftop-guanyin.jpg' },
      ] },
      { kind: 'notice', id: 'notice', title: '最新公告', bg: true, more: { label: '寺院行事曆', href: '/events/#calendar' }, posters: [
        { img: 'poster-amitabha.jpg', alt: '彌陀法會 12/19 – 20', href: FORM_URL + '/?event=amitabha-2026', cta: '線上登記' },
        { img: 'poster-winter.jpg', alt: '寒冬送暖：毛帽、厚襪捐贈，即日起至 12/19' },
        { img: 'poster-sale.jpg', alt: '2027 建寺義賣，訂購至 1/24', href: 'https://docs.google.com/forms/d/e/1FAIpQLSficvpKpHrf6BsL1HyPYJyOtRYhNgSgztZyd2lK-u-VhMWwfw/viewform?usp=send_form', cta: '線上訂購' },
      ] },
      { kind: 'events', title: '年度法會', lede: '法會前兩個月開放線上登記。', limit: 6, more: { label: '全部活動', href: '/events/' } },
      { kind: 'news', title: '人間報導', limit: 6, more: { label: '全部報導', href: '/news/' } },
      { kind: 'marquee', title: '空間導覽', lede: '大雄寶殿、禪堂、庭園、書局與屋頂觀音。', more: { label: '空間導覽', href: '/tour/' }, items: ['courtyard.jpg', 'shrine-hall.jpg', 'skylight-stair.jpg', 'guanyin-upper.jpg', 'bookstore.jpg', 'rooftop-guanyin.jpg', 'buddha-bronze.jpg', 'zen-wall.jpg', 'courtyard-garden.jpg', 'exhibition.jpg', 'buddha-wood.jpg', 'facade-sky.jpg'] },
      { kind: 'fteaser', bg: 'shrine-render.jpg', img: 'master.jpg', alt: '星雲大師', small: '佛光山開山祖師', name: '星雲大師', quote: '心中有佛，所見皆佛。', years: '1927 — 2023', body: '一生推動「人間佛教」，以文化、教育、慈善、共修弘法利生。', link: { label: '認識星雲大師', href: '/founder/' } },
      { kind: 'scratch', title: '刮一刮，得一句法語', lede: '用手指或滑鼠刮開金箔，收下今天的一句星雲法語，也可以儲存下來。', again: '再刮一張', hint: '刮開這裡', revealLabel: '直接顯示法語', link: { label: '星雲大師全集', href: 'https://books.masterhsingyun.org/article/articlelist' } },
      { kind: 'cta', img: 'shrine-render.jpg', title: '法會登記', lede: '各場法會於法會前兩個月開放線上登記，可填寫芳名、功德項目並回報交易編號。', actions: [{ label: '線上登記', href: FORM_URL + '/' }] },
      { kind: 'faq', title: '參訪資訊', lede: '第一次來？這些是常見問題。', items: [
        { q: '開放時間？', a: '週二至週日 10:00 – 16:00，週一休息。法會日依行事曆為準。', href: '/events/#calendar', link: '寺院行事曆' },
        { q: '地址與交通？', a: '1750 Van Ness Ave, San Francisco, CA 94109。', href: site.mapUrl, link: 'Google 地圖' },
        { q: '需要預約嗎？', a: '平日參訪不需預約。團體參訪請事先來電 (415) 776-6538。' },
        { q: '如何登記法會？', a: '法會前兩個月開放線上登記，可用 Zelle 或 PayPal 付款。', href: FORM_URL + '/', link: '線上登記' },
        { q: '如何聯絡寺方？', a: '電話 (415) 776-6538，或來信 sanbao@ibps.org。', href: '/contact/', link: '聯絡我們' },
      ] },
    ],
  },
  footer: { cta: '歡迎來寺，共修同霑法喜。', visit: '參訪資訊', rights: '© 2026 佛光山三寶寺　版權所有' },
  pages: {
    about: { title: '認識三寶寺', lede: '奉行人間佛教，以文化、教育、慈善、共修弘法利生。', banner: 'facade-golden.jpg', sections: [
      { id: 'temple', kind: 'split', title: '建寺緣起', body: history.zh, img: 'sign.jpg' },
      { id: 'design', kind: 'split', reverse: true, title: '設計理念', body: '新三寶寺由 SOM 建築事務所設計，石格立面引入天光，內部以木質、庭園與天井營造鬧市中的寧靜。\n\n2026 年起，SOM 設計師克雷格・哈特曼（Craig Hartman）多次帶領團隊與學生來訪，分享建築如何回應修行者與社區的需要。', img: 'som-rendering.jpg', actions: [{ label: 'SOM 專案介紹', href: 'https://www.som.com/projects/american-buddhist-cultural-society/', style: 'btn-ghost' }, { label: '建設歷程全紀錄', href: '/news/2026-01-08-1/', style: 'btn-ink' }] },
      { id: 'fgs', kind: 'split', title: '佛光山宗旨', body: '以文化弘揚佛法\n以教育培養人才\n以慈善福利社會\n以共修淨化人心', img: 'sutra-copying.jpg', actions: [{ label: '佛光山簡介', href: 'https://www.fgs.org.tw/fgs/fgs_introduction.aspx', style: 'btn-ghost' }] },
      { id: 'blia', kind: 'tiles', title: '佛光會・青年團', items: [
        { title: '國際佛光會舊金山協會', desc: '在家信眾以佛法關懷社區：掃街、食物銀行、義剪、玩具捐贈。', href: 'https://sites.google.com/blia.org/blia-sf/home', img: 'news/2026-03-14-1/1.jpg' },
        { title: '佛光青年團', desc: '青年學佛、服務與交流。', href: 'https://www.sfyad.org/about', img: 'news/2026-04-25-1/1.jpg' },
      ] },
    ] },
    founder: { title: '創辦人', lede: '星雲大師（1927 – 2023），佛光山開山祖師。', noHero: true, sections: [
      { kind: 'fhero', bg: 'shrine-render.jpg', img: 'master.jpg', alt: '星雲大師', small: '佛光山開山祖師', name: '星雲大師' },
      { kind: 'bioband', name: '星雲大師', years: '1927 — 2023', body: ['星雲大師是佛光山開山宗長、國際佛光會創辦人。1927 年生於江蘇江都，12 歲出家，一生發願弘法利生，推動「人間佛教」，讓佛法走入生活、走向世界。', '大師於 2023 年 2 月 5 日圓寂，享壽 97 歲。三寶寺秉承師志，在舊金山繼續以文化、教育、慈善與共修接引大眾。'] },
      { kind: 'missions', title: '佛光山四大宗旨', lede: '大師為佛光山立下的宗旨，也是三寶寺日常的實踐。', items: [
        { title: '以文化弘揚佛法', sub: '書局、展覽與出版', imgs: ['news/2025-12-27-1/1.jpg', 'bookstore.jpg', 'news/2025-12-27-1/2.jpg'], desc: '佛光書局與「佛光山三寶寺的故事」展覽，讓走進道場的人認識佛法。' },
        { title: '以教育培養人才', sub: '中英文佛學課程', imgs: ['news/2026-01-26-2/1.jpg', 'news/2025-12-14-1/1.jpg', 'news/2026-06-14-2/1.jpg'], desc: '中英文佛學課程與講座，接引不同語言的學佛者。', href: '/events/#classes', link: '課程講座' },
        { title: '以慈善福利社會', sub: '社區關懷', imgs: ['news/2025-12-20-1/1.jpg', 'news/2025-12-18-1/1.jpg', 'news/2026-03-14-1/1.jpg'], desc: '食物銀行、聖誕玩具捐贈、社區掃街，把慈悲帶進舊金山。', href: '/events/#community', link: '社區活動' },
        { title: '以共修淨化人心', sub: '法會與共修', imgs: ['news/2026-05-16-2/1.jpg', 'news/2026-02-16-1/1.jpg', 'sutra-copying.jpg'], desc: '年度法會、每週共修與抄經，在共修中安頓身心。', href: '/events/#weekly', link: '每週共修' },
      ] },
      { kind: 'timeline', title: '大師的一生', items: [
        { year: '1927', title: '生於江蘇江都' },
        { year: '1938', title: '12 歲於南京棲霞山出家' },
        { year: '1949', title: '來到台灣，開始弘法' },
        { year: '1967', title: '創建佛光山', desc: '於高雄開山，以文化、教育、慈善、共修為宗旨。' },
        { year: '1988', title: '美國西來寺落成' },
        { year: '1991', title: '三寶寺佛光書局於 Van Ness 落成', desc: '同年，大師為大殿紅柱題字：「佛光法水常住三寶寺，功德平安永在信徒家。」', here: true },
        { year: '1992', title: '國際佛光會世界總會成立' },
        { year: '2023', title: '2 月 5 日圓寂，享壽 97 歲' },
      ] },
      { kind: 'scratch', title: '刮一刮，得一句法語', lede: '刮開金箔，收下一句大師法語；也可以儲存下來。', again: '再刮一張', hint: '刮開這裡', revealLabel: '直接顯示法語', link: { label: '星雲大師全集', href: 'https://books.masterhsingyun.org/article/articlelist' } },
      { kind: 'linkrow', items: [{ label: '星雲大師紀念網站', href: 'https://www.fgs.org.tw/events/masterhsingyun/' }, { label: '星雲大師全集', href: 'https://books.masterhsingyun.org/article/articlelist' }] },
    ] },
    events: { title: '活動資訊', lede: '法會、課程與社區活動，一年四季，歡迎參加。', sections: [
      { id: 'upcoming', kind: 'events', title: '年度法會', lede: '法會前兩個月開放線上登記，法會結束後關閉。' },
      { id: 'weekly', kind: 'rows', title: '每週共修', lede: '每週日共修，依週次誦持以下經文；點選可閱讀線上經文。', items: [
        { date: '第一週', title: '八十八佛大懺悔文', href: 'https://tinyurl.com/8n5u373k' },
        { date: '第二週', title: '阿彌陀經', href: 'https://tinyurl.com/sr2hm479' },
        { date: '第三週', title: '金剛經', href: 'https://tinyurl.com/3j5txvzn' },
        { date: '第四週', title: '觀世音菩薩普門品', href: 'https://tinyurl.com/d7r4pn7z' },
        { date: '第五週', title: '觀世音菩薩普門品', href: 'https://tinyurl.com/d7r4pn7z' },
      ] },
      { id: 'precepts', kind: 'tiles', title: '戒會修持', items: [
        { title: '三皈五戒', meta: '報名即將開放', desc: '皈依佛、法、僧三寶，受持不殺生、不偷盜、不邪淫、不妄語、不飲酒五戒，正式成為佛弟子。', img: 'news/2026-06-14-2/1.jpg' },
        { title: '八關齋戒', meta: '報名即將開放', desc: '在家信眾於一日一夜之中受持八條戒律，體驗出家清淨生活，種下出世善根。', img: 'sutra-copying.jpg' },
      ] },
      { id: 'classes', kind: 'courses', title: '課程講座', lede: '點選類別查看課程與報名方式。', groups: [
        { title: '禪修課程', img: 'news/2026-01-18-1/1.jpg', items: [{ title: '禪修' }, { title: '茶禪' }, { title: '抄經' }] },
        { title: '英文佛學課程', img: 'news/2026-01-26-2/1.jpg', items: [{ title: '佛法真義', meta: '知季法師・英文授課' }] },
        { title: '中文佛學課程', img: 'lecture.jpg', items: [
          { title: '宗門思想', meta: '週六 1:30 pm・如揚法師' },
          { title: '供菜培訓', meta: '週日 1:30 pm・林蔚老師' },
          { title: '佛教藝術家', meta: '週二 7:30 pm・線上・如玄法師' },
          { title: '妙慧童女經', meta: '週三 7:30 pm・線上・如省法師' },
          { title: '佛法真義', meta: '週六 11:00 am・妙皇法師' },
          { title: '學佛行儀', meta: '週六 10:00 am・知松法師' },
        ] },
      ] },
      { id: 'community', kind: 'tiles', title: '社區活動', items: [
        { title: 'VegRun 蔬食路跑', desc: '健康樂活，蔬食環保齊響應。', img: 'news/2026-06-21-1/1.jpg', href: '/news/2026-06-21-1/' },
        { title: 'Food Bank 食物銀行', desc: '佛光人投入食物銀行義工，打包逾萬磅物資。', img: 'news/2025-12-20-1/1.jpg', href: '/news/2025-12-20-1/' },
        { title: '玩具物資收集', desc: '每年聖誕節協助消防局募集玩具與物資，五年不輟。', img: 'news/2025-12-18-1/1.jpg', href: '/news/2025-12-18-1/' },
      ] },
      { id: 'calendar', kind: 'calendar', title: '寺院行事曆', lede: '2026 – 2027 年' },
    ] },
    tour: { title: '空間導覽', lede: '大雄寶殿、禪堂、庭園、天井、佛光書局、展覽空間與屋頂觀音。', banner: 'shrine-render.jpg', sections: [
      { kind: 'gallery', items: ['shrine-hall.jpg', 'courtyard.jpg', 'skylight-stair.jpg', 'buddha-bronze.jpg', 'guanyin-upper.jpg', 'bookstore-wide.jpg', 'zen-wall.jpg', 'courtyard-garden.jpg', 'exhibition.jpg', 'rooftop-guanyin.jpg', 'buddha-wood.jpg', 'facade-sky.jpg', 'lanterns-dining.jpg', 'sutra-copying.jpg'] },
    ] },
    news: { title: '人間報導', lede: '慈善行動、社區關懷與道場紀實。', sections: [] },
    volunteer: { title: '義工服務', lede: '在服務中修福修慧、廣結善緣。歡迎依興趣加入。', sections: [
      { kind: 'tiles', items: [
        { title: '佛光書局', desc: '流通佛書、文物與結緣品，以書香接引大眾。', img: 'bookstore.jpg' },
        { title: '滴水坊', desc: '提供蔬食茶點，以一杯茶傳遞歡喜與惜福。', img: 'news/2026-04-11-1/1.jpg' },
        { title: '大寮', desc: '護持齋堂烹調，為大眾準備清淨蔬食。', img: 'news/2026-02-09-1/1.jpg' },
        { title: '行堂', desc: '用齋時的供餐與照料，讓大眾安心受食。', img: 'lanterns-dining.jpg' },
        { title: '法務', desc: '協助法會莊嚴進行，引導信眾如法共修。', img: 'shrine-hall.jpg' },
        { title: '文書', desc: '文書記錄、文宣與資料整理。', img: 'class-calligraphy.jpg' },
        { title: '總務', desc: '統籌庶務與場地後勤，讓活動圓滿。', img: 'news/2025-12-26-1/1.jpg' },
        { title: '環保', desc: '推動資源回收與環境整潔，惜福愛地球。', img: 'news/2026-03-14-1/1.jpg' },
        { title: '知賓', desc: '迎賓接待、引導參訪，以笑容廣結善緣。', img: 'news/2026-04-12-1/1.jpg' },
      ] },
      { kind: 'faq', title: '加入義工', items: [
        { q: '如何報名？', a: '請來電 (415) 776-6538 或來信 sanbao@ibps.org，告訴我們您有興趣的組別。', href: 'mailto:sanbao@ibps.org', link: '來信報名' },
        { q: '需要經驗嗎？', a: '不需要。寺方每年舉辦義工培訓日（2027 年 3/27、10/30）。', href: '/news/2026-01-12-2/', link: '義工培訓紀實' },
      ] },
    ] },
    contact: { title: '聯絡我們', lede: 'AMERICAN BUDDHIST CULTURAL SOCIETY・1750 Van Ness Ave, San Francisco, CA 94109', sections: [
      { kind: 'tiles', items: [
        { title: '電話', desc: '+1 415 776 6538', href: 'tel:+14157766538' },
        { title: '電子郵件', desc: 'sanbao@ibps.org', href: 'mailto:sanbao@ibps.org' },
        { title: '開放時間', desc: '週二至週日 10:00 – 16:00（週一休息）' },
      ] },
      { kind: 'embed', src: site.mapEmbed, title: '三寶寺地圖', ratio: '16/8' },
      { kind: 'links', title: '友善連結', items: [
        { title: '佛光山全球資訊網', links: [{ label: '中文', href: 'https://www.fgs.org.tw/' }, { label: 'English', href: 'https://www.fgs.org.tw/en/' }] },
        { title: '佛陀紀念館', links: [{ label: '中文', href: 'https://www.fgsbmc.org.tw/tw/index.aspx' }, { label: 'English', href: 'https://www.fgsbmc.org.tw/en/index.aspx' }] },
        { title: '人間佛教研究院', links: [{ label: '中文', href: 'https://www.fgsihb.org/dictionary/?__locale=zh_TW' }, { label: 'English', href: 'https://www.fgsihb.org/dictionary/?__locale=en' }] },
        { title: '佛光山叢林學院', links: [{ label: '中文', href: 'https://tsunglin.fgs.org.tw/' }, { label: 'English', href: 'https://www.fgs.org.tw/events/fgmonasticretreat/index.html' }] },
        { title: '人間衛視', links: [{ label: '中文', href: 'https://www.bltv.tv/' }, { label: 'English', href: 'https://www.youtube.com/@FGSBLTV' }] },
        { title: '人間通訊社', links: [{ label: '中英', href: 'https://www.lnanews.com/home' }] },
      ] },
    ] },
  },
};

// ---------------- English ----------------
const en = {
  site: { ...site, name: 'Fo Guang Shan San Bao Temple', society: 'American Buddhist Cultural Society', address: '1750 Van Ness Ave, San Francisco, CA 94109', hours: 'Tue – Sun, 10 AM – 4 PM (closed Mon)', desc: 'Fo Guang Shan San Bao Temple on Van Ness Avenue, San Francisco — Dharma services, classes, community care and volunteering.' },
  ui: { register: 'Register', registerShort: 'Register', registerOnline: 'Register online', registering: 'Open', donate: 'Donate', calendar: 'Calendar', nextService: 'Next service', opensOn: d => `Registration opens ${new Date(d + 'T12:00').toLocaleString('en-US', { month: 'short', day: 'numeric' })}`, byPhone: 'Register by phone', menu: 'Menu', mainNav: 'Main', skip: 'Skip to content', visit: 'Visit', contact: 'Contact', friends: 'Related sites', date: 'Date', event: 'Event', older: 'Older', newer: 'Newer', poster: 'Poster', close: 'Close', open: 'Register online', prev: 'Previous', next: 'Next', save: 'Save this saying', signup: 'Sign up', signupSoon: 'Sign-up link coming soon', courseCount: n => `${n} class${n > 1 ? 'es' : ''}`, newsInChinese: 'Stories are published in Chinese.' },
  eventInfo, eventFallbackImg: 'shrine-hall.jpg',
  calendar, friends: friends.en,
  nav: [
    { label: 'About', href: '/about/', sub: [{ label: 'History', href: '/about/#temple' }, { label: 'Design', href: '/about/#design' }, { label: 'Fo Guang Shan', href: '/about/#fgs' }, { label: 'BLIA & Youth', href: '/about/#blia' }] },
    { label: 'Temple tour', href: '/tour/' },
    { label: 'Founder', href: '/founder/' },
    { label: 'Events', href: '/events/', sub: [{ label: 'Annual services', href: '/events/#upcoming' }, { label: 'Weekly practice', href: '/events/#weekly' }, { label: 'Precepts', href: '/events/#precepts' }, { label: 'Classes', href: '/events/#classes' }, { label: 'Community', href: '/events/#community' }, { label: 'Calendar', href: '/events/#calendar' }] },
    { label: 'News', href: '/news/' },
    { label: 'Volunteer', href: '/volunteer/' },
    { label: 'Contact', href: '/contact/' },
  ],
  home: {
    hero: { img: 'facade-hero.jpg', pos: '50% 72%', alt: 'San Bao Temple facade', title: ['American Buddhist Cultural Society', 'San Bao Temple'], small: true, sub: '', cta1: { label: 'Upcoming services', href: '/events/' }, cta2: { label: 'Plan a visit', href: '/contact/' } },
    sections: [
      { kind: 'welcome', title: 'Welcome', body: 'San Bao Temple has served San Francisco since 1987 and has stood on Van Ness Avenue since 1991. Rebuilt from the ground up, the new temple reopened on New Year’s Day 2026 with a main shrine, meditation hall, bookstore, exhibition space and classrooms.\n\nFollowing Venerable Master Hsing Yun’s Humanistic Buddhism, we share the Dharma through culture, education, charity and practice together.', link: { label: 'Our history', href: '/about/' }, tiles: [
        { label: 'Announcements', href: '#notice', img: 'poster-amitabha.jpg' },
        { label: 'Services', href: '/events/#upcoming', img: 'shrine-hall.jpg' },
        { label: 'Temple tour', href: '/tour/', img: 'courtyard.jpg' },
        { label: 'News', href: '/news/', img: 'lanterns-dining.jpg' },
        { label: 'Classes', href: '/events/#classes', img: 'lecture.jpg' },
        { label: 'Volunteer', href: '/volunteer/', img: 'opening-crowd.jpg' },
        { label: 'BLIA', href: 'https://sites.google.com/blia.org/blia-sf/home', img: 'sutra-copying.jpg' },
        { label: 'Calendar', href: '/events/#calendar', img: 'rooftop-guanyin.jpg' },
      ] },
      { kind: 'notice', id: 'notice', title: 'Announcements', bg: true, more: { label: 'Temple calendar', href: '/events/#calendar' }, posters: [
        { img: 'poster-amitabha.jpg', alt: 'Amitabha Buddha Dharma Service, Dec 19 – 20', href: FORM_URL + '/?event=amitabha-2026', cta: 'Register online' },
        { img: 'poster-winter.jpg', alt: 'Share the Warmth: new beanies and thick socks, through Dec 19' },
        { img: 'poster-sale.jpg', alt: '2027 temple-building charity sale, order by Jan 24', href: 'https://docs.google.com/forms/d/e/1FAIpQLSficvpKpHrf6BsL1HyPYJyOtRYhNgSgztZyd2lK-u-VhMWwfw/viewform?usp=send_form', cta: 'Order online' },
      ] },
      { kind: 'events', title: 'Annual services', lede: 'Online registration opens two months before each service.', limit: 6, more: { label: 'All events', href: '/events/' } },
      { kind: 'news', title: 'News', lede: 'Stories are published in Chinese.', limit: 6, more: { label: 'All stories', href: '/news/' } },
      { kind: 'marquee', title: 'Temple tour', lede: 'Shrine hall, meditation hall, courtyard, bookstore and the rooftop Guanyin.', more: { label: 'Temple tour', href: '/tour/' }, items: ['courtyard.jpg', 'shrine-hall.jpg', 'skylight-stair.jpg', 'guanyin-upper.jpg', 'bookstore.jpg', 'rooftop-guanyin.jpg', 'buddha-bronze.jpg', 'zen-wall.jpg', 'courtyard-garden.jpg', 'exhibition.jpg', 'buddha-wood.jpg', 'facade-sky.jpg'] },
      { kind: 'fteaser', bg: 'shrine-render.jpg', img: 'master.jpg', alt: 'Venerable Master Hsing Yun', small: 'Founder of Fo Guang Shan', name: '星雲大師', quote: 'When the Buddha is in your heart, everything you see is the Buddha.', years: 'Venerable Master Hsing Yun · 1927 — 2023', body: 'A lifetime spent bringing Humanistic Buddhism into daily life — through culture, education, charity and practice.', link: { label: 'About the founder', href: '/founder/' } },
      { kind: 'scratch', title: 'Scratch for a saying', lede: 'Scratch away the gold foil to reveal today’s words — and save it if you like.', again: 'Another one', hint: 'Scratch here', revealLabel: 'Show the saying', link: { label: 'Complete Works of Master Hsing Yun', href: 'https://books.masterhsingyun.org/article/articlelist' } },
      { kind: 'cta', img: 'shrine-render.jpg', title: 'Register for a service', lede: 'Online registration opens two months before each Dharma service.', actions: [{ label: 'Register online', href: FORM_URL + '/' }] },
      { kind: 'faq', title: 'Plan a visit', lede: 'First time here? Start with these.', items: [
        { q: 'When is the temple open?', a: 'Tuesday – Sunday, 10 AM – 4 PM. Closed Mondays. Service days follow the calendar.', href: '/events/#calendar', link: 'Temple calendar' },
        { q: 'Where is it?', a: '1750 Van Ness Ave, San Francisco, CA 94109.', href: site.mapUrl, link: 'Google Maps' },
        { q: 'Do I need to book?', a: 'No booking is needed for individual visits. For groups, please call (415) 776-6538 first.' },
        { q: 'How do I register for a service?', a: 'Online registration opens two months before each service. Pay by Zelle or PayPal.', href: FORM_URL + '/', link: 'Register online' },
        { q: 'How do I reach the temple?', a: 'Call (415) 776-6538 or email sanbao@ibps.org.', href: '/contact/', link: 'Contact' },
      ] },
    ],
  },
  footer: { cta: 'You are welcome here.', visit: 'Plan a visit', rights: '© 2026 Fo Guang Shan San Bao Temple' },
  pages: {
    about: { title: 'About', lede: 'A Humanistic Buddhist temple — culture, education, charity and shared practice.', banner: 'facade-golden.jpg', sections: [
      { id: 'temple', kind: 'split', title: 'History', body: history.en, img: 'sign.jpg' },
      { id: 'design', kind: 'split', reverse: true, title: 'Design', body: 'The new temple was designed by SOM. Its stone-lattice facade draws in daylight; inside, wood, courtyards and light wells create calm in the middle of the city.\n\nSince 2026, SOM design partner Craig Hartman has returned with colleagues and students to share how the building answers the needs of practitioners and neighbours.', img: 'som-rendering.jpg', actions: [{ label: 'SOM project page', href: 'https://www.som.com/projects/american-buddhist-cultural-society/', style: 'btn-ghost' }] },
      { id: 'fgs', kind: 'split', title: 'Fo Guang Shan', body: 'To propagate the Dharma through culture\nTo nurture talent through education\nTo benefit society through charity\nTo purify hearts and minds through practice', img: 'sutra-copying.jpg', actions: [{ label: 'About Fo Guang Shan', href: 'https://www.fgs.org.tw/en', style: 'btn-ghost' }] },
      { id: 'blia', kind: 'tiles', title: 'BLIA & Youth', items: [
        { title: 'BLIA San Francisco', desc: 'Lay Buddhists caring for the city: street clean-ups, food bank shifts, free haircuts, toy drives.', href: 'https://sites.google.com/blia.org/blia-sf/home', img: 'news/2026-03-14-1/1.jpg' },
        { title: 'BLIA Young Adults', desc: 'Study, service and friendship for young people.', href: 'https://www.sfyad.org/about', img: 'news/2026-04-25-1/1.jpg' },
      ] },
    ] },
    founder: { title: 'Founder', lede: 'Venerable Master Hsing Yun (1927 – 2023), founder of Fo Guang Shan.', noHero: true, sections: [
      { kind: 'fhero', bg: 'shrine-render.jpg', img: 'master.jpg', alt: 'Venerable Master Hsing Yun', small: 'Founder of Fo Guang Shan', name: '星雲大師', sub: 'Venerable Master Hsing Yun' },
      { kind: 'bioband', name: 'Venerable Master Hsing Yun', years: '1927 — 2023', body: ['Venerable Master Hsing Yun founded Fo Guang Shan and Buddha’s Light International Association. Born in Jiangdu, Jiangsu in 1927, he became a monk at twelve and devoted his life to Humanistic Buddhism — bringing the Dharma into daily life and to the world.', 'He passed away on February 5, 2023, at the age of 97. San Bao Temple carries his vision forward in San Francisco through culture, education, charity and shared practice.'] },
      { kind: 'missions', title: 'The Four Objectives of Fo Guang Shan', lede: 'Set by the Master for Fo Guang Shan — and practiced every day at San Bao Temple.', items: [
        { title: 'Culture', sub: 'Bookstore, exhibitions, publishing', imgs: ['news/2025-12-27-1/1.jpg', 'bookstore.jpg', 'news/2025-12-27-1/2.jpg'], desc: 'The Fo Guang Bookstore and the temple’s history exhibition welcome everyone who walks in.' },
        { title: 'Education', sub: 'Classes in Chinese and English', imgs: ['news/2026-01-26-2/1.jpg', 'news/2025-12-14-1/1.jpg', 'news/2026-06-14-2/1.jpg'], desc: 'Buddhist classes and talks in Chinese and English.', href: '/events/#classes', link: 'Classes' },
        { title: 'Charity', sub: 'Caring for the community', imgs: ['news/2025-12-20-1/1.jpg', 'news/2025-12-18-1/1.jpg', 'news/2026-03-14-1/1.jpg'], desc: 'Food bank shifts, Christmas toy drives and street clean-ups across San Francisco.', href: '/events/#community', link: 'Community' },
        { title: 'Practice', sub: 'Services and group practice', imgs: ['news/2026-05-16-2/1.jpg', 'news/2026-02-16-1/1.jpg', 'sutra-copying.jpg'], desc: 'Annual services, weekly chanting and sutra copying.', href: '/events/#weekly', link: 'Weekly practice' },
      ] },
      { kind: 'timeline', title: 'A life', items: [
        { year: '1927', title: 'Born in Jiangdu, Jiangsu' },
        { year: '1938', title: 'Became a monk at 12, Qixia Temple, Nanjing' },
        { year: '1949', title: 'Arrived in Taiwan and began teaching' },
        { year: '1967', title: 'Founded Fo Guang Shan', desc: 'In Kaohsiung, with the four objectives of culture, education, charity and practice.' },
        { year: '1988', title: 'Hsi Lai Temple completed in Los Angeles' },
        { year: '1991', title: 'San Bao Temple’s Fo Guang Bookstore opens on Van Ness', desc: 'That year the Master inscribed the shrine’s red pillars: “May the Dharma of Buddha’s Light abide in San Bao Temple; may merit and peace dwell in every devotee’s home.”', here: true },
        { year: '1992', title: 'Buddha’s Light International Association world headquarters founded' },
        { year: '2023', title: 'Passed away on February 5, aged 97' },
      ] },
      { kind: 'scratch', title: 'Scratch for a saying', lede: 'Reveal a saying from Master Hsing Yun — and save it if you like.', again: 'Another one', hint: 'Scratch here', revealLabel: 'Show the saying', link: { label: 'Complete Works of Master Hsing Yun', href: 'https://books.masterhsingyun.org/article/articlelist' } },
      { kind: 'linkrow', items: [{ label: 'Memorial site', href: 'https://www.fgs.org.tw/en/Founder/Overview/' }, { label: 'Complete Works', href: 'https://books.masterhsingyun.org/article/articlelist' }] },
    ] },
    events: { title: 'Events', lede: 'Dharma services, classes and community events, all year round.', sections: [
      { id: 'upcoming', kind: 'events', title: 'Annual services', lede: 'Registration opens two months before each service and closes when it ends.' },
      { id: 'weekly', kind: 'rows', title: 'Weekly practice', lede: 'Every Sunday the community chants one of these texts, by week of the month. Tap to read online.', items: [
        { date: 'Week 1', title: 'Repentance of the Eighty-Eight Buddhas', href: 'https://tinyurl.com/8n5u373k' },
        { date: 'Week 2', title: 'Amitabha Sutra', href: 'https://tinyurl.com/sr2hm479' },
        { date: 'Week 3', title: 'Diamond Sutra', href: 'https://tinyurl.com/3j5txvzn' },
        { date: 'Week 4', title: 'Universal Gate Chapter of Avalokitesvara', href: 'https://tinyurl.com/d7r4pn7z' },
        { date: 'Week 5', title: 'Universal Gate Chapter of Avalokitesvara', href: 'https://tinyurl.com/d7r4pn7z' },
      ] },
      { id: 'precepts', kind: 'tiles', title: 'Precepts', items: [
        { title: 'Three Refuges & Five Precepts', meta: 'Registration opening soon', desc: 'Take refuge in the Buddha, Dharma and Sangha, and undertake the five precepts — formally becoming a Buddhist.', img: 'news/2026-06-14-2/1.jpg' },
        { title: 'Eight Precepts Retreat', meta: 'Registration opening soon', desc: 'Lay practitioners keep eight precepts for one day and night, tasting the pure life of a monastic.', img: 'sutra-copying.jpg' },
      ] },
      { id: 'classes', kind: 'courses', title: 'Classes', lede: 'Open a group to see classes and how to sign up.', groups: [
        { title: 'Meditation', img: 'news/2026-01-18-1/1.jpg', items: [{ title: 'Meditation' }, { title: 'Tea & Chan' }, { title: 'Sutra copying' }] },
        { title: 'Buddhism in English', img: 'news/2026-01-26-2/1.jpg', items: [{ title: 'The True Meaning of the Dharma', meta: 'Ven. Zhi Ji · English' }] },
        { title: 'Buddhism in Chinese', img: 'lecture.jpg', items: [
          { title: 'Fo Guang Shan Thought', meta: 'Sat 1:30 pm · Ven. Ru Yang' },
          { title: 'Offering-food training', meta: 'Sun 1:30 pm · Lin Wei' },
          { title: 'Buddhist Artists', meta: 'Tue 7:30 pm · online · Ven. Ru Xuan' },
          { title: 'Sutra of the Wise Maiden', meta: 'Wed 7:30 pm · online · Ven. Ru Xing' },
          { title: 'The True Meaning of the Dharma', meta: 'Sat 11:00 am · Ven. Miao Huang' },
          { title: 'Buddhist Etiquette', meta: 'Sat 10:00 am · Ven. Zhi Song' },
        ] },
      ] },
      { id: 'community', kind: 'tiles', title: 'Community', items: [
        { title: 'VegRun', desc: 'A plant-based fun run with the community.', img: 'news/2026-06-21-1/1.jpg' },
        { title: 'Food Bank', desc: 'Volunteers packing over 10,000 lb of food.', img: 'news/2025-12-20-1/1.jpg' },
        { title: 'Toy & supplies drive', desc: 'Five years of Christmas toy drives with the SF Fire Department.', img: 'news/2025-12-18-1/1.jpg' },
      ] },
      { id: 'calendar', kind: 'calendar', title: 'Temple calendar', lede: '2026 – 2027' },
    ] },
    tour: { title: 'Temple tour', lede: 'Shrine hall, meditation hall, courtyard, light well, bookstore, exhibition space and the rooftop Guanyin.', banner: 'shrine-render.jpg', sections: [
      { kind: 'gallery', items: ['shrine-hall.jpg', 'courtyard.jpg', 'skylight-stair.jpg', 'buddha-bronze.jpg', 'guanyin-upper.jpg', 'bookstore-wide.jpg', 'zen-wall.jpg', 'courtyard-garden.jpg', 'exhibition.jpg', 'rooftop-guanyin.jpg', 'buddha-wood.jpg', 'facade-sky.jpg', 'lanterns-dining.jpg', 'sutra-copying.jpg'] },
    ] },
    news: { title: 'News', lede: 'Charity, community care and temple life.', sections: [] },
    volunteer: { title: 'Volunteer', lede: 'Serve, cultivate, and make good connections. Join the team that fits you.', sections: [
      { kind: 'tiles', items: [
        { title: 'Bookstore', desc: 'Sharing Buddhist books and gifts.', img: 'bookstore.jpg' },
        { title: 'Water Drop Teahouse', desc: 'Vegetarian tea and snacks, served with joy.', img: 'news/2026-04-11-1/1.jpg' },
        { title: 'Kitchen', desc: 'Cooking pure vegetarian meals for all.', img: 'news/2026-02-09-1/1.jpg' },
        { title: 'Dining service', desc: 'Serving and caring for diners at meals.', img: 'lanterns-dining.jpg' },
        { title: 'Dharma service', desc: 'Supporting ceremonies and guiding practice.', img: 'shrine-hall.jpg' },
        { title: 'Documentation', desc: 'Records, publicity and archives.', img: 'class-calligraphy.jpg' },
        { title: 'General affairs', desc: 'Logistics and venues.', img: 'news/2025-12-26-1/1.jpg' },
        { title: 'Environmental', desc: 'Recycling and keeping the temple clean.', img: 'news/2026-03-14-1/1.jpg' },
        { title: 'Reception', desc: 'Welcoming and guiding visitors.', img: 'news/2026-04-12-1/1.jpg' },
      ] },
      { kind: 'faq', title: 'Join a team', items: [
        { q: 'How do I sign up?', a: 'Call (415) 776-6538 or email sanbao@ibps.org with the team you are interested in.', href: 'mailto:sanbao@ibps.org', link: 'Email us' },
        { q: 'Do I need experience?', a: 'No. The temple holds volunteer training days (Mar 27 and Oct 30, 2027).' },
      ] },
    ] },
    contact: { title: 'Contact', lede: 'American Buddhist Cultural Society · 1750 Van Ness Ave, San Francisco, CA 94109', sections: [
      { kind: 'tiles', items: [
        { title: 'Phone', desc: '+1 415 776 6538', href: 'tel:+14157766538' },
        { title: 'Email', desc: 'sanbao@ibps.org', href: 'mailto:sanbao@ibps.org' },
        { title: 'Hours', desc: 'Tue – Sun, 10 AM – 4 PM (closed Mon)' },
      ] },
      { kind: 'embed', src: site.mapEmbed, title: 'Map', ratio: '16/8' },
      { kind: 'links', title: 'Related sites', items: [
        { title: 'Fo Guang Shan', links: [{ label: 'English', href: 'https://www.fgs.org.tw/en/' }, { label: '中文', href: 'https://www.fgs.org.tw/' }] },
        { title: 'Buddha Museum', links: [{ label: 'English', href: 'https://www.fgsbmc.org.tw/en/index.aspx' }, { label: '中文', href: 'https://www.fgsbmc.org.tw/tw/index.aspx' }] },
        { title: 'Institute of Humanistic Buddhism', links: [{ label: 'English', href: 'https://www.fgsihb.org/dictionary/?__locale=en' }, { label: '中文', href: 'https://www.fgsihb.org/dictionary/?__locale=zh_TW' }] },
        { title: 'FGS Monastic Retreat', links: [{ label: 'English', href: 'https://www.fgs.org.tw/events/fgmonasticretreat/index.html' }, { label: '中文', href: 'https://tsunglin.fgs.org.tw/' }] },
        { title: 'BLTV', links: [{ label: 'YouTube', href: 'https://www.youtube.com/@FGSBLTV' }, { label: '中文', href: 'https://www.bltv.tv/' }] },
        { title: 'Merit Times News', links: [{ label: 'Website', href: 'https://www.lnanews.com/home' }] },
      ] },
    ] },
  },
};

export const content = { zh, en };

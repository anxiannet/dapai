export type Talent = {
  id: string;
  name: string;
  avatarUrl: string;
  skills: string[];
  rating: number; // 0-5
  serviceHistoryCount: number;
  reviewsSummary?: string; 
  city: string;
  description: string;
};

export const mockTalents: Talent[] = [
  {
    id: '1',
    name: '爱丽丝',
    avatarUrl: 'https://placehold.co/100x100.png',
    skills: ['搬家协助', '家具组装', '园艺'],
    rating: 4.8,
    serviceHistoryCount: 25,
    reviewsSummary: '非常可靠和高效。强烈推荐用于搬家任务。',
    city: '北京',
    description: '经验丰富的搬家工和勤杂工，总是乐于助人。周末和工作日晚上有空。'
  },
  {
    id: '2',
    name: '鲍勃师傅',
    avatarUrl: 'https://placehold.co/100x100.png',
    skills: ['家庭维修', '管道疏通', '电路维修'],
    rating: 4.5,
    serviceHistoryCount: 42,
    reviewsSummary: '擅长各种维修，但有时会迟到一点。',
    city: '上海',
    description: '您所有小型家庭维修的首选。在修理房屋周围的物品方面拥有10多年的经验。'
  },
  {
    id: '3',
    name: '翻译卡罗尔',
    avatarUrl: 'https://placehold.co/100x100.png',
    skills: ['翻译（西班牙语）', '校对', '家教'],
    rating: 5.0,
    serviceHistoryCount: 15,
    reviewsSummary: '优秀的翻译，非常专业，周转迅速。',
    city: '广州',
    description: '母语为西班牙语，提供准确的翻译和校对服务。对语言充满热情。'
  },
  {
    id: '4',
    name: '陪护大卫',
    avatarUrl: 'https://placehold.co/100x100.png',
    skills: ['医疗陪同', '老年护理', '驾驶'],
    rating: 4.9,
    serviceHistoryCount: 30,
    reviewsSummary: '友善耐心的陪护，对老年人很好。',
    city: '深圳',
    description: '富有同情心的人，提供医疗预约陪同和老年人的一般协助。'
  },
  {
    id: '5',
    name: '编程伊娃',
    avatarUrl: 'https://placehold.co/100x100.png',
    skills: ['网页开发', 'WordPress', '故障排除'],
    rating: 4.7,
    serviceHistoryCount: 18,
    city: '杭州',
    description: '自由职业网页开发人员，专门从事小型企业网站和技术支持。'
  },
  {
    id: '6',
    name: '油漆工弗兰克',
    avatarUrl: 'https://placehold.co/100x100.png',
    skills: ['室内油漆', '室外油漆', '装饰'],
    rating: 4.6,
    serviceHistoryCount: 22,
    city: '成都',
    description: '注重细节的专业油漆工。用色彩和精度改变空间。'
  },
];

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
    name: 'Alice Wonderland',
    avatarUrl: 'https://placehold.co/100x100.png',
    skills: ['Moving Assistance', 'Furniture Assembly', 'Gardening'],
    rating: 4.8,
    serviceHistoryCount: 25,
    reviewsSummary: 'Very reliable and efficient. Highly recommended for moving tasks.',
    city: 'New York',
    description: 'Experienced mover and handyman, always ready to help with a smile. Available weekends and weekday evenings.'
  },
  {
    id: '2',
    name: 'Bob The Builder',
    avatarUrl: 'https://placehold.co/100x100.png',
    skills: ['Home Repairs', 'Plumbing', 'Electrical Work'],
    rating: 4.5,
    serviceHistoryCount: 42,
    reviewsSummary: 'Skilled in various repairs, though sometimes a bit late.',
    city: 'San Francisco',
    description: 'Your go-to guy for all minor home repairs. 10+ years of experience in fixing things around the house.'
  },
  {
    id: '3',
    name: 'Carol Translator',
    avatarUrl: 'https://placehold.co/100x100.png',
    skills: ['Translation (Spanish)', 'Proofreading', 'Tutoring'],
    rating: 5.0,
    serviceHistoryCount: 15,
    reviewsSummary: 'Excellent translator, very professional and quick turnaround.',
    city: 'Chicago',
    description: 'Native Spanish speaker providing accurate translation and proofreading services. Passionate about languages.'
  },
  {
    id: '4',
    name: 'David Companion',
    avatarUrl: 'https://placehold.co/100x100.png',
    skills: ['Medical Accompaniment', 'Elderly Care', 'Driving'],
    rating: 4.9,
    serviceHistoryCount: 30,
    reviewsSummary: 'Kind and patient companion, great with seniors.',
    city: 'Los Angeles',
    description: 'Compassionate individual offering accompaniment to medical appointments and general assistance for elderly.'
  },
  {
    id: '5',
    name: 'Eva Coder',
    avatarUrl: 'https://placehold.co/100x100.png',
    skills: ['Web Development', 'WordPress', 'Troubleshooting'],
    rating: 4.7,
    serviceHistoryCount: 18,
    city: 'Austin',
    description: 'Freelance web developer specializing in small business websites and technical support.'
  },
  {
    id: '6',
    name: 'Frank Painter',
    avatarUrl: 'https://placehold.co/100x100.png',
    skills: ['Interior Painting', 'Exterior Painting', 'Decorating'],
    rating: 4.6,
    serviceHistoryCount: 22,
    city: 'Miami',
    description: 'Professional painter with an eye for detail. Transforming spaces with color and precision.'
  },
];

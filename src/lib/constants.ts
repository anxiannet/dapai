import type { LucideIcon } from 'lucide-react';
import { Home, PlusCircle, Users, CheckSquare, BotMessageSquare } from 'lucide-react';

export interface NavItem {
  href: string;
  label: string;
  icon: LucideIcon;
  matchExact?: boolean;
}

export const APP_NAME = "达派";

export const NAV_ITEMS: NavItem[] = [
  { href: '/', label: '仪表盘', icon: Home, matchExact: true },
  { href: '/post-demand', label: '发布需求', icon: PlusCircle },
  { href: '/talents', label: '发现人才', icon: Users },
  { href: '/review-analyzer', label: '点评分析', icon: BotMessageSquare },
];

export const ROUTES = {
  HOME: '/',
  POST_DEMAND: '/post-demand',
  TALENTS: '/talents',
  REVIEW_ANALYZER: '/review-analyzer',
};

import type { LucideIcon } from 'lucide-react';
import { Home, PlusCircle, Users, CheckSquare, BotMessageSquare } from 'lucide-react';

export interface NavItem {
  href: string;
  label: string;
  icon: LucideIcon;
  matchExact?: boolean;
}

export const APP_NAME = "SkillShare Connect";

export const NAV_ITEMS: NavItem[] = [
  { href: '/', label: 'Dashboard', icon: Home, matchExact: true },
  { href: '/post-demand', label: 'Post a Demand', icon: PlusCircle },
  { href: '/talents', label: 'Find Talents', icon: Users },
  { href: '/review-analyzer', label: 'Review Analyzer', icon: BotMessageSquare },
];

export const ROUTES = {
  HOME: '/',
  POST_DEMAND: '/post-demand',
  TALENTS: '/talents',
  REVIEW_ANALYZER: '/review-analyzer',
};

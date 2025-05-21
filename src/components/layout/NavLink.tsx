"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { SidebarMenuButton } from '@/components/ui/sidebar';

interface NavLinkProps {
  href: string;
  label: string;
  icon: LucideIcon;
  matchExact?: boolean;
  onClick?: () => void;
}

export function NavLink({ href, label, icon: Icon, matchExact = false, onClick }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = matchExact ? pathname === href : pathname.startsWith(href);

  return (
    <Link href={href} passHref legacyBehavior>
      <SidebarMenuButton
        onClick={onClick}
        isActive={isActive}
        tooltip={{ children: label, side: 'right', align: 'center' }}
        className={cn(
          "w-full justify-start",
          isActive ? "bg-sidebar-accent text-sidebar-accent-foreground" : "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
        )}
      >
        <Icon className="h-5 w-5" />
        <span>{label}</span>
      </SidebarMenuButton>
    </Link>
  );
}

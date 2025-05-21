"use client";

import Link from 'next/link';
import { SidebarTrigger, useSidebar } from '@/components/ui/sidebar';
import { APP_NAME } from '@/lib/constants';
import { Handshake } from 'lucide-react'; // Or any other suitable logo icon

export function AppHeader() {
  const { isMobile } = useSidebar();

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          {(isMobile) && <SidebarTrigger />}
          <Link href="/" className="flex items-center gap-2">
            <Handshake className="h-7 w-7 text-primary" />
            <span className="text-xl font-bold text-foreground">{APP_NAME}</span>
          </Link>
        </div>
        {/* Placeholder for User Profile / Actions */}
        {/* <div className="flex items-center gap-2">
          <UserNav /> 
        </div> */}
      </div>
    </header>
  );
}

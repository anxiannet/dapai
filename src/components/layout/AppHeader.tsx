"use client";

import Link from 'next/link';
import Image from 'next/image';
import { SidebarTrigger, useSidebar } from '@/components/ui/sidebar';
import { APP_NAME } from '@/lib/constants';

export function AppHeader() {
  const { isMobile } = useSidebar();
  // const logoCacheBuster = `v=${new Date().getTime()}`; // Removed for stability and to prevent hydration issues

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          {(isMobile) && <SidebarTrigger />}
          <Link href="/" className="flex items-center">
            <Image 
              src="/logo.png" 
              alt={`${APP_NAME} Logo`} 
              width={300} 
              height={131} 
              className="h-9 w-auto" 
            />
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

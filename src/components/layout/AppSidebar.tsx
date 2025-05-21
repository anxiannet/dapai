
"use client";

import Image from 'next/image';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarTrigger,
  SheetHeader, 
  SheetTitle,
  useSidebar,
} from "@/components/ui/sidebar";
import { NAV_ITEMS, APP_NAME } from "@/lib/constants";
import { NavLink } from "./NavLink";
import Link from "next/link";

export function AppSidebar() {
  const { setOpenMobile, isMobile: sidebarIsMobileHook } = useSidebar(); 
  const logoCacheBuster = `v=${new Date().getTime()}`;

  return (
    <Sidebar collapsible="icon">
       <SidebarHeader className="p-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center group-data-[collapsible=icon]:hidden">
            <Image 
              src={`/logo.png?${logoCacheBuster}`} 
              alt={`${APP_NAME} Logo`} 
              width={36} 
              height={36} 
              className="h-9 w-auto" // Changed w-9 to w-auto
            />
          </Link>
          <div className="hidden group-data-[collapsible=icon]:block">
             <Link href="/" className="flex items-center">
                <Image 
                  src={`/logo.png?${logoCacheBuster}`} 
                  alt={`${APP_NAME} Logo`} 
                  width={36} 
                  height={36} 
                  className="h-9 w-auto" // Changed w-9 to w-auto
                />
             </Link>
          </div>
          <div className="md:hidden">
            <SidebarTrigger onClick={() => setOpenMobile(false)} />
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {NAV_ITEMS.map((item) => (
            <SidebarMenuItem key={item.href}>
              <NavLink 
                href={item.href} 
                label={item.label} 
                icon={item.icon}
                matchExact={item.matchExact}
                onClick={() => {
                  if (sidebarIsMobileHook) { 
                    setOpenMobile(false);
                  }
                }}
              />
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}

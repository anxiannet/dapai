
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
import { X } from 'lucide-react'; // Import X icon

export function AppSidebar() {
  const { setOpenMobile, isMobile: sidebarIsMobileHook } = useSidebar(); 

  return (
    <Sidebar collapsible="icon">
       <SidebarHeader className="p-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center group-data-[collapsible=icon]:hidden">
            <Image 
              src="/logo.png" 
              alt={`${APP_NAME} Logo`} 
              width={300} 
              height={131} 
              className="h-9 w-auto" 
            />
          </Link>
          <div className="hidden group-data-[collapsible=icon]:block">
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
          <div className="md:hidden">
            <SidebarTrigger onClick={() => setOpenMobile(false)} icon={<X className="h-4 w-4" />} />
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

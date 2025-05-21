"use client";

import Image from 'next/image';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { NAV_ITEMS, APP_NAME } from "@/lib/constants";
import { NavLink } from "./NavLink";
import Link from "next/link";

export function AppSidebar() {
  const { setOpenMobile } = useSidebar();

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="p-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group-data-[collapsible=icon]:hidden">
            <Image src="/logo.png" alt={`${APP_NAME} Logo`} width={28} height={28} className="h-7 w-7" />
            <span className="text-lg font-semibold">{APP_NAME}</span>
          </Link>
          <div className="hidden group-data-[collapsible=icon]:block">
             <Link href="/" className="flex items-center gap-2">
                <Image src="/logo.png" alt={`${APP_NAME} Logo`} width={28} height={28} className="h-7 w-7" />
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
                  if (useSidebar().isMobile) {
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

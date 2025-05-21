"use client";

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
import { Handshake } from "lucide-react";
import Link from "next/link";

export function AppSidebar() {
  const { setOpenMobile } = useSidebar();

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="p-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group-data-[collapsible=icon]:hidden">
            <Handshake className="h-7 w-7 text-primary" />
            <span className="text-lg font-semibold">{APP_NAME}</span>
          </Link>
          <div className="hidden group-data-[collapsible=icon]:block">
             <Link href="/" className="flex items-center gap-2">
                <Handshake className="h-7 w-7 text-primary" />
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

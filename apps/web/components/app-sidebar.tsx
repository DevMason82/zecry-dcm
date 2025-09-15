"use client";

import { NavMain } from "@/components/sidebars/nav-main";
import { NavUser } from "@/components/sidebars/nav-user";
import { TeamSwitcher } from "@/components/sidebars/team-switcher";
import {
  SidebarHeader,
  SidebarFooter,
  Sidebar,
  SidebarContent,
  SidebarRail,
} from "@workspace/ui/components/sidebar";
import { menuDatas } from "@/components/sidebars/sideMenuItems";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={menuDatas.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={menuDatas.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={menuDatas.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}

"use client";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { itemsAppSideBar } from "@/lib/contants";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function AppSidebar() {
  const [activeItem, setActiveItem] = useState<string>("/");

  return (
    <Sidebar>
      <SidebarContent className="md:mt-14 z-30 ps-3">
        <SidebarGroup>
          <SidebarGroupLabel className="text-sm mb-2">
            Khám phá
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {itemsAppSideBar.map((item) => (
                <Collapsible className="group/collapsible last:block last:md:hidden" key={item.title}>
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton
                        asChild
                        isActive={activeItem === item.href}
                      >
                        <Link
                          href={item.href}
                          className="flex !py-[1.4rem] "
                          onClick={() => setActiveItem(item.href)}
                        >
                          <item.icon
                            className={`!size-4 ${
                              activeItem === item.href ? "text-first " : ""
                            }`}
                          />
                          <span
                            className={`${
                              activeItem === item.href
                                ? "text-last "
                                : "font-semibold"
                            } text-[15px]`}
                          >
                            {item.title}
                          </span>
                          {activeItem === item.href ? (
                            <div className="w-8 overflow-hidden inline-block absolute -translate-x-8">
                              <div className="h-8 w-8 bg-gradient from-first to-last rounded-xl rotate-45 -translate-x-[22px]"></div>
                            </div>
                          ) : (
                            ""
                          )}
                          {item?.content?.length > 0 && (
                            <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                          )}
                        </Link>
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    {item?.content?.length > 0 && (
                      <CollapsibleContent>
                        <SidebarMenuSub className="flex flex-col gap-2">
                          {item.content.map((subItem, index) => (
                            <SidebarMenuSubItem key={index}>
                              <Link href={subItem.link} className="text-md">
                                {subItem.title}
                              </Link>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    )}
                  </SidebarMenuItem>
                </Collapsible>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

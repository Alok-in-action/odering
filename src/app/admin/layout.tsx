"use client";

import { SidebarProvider, Sidebar, SidebarHeader, SidebarContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarInset } from "@/components/ui/sidebar"
import { BookOpen, ShoppingBag, Home } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from "next/navigation";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <h2 className="text-xl font-semibold px-2">Admin Panel</h2>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem>
                <Link href="/" legacyBehavior passHref>
                    <SidebarMenuButton tooltip="Back to Menu" isActive={pathname === '/'}>
                        <Home />
                        <span>MenuMate</span>
                    </SidebarMenuButton>
                </Link>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Link href="/admin/orders" legacyBehavior passHref>
                <SidebarMenuButton tooltip="Orders" isActive={pathname === '/admin/orders'}>
                  <ShoppingBag />
                  <span>Orders</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Link href="/admin/menu" legacyBehavior passHref>
                <SidebarMenuButton tooltip="Menu Items" isActive={pathname === '/admin/menu'}>
                  <BookOpen />
                  <span>Menu</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>
      <SidebarInset>
        {children}
      </SidebarInset>
    </SidebarProvider>
  )
}

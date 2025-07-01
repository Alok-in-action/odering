"use client";

import { SidebarProvider, Sidebar, SidebarHeader, SidebarContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarInset } from "@/components/ui/sidebar"
import { BookOpen, ShoppingBag, Home, UtensilsCrossed } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from "next/navigation";

const Logo = () => (
  <svg
    className="h-8 w-auto text-primary"
    viewBox="0 0 207 69"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M48.333 21.333c1.9-1.033 3.8-1.033 5.7 0l11.4 6.267V16.9c0-2.1-1.7-3.8-3.8-3.8H42.933c-2.1 0-3.8 1.7-3.8 3.8v10.7l9.2-5.067zM61.633 31.433l-11.4-6.266c-1.9-1.034-3.8-1.034-5.7 0l-11.4 6.266c-1.9 1.034-3.133 3-3.133 5.167v13.2c0 2.1 1.7 3.8 3.8 3.8h27.067c2.1 0 3.8-1.7 3.8-3.8v-13.2c0-2.167-1.233-4.133-3.134-5.167z"
      fill="currentColor"
    />
  </svg>
);


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
           <div className="flex items-center gap-3">
              <Logo />
              <h2 className="text-xl font-bold tracking-tight text-primary">Admin Panel</h2>
            </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem>
                <Link href="/" legacyBehavior passHref>
                    <SidebarMenuButton tooltip="Back to Menu" isActive={pathname === '/'}>
                        <Home />
                        <span>Customer Menu</span>
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
                  <span>Menu Items</span>
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

"use client";

import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { ShoppingCart, UtensilsCrossed, ListOrdered } from 'lucide-react';
import { CartSheet } from './CartSheet';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

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


export function Header() {
  const { totalItems, tableNumber } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const pathname = usePathname();

  const myOrdersLink = tableNumber ? { href: `/my-orders?table=${tableNumber}`, label: 'My Orders', icon: ListOrdered } : null;

  const navLinks = [
    { href: '/', label: 'Menu' },
    ...(myOrdersLink ? [myOrdersLink] : []),
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Logo />
          <span className="text-2xl font-bold text-primary tracking-tight">
            MONTO Restaurant
          </span>
        </Link>
        <div className="flex items-center gap-2 md:gap-4">
           {navLinks.map((link) => (
             <Button key={link.href} variant={pathname === link.href ? "secondary" : "ghost"} asChild>
                <Link href={link.href}>
                  {link.icon && <link.icon className="h-4 w-4" />}
                  <span className={link.icon ? "hidden md:inline ml-2" : ""}>{link.label}</span>
                </Link>
             </Button>
           ))}
            <Button onClick={() => setIsCartOpen(true)} variant="ghost" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                <span className="absolute top-0 right-0 flex h-5 w-5 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
                    {totalItems}
                </span>
                )}
                <span className="sr-only">Open Cart</span>
                <span className="hidden md:inline ml-2">Cart</span>
            </Button>
            {tableNumber && (
              <div className="hidden md:flex items-center gap-2 border-l pl-4">
                <span className="text-sm font-medium text-muted-foreground">Table</span>
                <span className="text-lg font-bold text-primary">{tableNumber}</span>
              </div>
            )}
        </div>
      </div>
      <CartSheet isOpen={isCartOpen} onOpenChange={setIsCartOpen} />
    </header>
  );
}

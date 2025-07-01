"use client";

import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Edit } from 'lucide-react';
import { CartSheet } from './CartSheet';
import { useState } from 'react';

export function Header() {
  const { totalItems, tableNumber, setTableNumber } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary">
          MenuMate
        </Link>
        <div className="flex items-center gap-4">
            <Link href="/admin" legacyBehavior passHref>
                <Button variant="ghost">Admin Panel</Button>
            </Link>
             {tableNumber && (
              <div className="flex items-center gap-2 border-l pl-4">
                <span className="text-sm text-muted-foreground">Table</span>
                <span className="font-semibold">{tableNumber}</span>
                <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setTableNumber(null)}>
                  <Edit className="h-4 w-4" />
                  <span className="sr-only">Change Table</span>
                </Button>
              </div>
            )}
            <Button onClick={() => setIsCartOpen(true)} variant="outline" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                    {totalItems}
                </span>
                )}
                <span className="sr-only">Open Cart</span>
            </Button>
        </div>
      </div>
      <CartSheet isOpen={isCartOpen} onOpenChange={setIsCartOpen} />
    </header>
  );
}

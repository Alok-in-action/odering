"use client";

import { useCart } from '@/context/CartContext';
import { MenuClient } from '@/components/customer/MenuClient';
import { TableNumberModal } from '@/components/customer/TableNumberModal';
import type { Category, MenuItem } from '@/lib/types';
import { useEffect, useState } from 'react';
import { Header } from './Header';

interface CustomerViewProps {
  categories: Category[];
  menuItems: MenuItem[];
}

export function CustomerView({ categories, menuItems }: CustomerViewProps) {
  const { tableNumber } = useCart();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div className="min-h-screen w-full bg-background" />;
  }

  return (
    <div className="min-h-screen w-full bg-background">
      <TableNumberModal />
      <Header />
      {tableNumber !== null ? (
        <MenuClient categories={categories} menuItems={menuItems} />
      ) : (
        <div className="container grid place-content-center gap-4 py-20 text-center">
            <h2 className="text-2xl font-bold tracking-tight">Welcome to MONTO Restaurant!</h2>
            <p className="text-muted-foreground">Please enter your table number to view the menu and start your order.</p>
        </div>
      )}
    </div>
  );
}

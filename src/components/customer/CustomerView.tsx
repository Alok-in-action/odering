"use client";

import { useCart } from '@/context/CartContext';
import { MenuClient } from '@/components/customer/MenuClient';
import { TableNumberModal } from '@/components/customer/TableNumberModal';
import type { Category, MenuItem } from '@/lib/types';
import { useEffect, useState } from 'react';

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
    return null;
  }

  return (
    <>
      <TableNumberModal />
      {tableNumber !== null ? (
        <MenuClient categories={categories} menuItems={menuItems} />
      ) : (
        <div className="container py-8 text-center">
            <p className="text-muted-foreground">Please enter a table number to view the menu.</p>
        </div>
      )}
    </>
  );
}

"use client";

import { useCart } from '@/context/CartContext';
import { MenuClient } from '@/components/customer/MenuClient';
import type { Category, MenuItem } from '@/lib/types';
import { useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Header } from './Header';

interface CustomerViewProps {
  categories: Category[];
  menuItems: MenuItem[];
}

function View({ categories, menuItems }: CustomerViewProps) {
  const { tableNumber, setTableNumber } = useCart();
  const searchParams = useSearchParams();

  useEffect(() => {
    const tableParam = searchParams.get('table');
    if (tableParam) {
      const num = parseInt(tableParam, 10);
      if (!isNaN(num) && num > 0) {
        setTableNumber(num);
      } else {
        setTableNumber(null);
      }
    } else {
      setTableNumber(null);
    }
  }, [searchParams, setTableNumber]);

  return (
    <div className="min-h-screen w-full bg-background">
      <Header />
      {tableNumber !== null ? (
        <MenuClient categories={categories} menuItems={menuItems} />
      ) : (
        <div className="container grid place-content-center gap-4 py-20 text-center">
            <h2 className="text-2xl font-bold tracking-tight">Welcome to MONTO Restaurant!</h2>
            <p className="text-muted-foreground">Please scan the QR code on your table to start your order.</p>
        </div>
      )}
    </div>
  );
}

export function CustomerView(props: CustomerViewProps) {
  // Wrapping with Suspense to allow use of useSearchParams
  return (
    <Suspense fallback={<div className="min-h-screen w-full bg-background" />}>
      <View {...props} />
    </Suspense>
  )
}

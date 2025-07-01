"use server";

import { revalidatePath } from 'next/cache';
import { addOrder } from '@/lib/data';
import type { CartItem } from '@/lib/types';

export async function placeOrderAction(tableNumber: number, items: CartItem[], total: number) {
  try {
    if (!tableNumber || items.length === 0) {
      throw new Error('Table number and items are required.');
    }

    const newOrder = await addOrder(tableNumber, items, total);
    revalidatePath('/admin/orders'); // Refresh orders page for admin
    
    return { success: true, order: newOrder };
  } catch (error) {
    return { success: false, message: error instanceof Error ? error.message : 'An unknown error occurred.' };
  }
}

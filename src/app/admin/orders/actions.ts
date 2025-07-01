"use server";

import { revalidatePath } from 'next/cache';
import { updateOrderStatus } from '@/lib/data';

export async function updateOrderStatusAction(id: string, status: 'pending' | 'completed') {
    try {
        const updatedOrder = await updateOrderStatus(id, status);
        if (updatedOrder) {
            revalidatePath('/admin/orders');
            return { success: true };
        }
        return { success: false, message: 'Order not found.' };
    } catch (error) {
        return { success: false, message: error instanceof Error ? error.message : 'An unknown error occurred.' };
    }
}

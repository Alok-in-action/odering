"use server";

import { revalidatePath } from 'next/cache';
import { z } from 'zod';
import { addMenuItem, updateMenuItem, deleteMenuItem } from '@/lib/data';
import type { MenuItem } from '@/lib/types';

const menuItemSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1, "Name is required"),
  description: z.string().min(1, "Description is required"),
  price: z.coerce.number().min(0.01, "Price must be positive"),
  categoryId: z.string().min(1, "Category is required"),
});

export async function saveMenuItemAction(formData: FormData) {
  const rawData = Object.fromEntries(formData.entries());
  
  const validation = menuItemSchema.safeParse(rawData);

  if (!validation.success) {
    return {
      success: false,
      errors: validation.error.flatten().fieldErrors,
    };
  }

  const data = validation.data;
  
  try {
    if (data.id) {
      await updateMenuItem(data as MenuItem);
    } else {
      const { id, ...newItemData } = data;
      await addMenuItem(newItemData);
    }
    revalidatePath('/admin/menu');
    revalidatePath('/');
    return { success: true };
  } catch (error) {
    return { success: false, message: 'Failed to save menu item.' };
  }
}

export async function deleteMenuItemAction(id: string) {
    try {
        await deleteMenuItem(id);
        revalidatePath('/admin/menu');
        revalidatePath('/');
        return { success: true };
    } catch (error) {
        return { success: false, message: 'Failed to delete menu item.' };
    }
}

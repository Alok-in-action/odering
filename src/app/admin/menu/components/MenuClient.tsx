"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { PlusCircle, Pencil, Trash2 } from 'lucide-react';
import { MenuItemDialog } from './MenuItemDialog';
import type { MenuItem, Category } from '@/lib/types';
import { deleteMenuItemAction } from '../actions';
import { useToast } from '@/hooks/use-toast';

interface MenuClientProps {
  menuItems: MenuItem[];
  categories: Category[];
}

export function MenuClient({ menuItems, categories }: MenuClientProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState<MenuItem | null>(null);
  const { toast } = useToast();

  const handleOpenDialog = (menuItem: MenuItem | null = null) => {
    setSelectedMenuItem(menuItem);
    setIsDialogOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this item?')) {
      const result = await deleteMenuItemAction(id);
      if(result.success) {
        toast({ title: 'Success', description: 'Menu item deleted.' });
      } else {
        toast({ variant: 'destructive', title: 'Error', description: result.message });
      }
    }
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
            <div>
                <CardTitle>Menu Items</CardTitle>
                <CardDescription>Manage your restaurant's menu items here.</CardDescription>
            </div>
            <Button onClick={() => handleOpenDialog()}>
                <PlusCircle className="mr-2 h-4 w-4" /> Add Item
            </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {menuItems.map(item => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.name}</TableCell>
                  <TableCell>{categories.find(c => c.id === item.categoryId)?.name}</TableCell>
                  <TableCell>${item.price.toFixed(2)}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="outline" size="icon" onClick={() => handleOpenDialog(item)}>
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button variant="destructive" size="icon" onClick={() => handleDelete(item.id)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <MenuItemDialog
        isOpen={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        menuItem={selectedMenuItem}
        categories={categories}
      />
    </div>
  );
}

"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Order } from "@/lib/types";
import { format } from 'date-fns';
import { CheckCircle2, Circle } from "lucide-react";
import { updateOrderStatus } from '@/lib/data';
import { useToast } from "@/hooks/use-toast";
import { revalidatePath } from "next/cache";
import { useRouter } from "next/navigation";


async function handleUpdateStatus(id: string, status: 'pending' | 'completed') {
    await updateOrderStatus(id, status);
}

export function OrderList({ orders }: { orders: Order[] }) {
    const { toast } = useToast();
    const router = useRouter();

    const handleStatusChange = async (id: string, status: 'completed' | 'pending') => {
        await handleUpdateStatus(id, status);
        toast({ title: "Status Updated", description: `Order ${id} marked as ${status}.`});
        router.refresh();
    };

  return (
    <div className="p-4 sm:p-6 lg:p-8">
        <Card>
            <CardHeader>
                <CardTitle>Current Orders</CardTitle>
                <CardDescription>View and manage incoming customer orders.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {orders.length === 0 && <p className="text-muted-foreground col-span-full text-center">No orders yet.</p>}
                {orders.map(order => (
                <Card key={order.id} className={order.status === 'completed' ? 'bg-muted/50' : ''}>
                    <CardHeader>
                        <CardTitle className="flex justify-between items-center">
                            <span>Table {order.tableNumber}</span>
                             <Badge variant={order.status === 'pending' ? 'default' : 'secondary'} className={order.status === 'pending' ? 'bg-accent text-accent-foreground' : ''}>
                                {order.status}
                            </Badge>
                        </CardTitle>
                        <CardDescription>
                            {format(new Date(order.createdAt), 'PPpp')}
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-2">
                        {order.items.map(item => (
                            <li key={item.id} className="flex justify-between text-sm">
                                <span>{item.quantity} x {item.name}</span>
                                <span>${(item.quantity * item.price).toFixed(2)}</span>
                            </li>
                        ))}
                        </ul>
                        <div className="border-t mt-2 pt-2 flex justify-between font-bold">
                            <span>Total</span>
                            <span>${order.total.toFixed(2)}</span>
                        </div>
                    </CardContent>
                    <CardFooter>
                         {order.status === 'pending' ? (
                            <Button className="w-full" onClick={() => handleStatusChange(order.id, 'completed')}>
                                <CheckCircle2 className="mr-2 h-4 w-4" /> Mark as Completed
                            </Button>
                        ) : (
                            <Button variant="outline" className="w-full" onClick={() => handleStatusChange(order.id, 'pending')}>
                                <Circle className="mr-2 h-4 w-4" /> Mark as Pending
                            </Button>
                        )}
                    </CardFooter>
                </Card>
                ))}
            </CardContent>
        </Card>
    </div>
  );
}

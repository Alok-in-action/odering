"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Order } from "@/lib/types";
import { format } from 'date-fns';

export function MyOrdersClient({ orders, tableNumber }: { orders: Order[], tableNumber: number | null }) {
  return (
    <main className="container mx-auto px-4 py-6 sm:py-8">
        <div className="text-center mb-8">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-primary">My Orders</h1>
            {tableNumber ? (
                <p className="mt-2 text-lg text-muted-foreground">Showing orders for Table {tableNumber}</p>
            ) : (
                <p className="mt-2 text-lg text-muted-foreground">Invalid table number. Please go back to the menu and ensure your URL is correct.</p>
            )}
        </div>
        
        {tableNumber && (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {orders.length === 0 && (
                    <Card className="md:col-span-2 lg:col-span-3">
                        <CardContent className="pt-6">
                            <p className="text-muted-foreground text-center py-10">You haven't placed any orders from this table yet.</p>
                        </CardContent>
                    </Card>
                )}
                {orders.map(order => (
                <Card key={order.id} className={order.status === 'completed' ? 'bg-muted/50' : ''}>
                    <CardHeader>
                        <CardTitle className="flex justify-between items-center">
                            <span>Order #{order.id.split('-').pop()}</span>
                             <Badge variant={order.status === 'pending' ? 'default' : 'secondary'} className={order.status === 'pending' ? 'bg-primary text-primary-foreground' : ''}>
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
                                <span>₹{(item.quantity * item.price).toFixed(2)}</span>
                            </li>
                        ))}
                        </ul>
                    </CardContent>
                    <CardFooter className="flex-col items-start">
                       <div className="border-t mt-2 pt-4 flex justify-between font-bold w-full">
                            <span>Total</span>
                            <span>₹{order.total.toFixed(2)}</span>
                        </div>
                    </CardFooter>
                </Card>
                ))}
            </div>
        )}
    </main>
  );
}

"use client";

import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter, SheetDescription } from '@/components/ui/sheet';
import { Minus, Plus, Trash2, ShoppingCart } from 'lucide-react';
import { useToast } from "@/hooks/use-toast"
import { placeOrderAction } from '@/app/actions';
import { useState } from 'react';

interface CartSheetProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

export function CartSheet({ isOpen, onOpenChange }: CartSheetProps) {
  const { cartItems, removeFromCart, updateQuantity, clearCart, cartTotal } = useCart();
  const { toast } = useToast();
  const [tableNumber, setTableNumber] = useState('');
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);

  const handlePlaceOrder = async () => {
    if (!tableNumber || isNaN(parseInt(tableNumber)) || parseInt(tableNumber) <= 0) {
      toast({
        variant: "destructive",
        title: "Invalid Table Number",
        description: "Please enter a valid table number.",
      });
      return;
    }
    
    setIsPlacingOrder(true);
    const result = await placeOrderAction(parseInt(tableNumber), cartItems, cartTotal);
    setIsPlacingOrder(false);

    if (result.success && result.order) {
      toast({
        title: "Order Placed Successfully!",
        description: (
          <div className="mt-2 w-[340px] rounded-md bg-slate-950 p-4 text-white">
            <p className="text-sm">Table: {result.order.tableNumber}</p>
            <p className="text-sm">Total: ${result.order.total.toFixed(2)}</p>
            <p className="text-sm">Order ID: {result.order.id}</p>
          </div>
        )
      });
      clearCart();
      setTableNumber('');
      onOpenChange(false);
    } else {
       toast({
        variant: "destructive",
        title: "Order Failed",
        description: result.message || "There was a problem placing your order.",
      });
    }
  };


  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetContent className="flex flex-col">
        <SheetHeader>
          <SheetTitle>Your Order</SheetTitle>
          <SheetDescription>Review your items and place your order.</SheetDescription>
        </SheetHeader>
        {cartItems.length > 0 ? (
          <>
            <ScrollArea className="flex-grow pr-4 -mr-6">
              <div className="flex flex-col gap-4 py-4">
                {cartItems.map(item => (
                  <div key={item.id} className="flex items-center gap-4">
                    <div className="flex-grow">
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-muted-foreground">${item.price.toFixed(2)}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Button variant="outline" size="icon" className="h-6 w-6" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span>{item.quantity}</span>
                        <Button variant="outline" size="icon" className="h-6 w-6" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                        <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-destructive" onClick={() => removeFromCart(item.id)}>
                            <Trash2 className="h-4 w-4" />
                        </Button>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
            <SheetFooter className="mt-auto">
              <div className="w-full space-y-4">
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <div className="space-y-2">
                    <Input 
                        type="number" 
                        placeholder="Enter your table number" 
                        value={tableNumber}
                        onChange={(e) => setTableNumber(e.target.value)}
                        className="text-center"
                    />
                    <Button 
                      className="w-full"
                      onClick={handlePlaceOrder}
                      disabled={isPlacingOrder}
                    >
                      {isPlacingOrder ? 'Placing Order...' : 'Place Order'}
                    </Button>
                </div>
              </div>
            </SheetFooter>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center flex-grow">
            <ShoppingCart className="w-16 h-16 text-muted-foreground" />
            <p className="mt-4 text-lg font-semibold">Your cart is empty</p>
            <p className="text-sm text-muted-foreground">Add some items from the menu to get started.</p>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}

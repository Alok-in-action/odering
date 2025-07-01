"use client";

import { useState, useEffect } from 'react';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

export function TableNumberModal() {
  const { tableNumber, setTableNumber } = useCart();
  const [input, setInput] = useState('');
  const { toast } = useToast();

  const handleSubmit = () => {
    const num = parseInt(input);
    if (!input || isNaN(num) || num <= 0) {
      toast({
        variant: "destructive",
        title: "Invalid Table Number",
        description: "Please enter a valid, positive number.",
      });
      return;
    }
    setTableNumber(num);
    setInput('');
  };

  return (
    <Dialog open={tableNumber === null}>
      <DialogContent
        className="sm:max-w-[425px]"
        onInteractOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
      >
        <DialogHeader>
          <DialogTitle>Welcome to MenuMate</DialogTitle>
          <DialogDescription>
            Please enter your table number to start your order.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <Input
            id="tableNumber"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
            placeholder="Table Number"
            type="number"
            className="text-center text-lg"
            autoFocus
          />
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleSubmit} className="w-full">
            Start Ordering
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

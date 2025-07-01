"use client";

import React, { createContext, useContext, useState, useMemo, useCallback, useEffect } from 'react';
import type { CartItem, MenuItem } from '@/lib/types';
import { useToast } from "@/hooks/use-toast"


interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: MenuItem) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  cartTotal: number;
  totalItems: number;
  tableNumber: number | null;
  setTableNumber: (table: number | null) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [tableNumber, setTableNumberState] = useState<number | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    try {
      const storedTable = localStorage.getItem('tableNumber');
      if (storedTable && !isNaN(parseInt(storedTable))) {
        setTableNumberState(parseInt(storedTable));
      }
    } catch (error) {
      console.error("Could not read table number from localStorage", error);
    }
  }, []);

  const setTableNumber = useCallback((table: number | null) => {
    try {
      if (table) {
        localStorage.setItem('tableNumber', table.toString());
      } else {
        localStorage.removeItem('tableNumber');
      }
    } catch (error) {
       console.error("Could not write table number to localStorage", error);
    }
    setTableNumberState(table);
  }, []);

  const addToCart = useCallback((item: MenuItem) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(i => i.id === item.id);
      if (existingItem) {
        return prevItems.map(i =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });
    toast({
      title: "Added to cart",
      description: `${item.name} has been added to your cart.`,
    })
  }, [toast]);

  const removeFromCart = useCallback((itemId: string) => {
    setCartItems(prevItems => prevItems.filter(i => i.id !== itemId));
  }, []);

  const updateQuantity = useCallback((itemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
    } else {
      setCartItems(prevItems =>
        prevItems.map(i => (i.id === itemId ? { ...i, quantity } : i))
      );
    }
  }, [removeFromCart]);

  const clearCart = useCallback(() => {
    setCartItems([]);
  }, []);

  const cartTotal = useMemo(() => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [cartItems]);
  
  const totalItems = useMemo(() => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  }, [cartItems]);

  const value = useMemo(() => ({
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    cartTotal,
    totalItems,
    tableNumber,
    setTableNumber,
  }), [cartItems, addToCart, removeFromCart, updateQuantity, clearCart, cartTotal, totalItems, tableNumber, setTableNumber]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

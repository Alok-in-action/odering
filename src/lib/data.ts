import type { MenuItem, Category, Order, CartItem } from './types';

let categories: Category[] = [
  { id: 'appetizers', name: 'Appetizers' },
  { id: 'main-courses', name: 'Main Courses' },
  { id: 'desserts', name: 'Desserts' },
  { id: 'drinks', name: 'Drinks' },
];

let menuItems: MenuItem[] = [
  // Appetizers
  { id: '1', name: 'Bruschetta', description: 'Grilled bread with tomatoes, garlic, and basil.', price: 8.50, imageUrl: 'https://placehold.co/600x400.png', categoryId: 'appetizers', "data-ai-hint": "bruschetta bread" },
  { id: '2', name: 'Stuffed Mushrooms', description: 'Mushroom caps filled with herbs and breadcrumbs.', price: 9.00, imageUrl: 'https://placehold.co/600x400.png', categoryId: 'appetizers', "data-ai-hint": "stuffed mushrooms" },
  { id: '3', name: 'Garlic Knots', description: 'Freshly baked knots with garlic butter.', price: 6.00, imageUrl: 'https://placehold.co/600x400.png', categoryId: 'appetizers', "data-ai-hint": "garlic knots" },
  
  // Main Courses
  { id: '4', name: 'Margherita Pizza', description: 'Classic pizza with tomato, mozzarella, and basil.', price: 14.00, imageUrl: 'https://placehold.co/600x400.png', categoryId: 'main-courses', "data-ai-hint": "margherita pizza" },
  { id: '5', name: 'Spaghetti Carbonara', description: 'Pasta with pancetta, egg, and parmesan cheese.', price: 16.50, imageUrl: 'https://placehold.co/600x400.png', categoryId: 'main-courses', "data-ai-hint": "spaghetti carbonara" },
  { id: '6', name: 'Chicken Parmesan', description: 'Breaded chicken with marinara and mozzarella.', price: 18.00, imageUrl: 'https://placehold.co/600x400.png', categoryId: 'main-courses', "data-ai-hint": "chicken parmesan" },
  { id: '7', name: 'Grilled Salmon', description: 'Served with roasted vegetables and lemon dill sauce.', price: 22.00, imageUrl: 'https://placehold.co/600x400.png', categoryId: 'main-courses', "data-ai-hint": "grilled salmon" },

  // Desserts
  { id: '8', name: 'Tiramisu', description: 'Coffee-flavored Italian dessert.', price: 7.50, imageUrl: 'https://placehold.co/600x400.png', categoryId: 'desserts', "data-ai-hint": "tiramisu slice" },
  { id: '9', name: 'Cheesecake', description: 'Creamy cheesecake with a graham cracker crust.', price: 7.00, imageUrl: 'https://placehold.co/600x400.png', categoryId: 'desserts', "data-ai-hint": "cheesecake slice" },
  { id: '10', name: 'Chocolate Lava Cake', description: 'Warm chocolate cake with a molten center.', price: 8.00, imageUrl: 'https://placehold.co/600x400.png', categoryId: 'desserts', "data-ai-hint": "lava cake" },

  // Drinks
  { id: '11', name: 'Iced Tea', description: 'Freshly brewed and chilled.', price: 3.00, imageUrl: 'https://placehold.co/600x400.png', categoryId: 'drinks', "data-ai-hint": "iced tea" },
  { id: '12', name: 'Lemonade', description: 'Homemade with fresh lemons.', price: 3.50, imageUrl: 'https://placehold.co/600x400.png', categoryId: 'drinks', "data-ai-hint": "lemonade glass" },
  { id: '13', name: 'Espresso', description: 'Strong black coffee.', price: 2.50, imageUrl: 'https://placehold.co/600x400.png', categoryId: 'drinks', "data-ai-hint": "espresso cup" },
];

let orders: Order[] = [
  { id: 'ord1', tableNumber: 5, items: [{...menuItems[4], quantity: 2}, {...menuItems[11], quantity: 2}], total: 37, status: 'pending', createdAt: new Date() },
  { id: 'ord2', tableNumber: 12, items: [{...menuItems[0], quantity: 1}, {...menuItems[6], quantity: 1}, {...menuItems[8], quantity: 1}], total: 37.5, status: 'completed', createdAt: new Date() },
];

// Menu Data Functions
export const getMenuData = async () => {
  return { categories, menuItems };
};

export const getMenuItems = async () => {
  return menuItems;
}

export const getCategories = async () => {
  return categories;
}

export const addMenuItem = async (item: Omit<MenuItem, 'id'>) => {
  const newItem = { ...item, id: Date.now().toString() };
  menuItems.push(newItem);
  return newItem;
};

export const updateMenuItem = async (updatedItem: MenuItem) => {
  menuItems = menuItems.map(item => item.id === updatedItem.id ? updatedItem : item);
  return updatedItem;
};

export const deleteMenuItem = async (id: string) => {
  menuItems = menuItems.filter(item => item.id !== id);
  return { success: true };
};


// Order Data Functions
export const getOrders = async () => {
  return orders.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
};

export const addOrder = async (tableNumber: number, items: CartItem[], total: number) => {
  const newOrder: Order = {
    id: `ord-${Date.now()}`,
    tableNumber,
    items,
    total,
    status: 'pending',
    createdAt: new Date(),
  };
  orders.push(newOrder);
  return newOrder;
};

export const updateOrderStatus = async (id: string, status: 'pending' | 'completed') => {
  const order = orders.find(o => o.id === id);
  if (order) {
    order.status = status;
    return order;
  }
  return null;
};

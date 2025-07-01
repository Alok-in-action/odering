"use client";

import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from '@/components/ui/card';
import type { Category, MenuItem } from '@/lib/types';
import { 
  PlusCircle, 
  UtensilsCrossed, 
  Salad, 
  Soup, 
  CupSoda, 
  Flame, 
  GlassWater, 
  Sandwich, 
  FlameKindling, 
  Utensils, 
  CookingPot, 
  Vegan, 
  Nut, 
  Circle, 
  Sprout, 
  Wheat, 
  RectangleHorizontal, 
  Bowl, 
  Pizza, 
  Burger 
} from 'lucide-react';

interface MenuClientProps {
  categories: Category[];
  menuItems: MenuItem[];
}

const categoryIcons: { [key: string]: React.ElementType } = {
  'khane-se-pahele-time-pass': Salad,
  'chinese-hot-soup': Soup,
  'milk-shakes-cold-coffee': CupSoda,
  'hot-time': Flame,
  'raita-lassi': GlassWater,
  'starters-pakoda': Sandwich,
  'chinese-sizzler': FlameKindling,
  'chinese-main-course': UtensilsCrossed,
  'chinese-starters': Utensils,
  'tandoor-starters': CookingPot,
  'paneer-ka-kamal': Vegan,
  'kaju-ka-khazana': Nut,
  'kofta': Circle,
  'punjab-ka-dhamaka': Sprout,
  'mitti-ki-khushbu-roti': Wheat,
  'tava-roti': CookingPot,
  'south-indian-fancy-dosa': RectangleHorizontal,
  'kuch-ke-kuch-saath': Soup,
  'basmati-ka-swad-rice': Bowl,
  'mozzarella-pizza': Pizza,
  'toast-sandwich': Sandwich,
  'pav-bhaji': Soup,
  'pizza': Pizza,
  'grill-sandwich': Sandwich,
  'burger': Burger,
  'sip-in-soda': CupSoda,
  'paper-dosa': RectangleHorizontal,
  'uttapam': Circle,
  'monto-special-thali': Utensils,
};

export function MenuClient({ categories, menuItems }: MenuClientProps) {
  const { addToCart } = useCart();

  return (
    <div className="container py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-1/4 md:sticky md:top-24 self-start">
          <h2 className="text-xl font-bold mb-4">Categories</h2>
          <nav>
            <ul className="space-y-2">
              {categories.map(category => {
                const Icon = categoryIcons[category.id] || UtensilsCrossed;
                return (
                  <li key={category.id}>
                    <a href={`#${category.id}`} className="flex items-center gap-3 p-2 rounded-md hover:bg-primary/10 transition-colors text-foreground/80 hover:text-foreground font-medium">
                      <Icon className="w-5 h-5 text-primary" />
                      {category.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </aside>

        <main className="w-full md:w-3/4">
          {categories.map(category => (
            <section key={category.id} id={category.id} className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold mb-6 border-b pb-2">{category.name}</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {menuItems.filter(item => item.categoryId === category.id).map(item => (
                  <Card key={item.id} className="flex flex-col overflow-hidden">
                    <CardContent className="p-4 flex-grow">
                      <CardTitle className="text-xl mb-1">{item.name}</CardTitle>
                      <CardDescription>{item.description}</CardDescription>
                    </CardContent>
                    <CardFooter className="flex justify-between items-center p-4 pt-0">
                      <p className="text-lg font-semibold text-primary">${item.price.toFixed(2)}</p>
                      <Button onClick={() => addToCart(item)}>
                        <PlusCircle className="mr-2 h-4 w-4" /> Add to Cart
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </section>
          ))}
        </main>
      </div>
    </div>
  );
}

"use client";

import { useState, useMemo, useRef, useEffect } from 'react';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import type { Category, MenuItem } from '@/lib/types';
import { Plus, Search, CheckCircle, Vegan, Salad, Soup, CupSoda, Flame, GlassWater, Sandwich, FlameKindling, UtensilsCrossed, Utensils, CookingPot, Nut, Circle, Sprout, Wheat, RectangleHorizontal, Pizza, ChefHat, Info } from 'lucide-react';

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
  'basmati-ka-swad-rice': ChefHat,
  'mozzarella-pizza': Pizza,
  'toast-sandwich': Sandwich,
  'pav-bhaji': Soup,
  'pizza': Pizza,
  'grill-sandwich': Sandwich,
  'burger': Sandwich,
  'sip-in-soda': CupSoda,
  'paper-dosa': RectangleHorizontal,
  'uttapam': Circle,
  'monto-special-thali': Utensils,
};

const DecorativeIcon = () => (
    <svg width="60" height="20" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary/50">
        <path d="M10 20 C 30 0, 30 40, 50 20" stroke="currentColor" strokeWidth="2" fill="none" />
        <circle cx="60" cy="20" r="3" fill="currentColor" />
        <path d="M70 20 C 90 0, 90 40, 110 20" stroke="currentColor" strokeWidth="2" fill="none" />
    </svg>
);


interface MenuClientProps {
  categories: Category[];
  menuItems: MenuItem[];
}

export function MenuClient({ categories, menuItems }: MenuClientProps) {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState(categories[0]?.id || '');
  const [searchQuery, setSearchQuery] = useState('');
  const isClickScrolling = useRef(false);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleSelectCategory = (categoryId: string) => {
    isClickScrolling.current = true;
    setSelectedCategory(categoryId);
    const element = document.getElementById(categoryId);
    if (element) {
      const yOffset = -120; // offset for sticky header
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }

    if (scrollTimeout.current) {
      clearTimeout(scrollTimeout.current);
    }

    scrollTimeout.current = setTimeout(() => {
      isClickScrolling.current = false;
    }, 1000); // Allow time for smooth scroll to finish
  };

  const filteredItems = useMemo(() =>
    menuItems.filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    ), [menuItems, searchQuery]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (isClickScrolling.current) return;
        
        const intersectingEntries = entries.filter(e => e.isIntersecting);
        if (intersectingEntries.length > 0) {
            // Get the topmost intersecting entry
            const topEntry = intersectingEntries.reduce((prev, current) => {
                return (prev.boundingClientRect.top < current.boundingClientRect.top) ? prev : current;
            });
             setSelectedCategory(topEntry.target.id);
        }
      },
      {
        rootMargin: "-120px 0px -65% 0px", // Top offset for sticky header, bottom offset to define trigger area
        threshold: 0,
      }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => {
        if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, [filteredItems]); // Re-run if search query changes the visible items

  useEffect(() => {
    const selectedButton = document.querySelector(`[data-category-id="${selectedCategory}"]`);
    if (selectedButton) {
      selectedButton.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }, [selectedCategory]);

  return (
    <main className="container mx-auto px-4 py-6 sm:py-8">
      <div className="text-center mb-8">
        <DecorativeIcon />
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-primary">Our Menu</h1>
        <p className="mt-2 text-lg text-muted-foreground">Explore our delicious offerings</p>
      </div>

      <div className="sticky top-[79px] z-30 bg-background/95 py-4 backdrop-blur-sm">
        <div className="relative mb-4">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Search menu items (e.g., Dosa, Paneer)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-full pl-12 pr-4 py-6 text-base"
          />
        </div>
        <ScrollArea className="w-full whitespace-nowrap">
          <div className="flex w-max gap-3 p-1">
            {categories.map(cat => {
              const Icon = categoryIcons[cat.id] || UtensilsCrossed;
              const isSelected = selectedCategory === cat.id;
              return (
                <Button
                  key={cat.id}
                  data-category-id={cat.id}
                  variant={isSelected ? "default" : "outline"}
                  className={`flex h-auto flex-col items-start gap-2 p-3 text-left shadow-sm transition-all ${isSelected ? 'border-primary' : 'bg-card'}`}
                  onClick={() => handleSelectCategory(cat.id)}
                >
                  <div className="flex w-full items-center justify-between">
                    <Icon className={`h-5 w-5 ${isSelected ? 'text-primary-foreground' : 'text-primary'}`} />
                    {isSelected && <CheckCircle className="h-5 w-5 text-primary-foreground" />}
                  </div>
                  <div className="whitespace-normal">
                    <p className={`font-semibold ${isSelected ? 'text-primary-foreground' : 'text-foreground'}`}>{cat.name}</p>
                  </div>
                </Button>
              )
            })}
          </div>
          <ScrollBar orientation="horizontal" className="h-2" />
        </ScrollArea>
      </div>

      <div className="mt-8 space-y-12">
        {categories.map(category => {
          const itemsInCategory = filteredItems.filter(item => item.categoryId === category.id);
          if (itemsInCategory.length === 0 && searchQuery) return null;
          
          const Icon = categoryIcons[category.id] || UtensilsCrossed;

          return (
            <section key={category.id} id={category.id} className="scroll-mt-32">
              <div className="flex items-center gap-4 mb-6">
                <Icon className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-bold tracking-tight text-foreground">{category.name}</h2>
              </div>
              {itemsInCategory.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {itemsInCategory.map(item => (
                    <Card key={item.id} className="flex flex-col overflow-hidden border shadow-md hover:shadow-xl transition-shadow duration-300 rounded-2xl">
                      <CardContent className="p-4 flex-grow space-y-2">
                        <CardTitle className="text-xl">{item.name}</CardTitle>
                        <CardDescription>{item.description}</CardDescription>
                      </CardContent>
                      <CardFooter className="flex justify-between items-center p-4 pt-0">
                        <div className="flex items-center gap-2">
                          <p className="text-xl font-bold text-primary">₹{item.price.toFixed(2)}</p>
                          <Vegan className="h-5 w-5 text-green-600" />
                        </div>
                        <Button onClick={() => addToCart(item)} className="rounded-full">
                          <Plus className="mr-2 h-4 w-4" /> Add
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              ) : (
                 <div className="text-center py-8 text-muted-foreground bg-card rounded-2xl">No items in this category.</div>
              )}
            </section>
          );
        })}
      </div>
    </main>
  );
}

import { getMenuData } from '@/lib/data';
import { Header } from '@/components/customer/Header';
import { MenuClient } from '@/components/customer/MenuClient';

export default async function HomePage() {
  const { categories, menuItems } = await getMenuData();

  return (
    <div className="min-h-screen w-full">
      <Header />
      <main>
        <MenuClient categories={categories} menuItems={menuItems} />
      </main>
      <footer className="py-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} MenuMate. All rights reserved.
      </footer>
    </div>
  );
}

import { getMenuData } from '@/lib/data';
import { MenuClient } from './components/MenuClient';

export default async function MenuPage() {
  const { menuItems, categories } = await getMenuData();

  return <MenuClient menuItems={menuItems} categories={categories} />;
}

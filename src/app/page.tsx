import { getMenuData } from '@/lib/data';
import { CustomerView } from '@/components/customer/CustomerView';

export default async function HomePage() {
  const { categories, menuItems } = await getMenuData();

  return (
    <CustomerView categories={categories} menuItems={menuItems} />
  );
}

import { getOrders } from '@/lib/data';
import { OrderList } from './components/OrderList';

export const dynamic = 'force-dynamic'

export default async function OrdersPage() {
  const orders = await getOrders();
  
  return <OrderList orders={orders} />;
}

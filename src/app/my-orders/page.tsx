import { getOrdersByTable } from '@/lib/data';
import { MyOrdersClient } from './components/MyOrdersClient';
import { Suspense } from 'react';
import { Header } from '@/components/customer/Header';

async function OrdersView({ tableNumber }: { tableNumber: number | null }) {
  const orders = tableNumber ? await getOrdersByTable(tableNumber) : [];
  return <MyOrdersClient orders={orders} tableNumber={tableNumber} />;
}

export default function MyOrdersPage({ searchParams }: { searchParams: { table?: string } }) {
  const tableStr = searchParams?.table;
  const tableNumber = tableStr && !isNaN(parseInt(tableStr)) ? parseInt(tableStr) : null;

  return (
    <div className="min-h-screen w-full bg-background">
      <Header />
      <Suspense fallback={<div className="container text-center py-10">Loading orders...</div>}>
        <OrdersView tableNumber={tableNumber} />
      </Suspense>
    </div>
  );
}

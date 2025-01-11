import AppSidebar from '@/components/common/app-sidebar';
import Header from '@/components/common/header';
import { SidebarInset, SidebarProvider } from '@/components/common/sidebar';
import { cookies } from 'next/headers';

export default async function DashboardLayoutAdmin({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get('sidebar:state')?.value === 'true';
  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <AppSidebar />
      <SidebarInset>
        <Header />
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}

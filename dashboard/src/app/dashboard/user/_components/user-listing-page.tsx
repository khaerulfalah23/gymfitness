import PageContainer from '@/components/common/page-container';
import { Heading } from '@/components/heading';
import { buttonVariants } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { Plus } from 'lucide-react';
import Link from 'next/link';
import UserTable from './user-tables';
import { fakeUsers } from '@/constants/mock-api';
import { Employee } from '@/constants/data';
import { searchParamsCache } from '@/lib/searchparams';

export default async function UserListingPage() {
  const page = searchParamsCache.get('page');
  const search = searchParamsCache.get('q');
  const gender = searchParamsCache.get('gender');
  const pageLimit = searchParamsCache.get('limit');

  const filters = {
    page,
    limit: pageLimit,
    ...(search && { search }),
    ...(gender && { genders: gender }),
  };

  const data = await fakeUsers.getUsers(filters);
  const totalUsers = data.total_users;
  const employee: Employee[] = data.users;
  return (
    <PageContainer scrollable>
      <div className='space-y-4'>
        <div className='flex items-start justify-between'>
          <Heading title='User' description='Manage User' />

          <Link
            href={'/dashboard/user/new'}
            className={cn(buttonVariants({ variant: 'default' }))}
          >
            <Plus className='mr-2 h-4 w-4' /> Add New
          </Link>
        </div>
        <Separator />
        <UserTable data={employee} totalData={totalUsers} />
      </div>
    </PageContainer>
  );
}

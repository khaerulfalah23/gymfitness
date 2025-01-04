'use client';
import { DataTable } from '@/components/ui/table/data-table';
import { columns } from './columns';
import { User } from '@/constants/data';

export default function UserTable({
  data,
  totalData,
}: {
  data: User[];
  totalData: number;
}) {
  return (
    <div className='space-y-4'>
      <div className='flex flex-wrap items-center gap-4'>
        {/* <DataTableSearch
          searchKey="name"
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setPage={setPage}
        />
        <DataTableFilterBox
          filterKey="gender"
          title="Gender"
          options={GENDER_OPTIONS}
          setFilterValue={setGenderFilter}
          filterValue={genderFilter}
        />
        <DataTableResetFilter
          isFilterActive={isAnyFilterActive}
          onReset={resetFilters}
        /> */}
      </div>
      <DataTable columns={columns} data={data} totalItems={totalData} />
    </div>
  );
}

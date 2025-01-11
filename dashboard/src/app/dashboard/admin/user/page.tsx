import { SearchParams } from 'nuqs';
import UserListingPage from './_components/user-listing-page';
import { searchParamsCache } from '@/lib/searchparams';

type pageProps = {
  searchParams: Promise<SearchParams>;
};

export const metadata = {
  title: 'Dashboard : Users',
};

export default async function User(props: pageProps) {
  const searchParams = await props.searchParams;
  searchParamsCache.parse(searchParams);
  return <UserListingPage />;
}

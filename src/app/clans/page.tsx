import styles from './page.module.scss';
import SearchBar from '../../components/SearchBar';

import SearchedClanList from './_components/SearchedClanList';

import { redirect } from 'next/navigation';
import { searchClans } from '@/utils/coc-api/requester/searchClans';

export default async function Page({ searchParams }: { searchParams: { name: string; after?: string } }) {
  const { items } = await searchClans({ name: searchParams.name });

  if (items.length === 0) {
    redirect('/clan-not-found');
  }

  return (
    <main className={styles.main}>
      <div className={styles.searchBarArea}>
        <SearchBar />
      </div>
      <SearchedClanList clanList={items} />
    </main>
  );
}

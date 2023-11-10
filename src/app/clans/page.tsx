import styles from './page.module.scss';
import SearchBar from '../../components/SearchBar';

import SearchedClanList from './_components/SearchedClanList';

import { redirect } from 'next/navigation';
import { searchClans } from '@/utils/coc-api/clans/searchClans';

export default async function Page({ searchParams }: { searchParams: { name: string; after?: string } }) {
  const { response, data } = await searchClans({ name: searchParams.name });

  if (data === undefined || data.items.length === 0) {
    redirect('/clan-not-found');
  }

  return (
    <main className={styles.main}>
      <div className={styles.searchBarArea}>
        <SearchBar />
      </div>
      <SearchedClanList clanList={data.items} />
    </main>
  );
}

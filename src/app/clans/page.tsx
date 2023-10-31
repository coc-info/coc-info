import styles from './page.module.scss';
import SearchBar from '../../components/SearchBar';

import SearchedClanList from './_components/SearchedClanList';
import { searchClans } from '@/utils/coc-api/searchClans';
import { redirect } from 'next/navigation';

export default async function Page({ searchParams }: { searchParams: { name: string; after?: string } }) {
  const [res, clanSearchResult] = await searchClans({ name: searchParams.name, limit: 10 });

  const searchedClanList = clanSearchResult.items;
  if (searchedClanList.length === 0) {
    redirect('/clan-not-found');
  }

  return (
    <main className={styles.main}>
      <div className={styles.searchBarArea}>
        <SearchBar />
      </div>
      <SearchedClanList clanList={searchedClanList} />
    </main>
  );
}

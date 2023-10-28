import styles from './page.module.scss';
import SearchBar from '../../components/SearchBar';

import SearchedClanList from './_components/SearchedClanList';
import ClanNotFound from './_components/ClanNotFound';
import { searchClans } from '@/utils/coc-api/searchClans';

export default async function Page({ searchParams }: { searchParams: { name: string; after?: string } }) {
  const [res, clanSearchResult] = await searchClans({ name: searchParams.name, limit: 10 });

  const searchedClanList = clanSearchResult.items;

  return (
    <main className={styles.main}>
      <div className={styles.searchBarArea}>
        <SearchBar />
      </div>
      {searchedClanList.length === 0 ? <ClanNotFound /> : <SearchedClanList clanList={searchedClanList} />}
    </main>
  );
}

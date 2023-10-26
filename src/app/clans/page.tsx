import styles from './page.module.scss';
import SearchBar from '../../components/SearchBar';

import SeachedClanList from './_components/SearchedClanList';
import ClanNotFound from './_components/ClanNotFound';

export default function Page({ searchParams }: { searchParams: { name: string; after?: string } }) {
  return (
    <main className={styles.main}>
      <div className={styles.searchBarArea}>
        <SearchBar />
      </div>
      {searchParams.name === 'test-not-found' ? (
        <ClanNotFound />
      ) : (
        <SeachedClanList name={searchParams.name} after={searchParams.after} />
      )}
    </main>
  );
}

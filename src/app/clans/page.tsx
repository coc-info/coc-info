import styles from './page.module.scss';
import SearchBar from '../../components/SearchBar';
import Link from 'next/link';
import SearchedClanList from './_components/SearchedClanList';

import { redirect } from 'next/navigation';
import { getSearchedClanList } from '@/utils/coc-api';

interface PageProps {
  searchParams: { name: string; after?: string; before?: string };
}

export default async function Page({ searchParams }: PageProps) {
  const { response, data: searchedClanList } = await getSearchedClanList({
    name: searchParams.name,
    limit: 20,
    after: searchParams.after,
    before: searchParams.before,
  });

  if (searchedClanList === undefined || searchedClanList.items.length === 0) {
    redirect('/clan-not-found');
  }

  return (
    <main className={styles.main}>
      <div className={styles.searchBarArea}>
        <SearchBar />
      </div>
      <SearchedClanList searchedClanList={searchedClanList} />
      <div className={styles.listCursors}>
        {searchedClanList.paging.cursors.before && (
          <Link
            className={styles.cursor}
            href={`/clans?name=${searchParams.name}&before=${searchedClanList.paging.cursors.before}`}
          >
            이전
          </Link>
        )}
        {searchedClanList.paging.cursors.after && (
          <Link
            className={styles.cursor}
            href={`/clans?name=${searchParams.name}&after=${searchedClanList.paging.cursors.after}`}
          >
            다음
          </Link>
        )}
      </div>
    </main>
  );
}

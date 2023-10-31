import styles from './page.module.scss';
import SearchBar from '../../components/SearchBar';
import ClanNotFound from './_components/ClanNotFound';

export default async function Page() {
  return (
    <main className={styles.main}>
      <div className={styles.searchBarArea}>
        <SearchBar />
      </div>
      <ClanNotFound />
    </main>
  );
}

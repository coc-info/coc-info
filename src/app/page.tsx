import styles from './page.module.scss';

import LeaderBoard from './_components/LeaderBoard';
import SearchBar from './_components/SearchBar';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.tempLogo}>COC INFO</div>
      <div className={styles.searchBarArea}>
        <SearchBar />
      </div>
      <article className={styles.leaderBoardArea}>
        <LeaderBoard />
      </article>
    </main>
  );
}

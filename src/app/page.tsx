import styles from './page.module.scss';

import Image from 'next/image';
import LeaderBoard from '../components/LeaderBoard';
import SearchBar from '../components/SearchBar';

import logoLarge from '@/images/logo--large.png';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.logoArea}>
        <div className={styles.withBeta}>
          <Image alt="logo" src={logoLarge} height={60} />
          <div className={styles.beta}>
            <span>.BETA</span>
          </div>
        </div>
      </div>
      <div className={styles.searchBarArea}>
        <SearchBar />
      </div>
      <article className={styles.leaderBoardArea}>
        <LeaderBoard />
      </article>
    </main>
  );
}

import styles from './page.module.scss';

import Image from 'next/image';
import LeaderBoard from '../components/LeaderBoard';
import SearchBar from '../components/SearchBar';

import logo from '@/images/logo.png';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.tempLogo}>
        <Image alt="logo" src={logo} height={60} />
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

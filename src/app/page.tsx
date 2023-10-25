import Image from 'next/image';
import styles from './page.module.scss';

import searchIcon from '@/images/icons/search.svg';
import LeaderBoard from './_components/LeaderBoard';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.tempLogo}>COC INFO</div>
      <div className={styles.searchBarArea}>
        <div className={styles.searchBar}>
          <input placeholder="클랜이름 또는 태그로 검색" />
          <button>
            <Image alt="" src={searchIcon} />
          </button>
        </div>
      </div>
      <article className={styles.leaderBoardArea}>
        <LeaderBoard />
      </article>
    </main>
  );
}

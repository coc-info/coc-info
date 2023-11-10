import styles from './index.module.scss';

import ClanListItem from './ClanListItem.tsx';
import { SearchedClan } from '@/utils/coc-api/types';

// import Link from 'next/link';

interface SearchedClanListProps {
  clanList: SearchedClan[];
}

export default async function SearchedClanList({ clanList }: SearchedClanListProps) {
  return (
    <>
      {/* <Link href="/clans?name=혁명군&after=eyJwb3MiOjEwfQ">다음</Link> */}
      <ul className={styles.searchedClanList}>
        {clanList.map((clan) => {
          return <ClanListItem key={clan.tag} searchedClan={clan} />;
        })}
      </ul>
    </>
  );
}

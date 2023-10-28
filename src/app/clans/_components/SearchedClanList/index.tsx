import styles from './index.module.scss';

import ClanListItem from './ClanListItem.tsx';
import { SearchedClanInfo } from '@/utils/coc-api/searchClans';
// import Link from 'next/link';

interface SearchedClanListProps {
  clanList: SearchedClanInfo[];
}

export default async function SearchedClanList({ clanList }: SearchedClanListProps) {
  return (
    <>
      {/* <Link href="/clans?name=혁명군&after=eyJwb3MiOjEwfQ">다음</Link> */}
      <ul className={styles.searchedClanList}>
        {clanList.map((clan) => {
          return (
            <ClanListItem
              key={clan.tag}
              level={clan.clanLevel}
              badgeUrl={clan.badgeUrls.medium}
              name={clan.name}
              tag={clan.tag}
              members={clan.members}
              location={clan.location?.name ?? ''}
              labels={clan.labels}
            />
          );
        })}
      </ul>
    </>
  );
}

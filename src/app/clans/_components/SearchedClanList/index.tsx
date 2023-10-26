import styles from './index.module.scss';

import ClanListItem from './ClanListItem.tsx';
import { searchClans } from '@/utils/coc-api/searchClans';
// import Link from 'next/link';

export default async function SeachedClanList({ name, after }: { name: string; after?: string }) {
  const searchOptions = {
    name,
    after,
    limit: 10,
  };

  const [res, data] = await searchClans(searchOptions);

  return (
    <>
      {/* <Link href="/clans?name=혁명군&after=eyJwb3MiOjEwfQ">다음</Link> */}
      <ul className={styles.searchedClanList}>
        {data.items.map((item) => {
          return (
            <ClanListItem
              level={item.clanLevel}
              badgeUrl={item.badgeUrls.medium}
              name={item.name}
              tag={item.tag}
              members={item.members}
              location={item.location?.name ?? ''}
              labels={item.labels}
            />
          );
        })}
      </ul>
    </>
  );
}

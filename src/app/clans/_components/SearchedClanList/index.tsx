import styles from './index.module.scss';

import ClanListItem from '../ClanListItem.tsx';

interface ItemTempInterface {
  clanLevel: number;
  badgeUrls: { medium: string };
  name: string;
  tag: string;
  members: number;
  location?: { name: string };
  labels: [];
}

export default async function SeachedClanList({ name }: { name: string }) {
  const data = await fetch(`https://api.clashofclans.com/v1/clans?name=${name}&limit=10`, {
    headers: {
      Authorization: `Bearer ${process.env.COC_API_KEY}`,
    },
  }).then((res) => res.json());

  return (
    <ul className={styles.searchedClanList}>
      {data.items.map((item: ItemTempInterface) => {
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
  );
}

import Item from './Item';
import styles from './index.module.scss';

export default async function LeaderBoard() {
  const data = (await fetch('https://api.clashofclans.com/v1/locations/32000216/rankings/clans?limit=10', {
    headers: {
      Authorization: `Bearer ${process.env.COC_API_KEY}`,
    },
  }).then((res) => res.json())) as {
    items: {
      rank: number;
      clanLevel: number;
      badgeUrls: { small: string };
      name: string;
      members: number;
      clanPoints: number;
    }[];
  };

  return (
    <table className={styles.leaderBoard}>
      <thead>
        <tr className={styles.head}>
          <th>순위</th>
          <th>레벨</th>
          <th>클랜</th>
          <th>인원수</th>
          <th>점수</th>
        </tr>
      </thead>
      <tbody>
        {data.items.map((item) => {
          console.log(item);
          return (
            <Item
              rank={item.rank}
              level={item.clanLevel}
              badgeUrl={item.badgeUrls.small}
              clanName={item.name}
              members={item.members}
              trophies={item.clanPoints}
            />
          );
        })}
      </tbody>
    </table>
  );
}

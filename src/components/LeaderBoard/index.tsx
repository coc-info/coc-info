import { fetchLeaderboardOfClans } from '@/utils/coc-api/leaderboard';
import Item from './Item';
import styles from './index.module.scss';

export default async function LeaderBoard() {
  const [res, data] = await fetchLeaderboardOfClans({ limit: 20 });

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
          return (
            <Item
              key={item.tag}
              tag={item.tag}
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

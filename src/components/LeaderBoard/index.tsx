import Item from './Item';
import styles from './index.module.scss';
import { getClanRankings } from '@/utils/coc-api';
import { redirect } from 'next/navigation';

export default async function LeaderBoard() {
  const { data } = await getClanRankings({ limit: 20 });

  if (data === undefined) {
    redirect('/404');
  }

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
        {data.items?.map((item) => {
          return <Item key={item.tag} clanRaking={item} />;
        })}
      </tbody>
    </table>
  );
}

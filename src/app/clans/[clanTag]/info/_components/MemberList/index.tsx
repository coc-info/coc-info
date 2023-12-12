import styles from './index.module.scss';

import Member from './Member';

import { Player } from '@/utils/coc-api/types/player/Player';

interface MemberListProps {
  memberList: Player[];
}

export default async function MemberList({ memberList }: MemberListProps) {
  return (
    <table className={styles.leaderBoard}>
      <thead>
        <tr className={styles.head}>
          <th>순위</th>
          <th colSpan={2}>클랜원</th>
          <th>점수</th>
        </tr>
      </thead>
      <tbody>
        {memberList.map((member, i) => {
          return <Member key={member.tag} rank={i + 1} member={member} />;
        })}
      </tbody>
    </table>
  );
}

import { ClanMember } from '@/utils/coc-api/fetchClanInfo';
import styles from './index.module.scss';

import Member from './Member';

interface MemberListProps {
  memberList: ClanMember[];
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
        {memberList.map((member) => {
          return <Member key={member.tag} member={member} />;
        })}
      </tbody>
    </table>
  );
}

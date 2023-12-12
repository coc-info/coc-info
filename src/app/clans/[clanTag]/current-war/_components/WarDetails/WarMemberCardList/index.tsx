import styles from './index.module.scss';

import WarMemberCard from '../WarMemberCard';

import type { ClanWarMember } from '@/utils/coc-api/types';

interface WarMemberCardListProps {
  clanMembers: ClanWarMember[];
  opponentMembers: ClanWarMember[];
}

export default function WarMemberCardList({ clanMembers, opponentMembers }: WarMemberCardListProps) {
  const sortedClanMembers = [...clanMembers];
  sortedClanMembers.sort((a, b) => a.mapPosition - b.mapPosition);

  const sortedOpponentMembers = [...opponentMembers];
  sortedOpponentMembers.sort((a, b) => a.mapPosition - b.mapPosition);

  return (
    <ul className={styles.warMemberCardList}>
      {sortedClanMembers.map((member, i) => {
        const opponentMember = sortedOpponentMembers[i];
        return (
          <li key={i}>
            <WarMemberCard warMember={member} />
            <WarMemberCard warMember={opponentMember} reverse />
          </li>
        );
      })}
    </ul>
  );
}

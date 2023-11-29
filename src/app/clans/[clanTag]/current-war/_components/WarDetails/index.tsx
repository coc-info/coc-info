import styles from './index.module.scss';

import WarMemberCardList from './WarMemberCardList';

import type { ClanWarMember } from '@/utils/coc-api/types';

interface WarDetailsProps {
  clanMembers: ClanWarMember[];
  opponentMembers: ClanWarMember[];
}

export default async function WarDetails({ clanMembers, opponentMembers }: WarDetailsProps) {
  return (
    <div className={styles.warDetails}>
      <WarMemberCardList clanMembers={clanMembers} opponentMembers={opponentMembers} />
    </div>
  );
}

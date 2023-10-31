import styles from './index.module.scss';

import WarMemberCardList from './WarMemberCardList';

import type { WarMember } from '@/utils/coc-api/requester/types/WarMember';

interface WarDetailsProps {
  clanMembers: WarMember[];
  opponentMembers: WarMember[];
}

export default async function WarDetails({ clanMembers, opponentMembers }: WarDetailsProps) {
  return (
    <div className={styles.warDetails}>
      <WarMemberCardList clanMembers={clanMembers} opponentMembers={opponentMembers} />
    </div>
  );
}

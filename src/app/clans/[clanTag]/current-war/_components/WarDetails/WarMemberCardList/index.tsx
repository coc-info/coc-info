import styles from './index.module.scss';

import WarMemberCard from '../WarMemberCard';

import type { ClanWarMember } from '@/utils/coc-api/types/clan/war/ClanWarMember';

interface WarMemberCardListProps {
  clanMembers: ClanWarMember[];
  opponentMembers: ClanWarMember[];
}

interface MemberTable {
  [key: string]: {
    name: string;
    mapPosition: number;
  };
}
const createMembersTable = (members: ClanWarMember[]): MemberTable => {
  const membersTable = members.reduce<MemberTable>((table, member) => {
    const { name, tag, mapPosition } = member;
    return { ...table, [tag]: { name, mapPosition } };
  }, {});

  return membersTable;
};

const getSortedMembers = (members: ClanWarMember[]): ClanWarMember[] => {
  const sortedMembers = [...members];
  sortedMembers.sort((a, b) => a.mapPosition - b.mapPosition);
  return sortedMembers;
};

export default function WarMemberCardList({ clanMembers, opponentMembers }: WarMemberCardListProps) {
  const clanMembersTable = createMembersTable(clanMembers);

  const opponentMembersTable = createMembersTable(opponentMembers);

  const sortedClanMembers = getSortedMembers(clanMembers);

  const sortedOpponentMembers = getSortedMembers(opponentMembers);

  return (
    <ul className={styles.warMemberCardList}>
      {sortedClanMembers.map((member, i) => {
        const opponentMember = sortedOpponentMembers[i];

        const bestOpponentAttackOfMember = member.bestOpponentAttack && {
          ...member.bestOpponentAttack,
          attackerName: opponentMembersTable[member.bestOpponentAttack.attackerTag].name,
          attackerMapPosition: opponentMembersTable[member.bestOpponentAttack.attackerTag].mapPosition,
        };

        const bestOpponentAttackOfOpponentMember = opponentMember.bestOpponentAttack && {
          ...opponentMember.bestOpponentAttack,
          attackerName: clanMembersTable[opponentMember.bestOpponentAttack.attackerTag].name,
          attackerMapPosition: clanMembersTable[opponentMember.bestOpponentAttack.attackerTag].mapPosition,
        };

        return (
          <li key={i}>
            <WarMemberCard warMember={member} bestOpponentAttack={bestOpponentAttackOfMember} />
            <WarMemberCard warMember={opponentMember} bestOpponentAttack={bestOpponentAttackOfOpponentMember} reverse />
          </li>
        );
      })}
    </ul>
  );
}

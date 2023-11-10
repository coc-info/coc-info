import { fetchClanInfo } from '../requesters';
import { ClanWarMemberOnApi, fetchCurrentWarOfClan } from '../requesters/clans/fetchCurrentWarOfClan';
import { ClanWar } from '../requesters/types/ClanWar';

import { WarMember } from '../requesters/types/WarMember';

export async function getCurrentWarInfo(clanTag: string): Promise<ClanWar> {
  const [res, clanWarInfo] = await fetchCurrentWarOfClan(clanTag);
  const [{ data: clanInfo }, { data: opponentInfo }] = await Promise.all([
    fetchClanInfo(clanWarInfo.clan.tag),
    fetchClanInfo(clanWarInfo.opponent.tag),
  ]);

  const {
    state,
    teamSize,
    attacksPerMember,
    endTime,
    preparationStartTime,
    startTime,
    clan: _clan,
    opponent: _opponent,
  } = clanWarInfo;

  const [clanMembers, opponentMembers] = mapMemberLists(_clan.members, _opponent.members);

  return {
    state,
    teamSize,
    attacksPerMember,
    endTime,
    preparationStartTime,
    startTime,
    clan: {
      ..._clan,
      location: clanInfo?.location,
      members: clanMembers,
    },
    opponent: {
      ..._opponent,
      location: opponentInfo?.location,
      members: opponentMembers,
    },
  };
}

function mapMemberLists(
  clanMembers: ClanWarMemberOnApi[],
  opponentMembers: ClanWarMemberOnApi[]
): [WarMember[], WarMember[]] {
  const clanMembersTable = new Map<string, { name: string; mapPosition: number }>();
  const opponentMembersTable = new Map<string, { name: string; mapPosition: number }>();

  clanMembers.forEach((member) => {
    clanMembersTable.set(member.tag, { name: member.name, mapPosition: member.mapPosition });
  });

  opponentMembers.forEach((member) => {
    opponentMembersTable.set(member.tag, { name: member.name, mapPosition: member.mapPosition });
  });

  const createMapper = (aginst: Map<string, { name: string; mapPosition: number }>) => {
    return (member: ClanWarMemberOnApi) => {
      const { bestOpponentAttack } = member;

      const attackerName = aginst.get(bestOpponentAttack?.attackerTag ?? '')?.name;
      const attackerMapPosition = aginst.get(bestOpponentAttack?.attackerTag ?? '')?.mapPosition;
      return {
        ...member,
        bestOpponentAttack: bestOpponentAttack && {
          order: bestOpponentAttack.order,
          attackerTag: bestOpponentAttack.attackerTag,
          attackerName: attackerName ?? '',
          attackerMapPosition: attackerMapPosition ?? 0,
          stars: bestOpponentAttack.stars,
          destructionPercentage: bestOpponentAttack.destructionPercentage,
        },
      };
    };
  };
  const mappedClan = clanMembers.map(createMapper(opponentMembersTable));
  const mappedOpponent = opponentMembers.map(createMapper(clanMembersTable));

  return [mappedClan, mappedOpponent];
}

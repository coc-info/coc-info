import { fetchClanInfo } from '../requesters';
import { fetchCurrentWar } from '../requesters/clans/fetchCurrentWar';

import { ClanWar, ClanWarNotIn } from '../types/clan/war/ClanWar';
import { ClanWarMember } from '../types';

import { ClanWarMemberOnApi } from '../requesters/types';
import { ApiResult } from '../types/ApiResult';

export async function getCurrentWarInfo(clanTag: string): Promise<ApiResult<ClanWar | ClanWarNotIn>> {
  const { response, data: clanWarInfo } = await fetchCurrentWar(clanTag);
  if (clanWarInfo === undefined) {
    return {} as ApiResult<ClanWar | ClanWarNotIn>;
  }

  if (clanWarInfo.state === 'notInWar') {
    return {} as ApiResult<ClanWar | ClanWarNotIn>;
  }

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
): [ClanWarMember[], ClanWarMember[]] {
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

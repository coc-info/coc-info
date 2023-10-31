import WarSummary from './_components/WarSummary';
import styles from './page.module.scss';
import { fetchClanInfo } from '@/utils/coc-api/fetchClanInfo';
import WarDetails from './_components/WarDetails';
import getCurrentWarInfo from '@/utils/coc-api/requester/getCurrentWarInfo';

import type { ClanWar } from '@/utils/coc-api/requester/types/ClanWar';
import { redirect } from 'next/navigation';

export default async function Page({ params }: { params: { clanTag: string } }) {
  let warData: ClanWar;
  try {
    warData = await getCurrentWarInfo(decodeURIComponent(params.clanTag));
  } catch (e) {
    console.log(e);
    redirect('./private-warlog');
  }

  if (warData.state === 'notInWar') {
    redirect('./current-war/not-in-war');
  }
  const [[, clanInfo], [, opponentInfo]] = await Promise.all([
    fetchClanInfo(warData.clan.tag),
    fetchClanInfo(warData.opponent.tag),
  ]);
  return (
    <main className={styles.main}>
      <section className={styles.contentsArea}>
        <WarSummary
          state={warData.state}
          startTime={warData.startTime}
          endTime={warData.endTime}
          teamSize={warData.teamSize}
          attacksPerMember={warData.attacksPerMember}
          leftClan={{
            tag: warData.clan.tag,
            name: warData.clan.name,
            badgeUrl: warData.clan.badgeUrls.small,
            attacks: warData.clan.attacks,
            stars: warData.clan.stars,
            destructionPercetage: warData.clan.destructionPercentage,
            location: clanInfo.location?.name,
          }}
          rightClan={{
            tag: warData.opponent.tag,
            name: warData.opponent.name,
            badgeUrl: warData.opponent.badgeUrls.small,
            attacks: warData.opponent.attacks,
            stars: warData.opponent.stars,
            destructionPercetage: warData.opponent.destructionPercentage,
            location: opponentInfo.location?.name,
          }}
        />
        <WarDetails clanMembers={warData.clan.members} opponentMembers={warData.opponent.members} />
      </section>
    </main>
  );
}

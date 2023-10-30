import { fetchCurrentWarOfClan } from '@/utils/coc-api/fetchCurrentWarOfClan';
import { WarSummary } from './_components/WarSummary';
import styles from './page.module.scss';
import { fetchClanInfo } from '@/utils/coc-api/fetchClanInfo';

export default async function Page({ params }: { params: { clanTag: string } }) {
  const [, warData] = await fetchCurrentWarOfClan(decodeURIComponent(params.clanTag));
  const [[, clanInfo], [, opponentInfo]] = await Promise.all([
    fetchClanInfo(warData.clan.tag),
    fetchClanInfo(warData.opponent.tag),
  ]);
  return (
    <main className={styles.main}>
      <section className={styles.contentsArea}>
        {warData.state === 'notInWar' ? (
          <>비공개</>
        ) : (
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
        )}
      </section>
    </main>
  );
}

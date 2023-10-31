import styles from './page.module.scss';

import Summary from './_components/Summary';
import Scores from './_components/Scores';
import WarRecords from './_components/WarRecords';
import JoiningRequirements from './_components/JoiningRequirements';
import Activities from './_components/Activities';
import MemberList from './_components/MemberList';
import { fetchClanInfo } from '@/utils/coc-api/fetchClanInfo';
import { fetchClanWarLog } from '@/utils/coc-api/fetchClanWarLog';
import WarLogPrivate from './_components/WarLogPrivate';
import { fetchPlayerInfos } from '@/utils/coc-api/fetchPlayerInfos';
import { redirect } from 'next/navigation';

export default async function Page({ params }: { params: { clanTag: string } }) {
  const clanTag = decodeURIComponent(params.clanTag);

  const [clanInfoRes, clanInfo] = await fetchClanInfo(clanTag);
  if (clanInfoRes.status !== 200) {
    redirect('/clan-not-found');
  }

  const [warLogRes, warLog] = await fetchClanWarLog(clanTag, { limit: 20 });

  //map war log
  let results: ('win' | 'tie' | 'lose')[] = [];
  if (warLogRes.status === 200) {
    results = warLog.items.reduce<('win' | 'tie' | 'lose')[]>((results, item) => {
      if (item.result === null) return results;
      return [...results, item.result];
    }, []);
  }

  const recentRecords = results.slice(0, 10);
  recentRecords.reverse();

  //calc tatal donations
  const [donations, donationsReceived] = clanInfo.memberList.reduce(
    (acc, member) => {
      const { donations, donationsReceived } = member;
      return [donations + acc[0], donationsReceived + acc[1]];
    },
    [0, 0]
  );

  //map player
  const sotedMemberList = [...clanInfo.memberList];
  sotedMemberList.sort((a, b) => a.clanRank - b.clanRank);

  const playerTagList = sotedMemberList.map((member) => {
    return member.tag;
  });

  const playerInfos = (await fetchPlayerInfos(playerTagList)).map(([, playerInfo]) => playerInfo);

  return (
    <main className={styles.main}>
      <div className={styles.contentsArea}>
        <Summary
          badgeUrl={clanInfo.badgeUrls.medium}
          name={clanInfo.name}
          tag={clanTag}
          members={clanInfo.members}
          location={clanInfo.location?.name}
        />
        <Scores
          warLeagueId={clanInfo.warLeague.id}
          tropies={clanInfo.clanPoints}
          builderTropies={clanInfo.clanBuilderBasePoints}
          capitalTropies={clanInfo.clanCapitalPoints}
        />
        {clanInfo.isWarLogPublic ? (
          <WarRecords
            wins={clanInfo.warWins}
            losses={clanInfo.warLosses}
            ties={clanInfo.warTies}
            winStreak={clanInfo.warWinStreak}
            recentRecords={recentRecords}
          />
        ) : (
          <WarLogPrivate wins={clanInfo.warWins} winStreak={clanInfo.warWinStreak} />
        )}

        <JoiningRequirements
          type={clanInfo.type}
          requiredTownhallLevel={clanInfo.requiredTownhallLevel}
          trophies={clanInfo.requiredTrophies}
          builderBaseTrophies={clanInfo.requiredBuilderBaseTrophies}
        />
        <Activities donations={donations} donationsReceived={donationsReceived} labels={clanInfo.labels} />
        <MemberList memberList={playerInfos} />
      </div>
    </main>
  );
}

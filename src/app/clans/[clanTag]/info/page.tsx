import styles from './page.module.scss';

import Summary from './_components/Summary';
import Scores from './_components/Scores';
import WarRecords from './_components/WarRecords';
import JoiningRequirements from './_components/JoiningRequirements';
import Activities from './_components/Activities';
import MemberList from './_components/MemberList';
import WarLogPrivate from './_components/WarLogPrivate';

import { getClan, getClanWarLog, getPlayer } from '@/utils/coc-api';
import { redirect } from 'next/navigation';

export default async function Page({ params }: { params: { clanTag: string } }) {
  const clanTag = decodeURIComponent(params.clanTag);

  const { response, data: clanInfo } = await getClan({ tag: clanTag });

  if (response.status !== 200 || clanInfo === undefined) {
    redirect('/clan-not-found');
  }

  const { response: warLogRes, data: warLog } = await getClanWarLog({ clanTag, limit: 20 });

  if (warLogRes.status !== 200 || warLog === undefined) {
    redirect('/500');
  }
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
  const sortedMemberList = [...clanInfo.memberList];
  sortedMemberList.sort((a, b) => a.clanRank - b.clanRank);

  const playerTagList = sortedMemberList.map((member) => {
    return member.tag;
  });

  const playersResList = await Promise.all(
    playerTagList.map((playerTag) => {
      return getPlayer({ tag: playerTag });
    })
  );

  const players = playersResList.map(({ data: player }) => {
    if (player === undefined) redirect('500');
    return player;
  });

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
            losses={clanInfo.warLosses ?? 0}
            ties={clanInfo.warTies ?? 0}
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
        <MemberList memberList={players} />
      </div>
    </main>
  );
}

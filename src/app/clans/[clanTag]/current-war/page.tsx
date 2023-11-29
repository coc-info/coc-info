import WarSummary from './_components/WarSummary';
import styles from './page.module.scss';
import WarDetails from './_components/WarDetails';

import { getClanInfo, getCurrentWarInfo } from '@/utils/coc-api';

import type { ClanWar } from '@/utils/coc-api/types/clan/war/ClanWar';
import { redirect } from 'next/navigation';

import { requestCurrentWar } from '@/utils/coc-api/src/requesters/src/requesters/clans/requestCurrentWar';

export default async function Page({ params }: { params: { clanTag: string } }) {
  const result = await requestCurrentWar({ clanTag: decodeURIComponent(params.clanTag) });
  const { res, data: currentWar } = result;
  if (currentWar === undefined) {
    redirect('./private-warlog');
  }

  if (currentWar.state === 'notInWar') {
    redirect('./current-war/not-in-war');
  }

  const [{ data: clanInfo }, { data: opponentInfo }] = await Promise.all([
    getClanInfo(currentWar.clan.tag),
    getClanInfo(currentWar.opponent.tag),
  ]);
  return (
    <main className={styles.main}>
      <section className={styles.contentsArea}>
        <WarSummary clanWar={currentWar} />
        <WarDetails clanMembers={currentWar.clan.members} opponentMembers={currentWar.opponent.members} />
      </section>
    </main>
  );
}

import WarSummary from './_components/WarSummary';
import styles from './page.module.scss';
import WarDetails from './_components/WarDetails';

import { getCurrentWar, getClan } from '@/utils/coc-api';
import { redirect } from 'next/navigation';

export default async function Page({ params }: { params: { clanTag: string } }) {
  const clanTag = decodeURIComponent(params.clanTag);
  const result = await getCurrentWar({ tag: clanTag });
  const { data: currentWar } = result;
  if (currentWar === undefined) {
    redirect('./private-warlog');
  }

  if (currentWar.state === 'notInWar') {
    redirect('./current-war/not-in-war');
  }

  const [{ data: clan }, { data: opponent }] = await Promise.all([
    getClan({ tag: currentWar.clan.tag }),
    getClan({ tag: currentWar.opponent.tag }),
  ]);

  if (clan === undefined || opponent === undefined) {
    redirect('/500');
  }

  return (
    <main className={styles.main}>
      <section className={styles.contentsArea}>
        <WarSummary clanWar={currentWar} locations={{ clan: clan.location }} />
        <WarDetails clanMembers={currentWar.clan.members} opponentMembers={currentWar.opponent.members} />
      </section>
    </main>
  );
}

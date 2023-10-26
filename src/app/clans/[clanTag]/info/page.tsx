import styles from './page.module.scss';

import Summary from './_components/Summary';
import Scores from './_components/Scores';
import WarRecords from './_components/WarRecords';
import JoiningRequirements from './_components/JoiningRequirements';
import Activities from './_components/Activities';

export default function Page({ params }: { params: { clanTag: string } }) {
  const clanTag = decodeURIComponent(params.clanTag);

  return (
    <main className={styles.main}>
      <div className={styles.contentsArea}>
        <Summary
          badgeUrl="https://api-assets.clashofclans.com/badges/512/ZpFNZzhXMH0Ea3-8nXAnQFGaPcznRuhwa4R8x2dCXfA.png"
          name="혁명군"
          tag={clanTag}
          members={30}
          location="South Korea"
        />
        <Scores league="crystal3" tropies={26814} builderTropies={25767} capitalTropies={2623} />
        <WarRecords
          wins={103}
          losses={86}
          ties={1}
          winStreak={3}
          recentRecords={['win', 'lose', 'tie', 'lose', 'win', 'win', 'lose', 'win', 'win', 'win']}
        />
        <JoiningRequirements type="inviteOnly" requiredTownhallLevel={10} trophies={1200} builderBaseTrophies={0} />
        <Activities />
      </div>
    </main>
  );
}

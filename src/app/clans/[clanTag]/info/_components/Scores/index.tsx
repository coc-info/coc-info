import Trophy from '@/components/images/Trophy';
import styles from './index.module.scss';

import WarLeagueBadge from '@/components/images/badges/WarLeagueBadge';

import type { WarLeague } from '@/types/warLeague';

interface ScoresProps {
  league: WarLeague;
  tropies: number;
  builderTropies: number;
  capitalTropies: number;
}

export default function Scores({ league, tropies, builderTropies, capitalTropies }: ScoresProps) {
  const LEAGUE_KR_TABLE = {
    bronze1: '브론즈 리그 1',
    bronze2: '브론즈 리그 2',
    bronze3: '브론즈 리그 3',
    silver1: '실버 리그 1',
    silver2: '실버 리그 2',
    silver3: '실버 리그 3',
    gold1: '골드 리그 1',
    gold2: '골드 리그 2',
    gold3: '골드 리그 3',
    crystal1: '크리스탈 리그 1',
    crystal2: '크리스탈 리그 2',
    crystal3: '크리스탈 리그 3',
    master1: '마스터 리그 1',
    master2: '마스터 리그 2',
    master3: '마스터 리그 3',
    champion1: '챔피언 리그 1',
    champion2: '챔피언 리그 2',
    champion3: '챔피언 리그 3',
  } as const;
  return (
    <div className={styles.scores}>
      <div className={styles.leagueTrophy}>
        <WarLeagueBadge league={league} height={24} />
        <span className={styles.leagueName}>{LEAGUE_KR_TABLE[league]}</span>
      </div>

      <div className={styles.trophiesContainer}>
        <div className={styles.trophies}>
          <Trophy trophyType="home" />
          <span className={styles.score}>{tropies}</span>
        </div>
        <div className={styles.trophies}>
          <Trophy trophyType="builder" />
          <span className={styles.score}>{builderTropies}</span>
        </div>

        <div className={styles.trophies}>
          <Trophy trophyType="capital" />
          <span className={styles.score}>{capitalTropies}</span>
        </div>
      </div>
    </div>
  );
}

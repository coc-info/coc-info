import Trophy from '@/components/images/Trophy';
import styles from './index.module.scss';

import WarLeagueBadge from '@/components/images/badges/WarLeagueBadge';
import { WarLeague } from '@/utils/coc-api/types/leagues/WarLeague';

const LEAGUE_KR_TABLE: { [key: number]: { name: string } } = {
  48000000: {
    name: '리그 없음',
  },
  48000001: {
    name: '브론즈 리그 3',
  },
  48000002: {
    name: '브론즈 리그 2',
  },
  48000003: {
    name: '브론즈 리그 1',
  },
  48000004: {
    name: '실버 리그 3',
  },
  48000005: {
    name: '실버 리그 2',
  },
  48000006: {
    name: '실버 리그 1',
  },
  48000007: {
    name: '골드 리그 3',
  },
  48000008: {
    name: '골드 리그 2',
  },
  48000009: {
    name: '골드 리그 1',
  },
  48000010: {
    name: '크리스탈 리그 3',
  },
  48000011: {
    name: '크리스탈 리그 2',
  },
  48000012: {
    name: '크리스탈 리그 1',
  },
  48000013: {
    name: '마스터 리그 3',
  },
  48000014: {
    name: '마스터 리그 2',
  },
  48000015: {
    name: '마스터 리그 1',
  },
  48000016: {
    name: '챔피언 리그 3',
  },
  48000017: {
    name: '챔피언 리그 2',
  },
  48000018: {
    name: '챔피언 리그 1',
  },
} as const;

interface ScoresProps {
  warLeague: WarLeague;
  tropies: number;
  builderTropies: number;
  capitalTropies: number;
}

export default function Scores({ warLeague, tropies, builderTropies, capitalTropies }: ScoresProps) {
  return (
    <div className={styles.scores}>
      <div className={styles.leagueTrophy}>
        {warLeague.id !== 48000000 && <WarLeagueBadge league={warLeague} height={24} />}
        <span className={styles.leagueName}>{LEAGUE_KR_TABLE[warLeague.id].name}</span>
      </div>

      <div className={styles.trophiesContainer}>
        <div className={styles.trophies}>
          <Trophy trophyType="home" />
          <span className={styles.score}>{tropies.toLocaleString()}</span>
        </div>
        <div className={styles.trophies}>
          <Trophy trophyType="builder" />
          <span className={styles.score}>{builderTropies.toLocaleString()}</span>
        </div>

        <div className={styles.trophies}>
          <Trophy trophyType="capital" />
          <span className={styles.score}>{capitalTropies.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
}

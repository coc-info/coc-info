import styles from './index.module.scss';
import Image from 'next/image';

import trophy from '@/images/game-images/icons/trophies/trophy.png';
import builderTrophy from '@/images/game-images/icons/trophies/builder-trophy.png';
import capital from '@/images/game-images/icons/trophies/capital-trophy.png';

interface TrophyProps {
  trophyType: 'home' | 'builder' | 'capital';
}

export default function Trophy({ trophyType }: TrophyProps) {
  const TROPHY_TABLE = {
    home: trophy,
    builder: builderTrophy,
    capital: capital,
  };

  return (
    <div className={styles.badgeWrapper}>
      <Image alt="클랜전 리그 뱃지" src={TROPHY_TABLE[trophyType]} />
    </div>
  );
}

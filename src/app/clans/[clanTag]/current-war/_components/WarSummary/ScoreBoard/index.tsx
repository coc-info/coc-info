import styles from './index.module.scss';

import starIcon from '@/images/icons/star--fill.svg';
import destructionIcon from '@/images/icons/destruction.svg';
import Image from 'next/image';
import { WarClan } from '@/utils/coc-api/types/clan/war/WarClan';

interface ScoreBoardProps {
  clan: WarClan;
  opponent: WarClan;
}

export default function ScoreBoard({ clan, opponent }: ScoreBoardProps) {
  const round = (percentage: number) => {
    if (percentage === 0) return 0;
    return Math.round(percentage * 100) / 100;
  };

  return (
    <div className={styles.scoreBoard}>
      {/*star*/}
      <div className={`${styles.leftTeam} ${styles.stars}`}>{clan.stars}</div>
      <Image alt="star-icon" src={starIcon} width={24} height={24} />
      <div className={`${styles.rightTeam} ${styles.stars}`}>{opponent.stars}</div>

      {/*destruction*/}
      <div className={`${styles.leftTeam} ${styles.destruction}`}>{round(clan.destructionPercentage)}%</div>
      <Image alt="star-icon" src={destructionIcon} width={20} height={20} />
      <div className={`${styles.rightTeam} ${styles.destruction}`}>{round(opponent.destructionPercentage)}%</div>
    </div>
  );
}

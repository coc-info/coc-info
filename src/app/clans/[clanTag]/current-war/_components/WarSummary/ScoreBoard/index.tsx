import styles from './index.module.scss';

import starIcon from '@/images/icons/star--fill.svg';
import destructionIcon from '@/images/icons/destruction.svg';
import Image from 'next/image';

interface ScoreBoardProps {
  leftTeam: {
    stars: number;
    destructionPercentage: number;
  };

  rightTeam: {
    stars: number;
    destructionPercentage: number;
  };
}

export function ScoreBoard({ leftTeam, rightTeam }: ScoreBoardProps) {
  const round = (percentage: number) => {
    if (percentage === 0) return 0;
    return Math.round(percentage * 100) / 100;
  };

  return (
    <div className={styles.scoreBoard}>
      {/*star*/}
      <div className={`${styles.leftTeam} ${styles.stars}`}>{leftTeam.stars}</div>
      <Image alt="star-icon" src={starIcon} width={24} height={24} />
      <div className={`${styles.rightTeam} ${styles.stars}`}>{rightTeam.stars}</div>

      {/*destruction*/}
      <div className={`${styles.leftTeam} ${styles.destruction}`}>{round(leftTeam.destructionPercentage)}%</div>
      <Image alt="star-icon" src={destructionIcon} width={20} height={20} />
      <div className={`${styles.rightTeam} ${styles.destruction}`}>{round(rightTeam.destructionPercentage)}%</div>
    </div>
  );
}

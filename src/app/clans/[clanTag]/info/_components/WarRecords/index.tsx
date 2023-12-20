import Image from 'next/image';
import styles from './index.module.scss';

import checkIcon from '@/images/icons/check.svg';
import xIcon from '@/images/icons/x.svg';
import hyphenIcon from '@/images/icons/hyphen.svg';

interface WarRecordsProps {
  wins: number;
  losses: number;
  ties: number;
  winStreak: number;
  recentRecords: ('win' | 'lose' | 'tie')[];
}

export default function WarRecords({ wins, losses, ties, winStreak, recentRecords }: WarRecordsProps) {
  const winRate = wins !== 0 ? (wins / (wins + losses + ties)) * 100 : 0;
  const RoundedWinRate = Math.round(winRate * 100) / 100;

  return (
    <div className={styles.warRecords}>
      {/*top*/}
      <div className={styles.top}>
        <div className={styles.left}>
          <div className={styles.warRecord}>{wins}승</div>
          <div className={styles.warRecord}>{losses}패</div>
          <div className={styles.warRecord}>{ties}무</div>
          <div className={styles.warRecord}>승률 {RoundedWinRate}%</div>
        </div>
      </div>
      {/*bottom*/}
      <div className={styles.bottom}>
        <div className={styles.left}>
          <div className={styles.warRecord}>{winStreak}연승</div>
          <div className={styles.recordsBoard}>
            {recentRecords.map((result) => {
              switch (result) {
                case 'win':
                  return (
                    <div className={`${styles.recordContainer} ${styles.win}`}>
                      <div className={`${styles.record} ${styles.win}`}>
                        <Image alt="checkIcon" src={checkIcon} width={11} height={11} />
                      </div>
                    </div>
                  );
                case 'lose':
                  return (
                    <div className={`${styles.recordContainer} ${styles.lose}`}>
                      <div className={`${styles.record} ${styles.lose}`}>
                        <Image alt="closeIcon" src={xIcon} width={11} height={11} />
                      </div>
                    </div>
                  );
                case 'tie':
                  return (
                    <div className={styles.recordContainer}>
                      <div className={styles.record}>
                        <Image alt="hyphenIcon" src={hyphenIcon} width={11} height={11} />
                      </div>
                    </div>
                  );
              }
            })}
          </div>
        </div>
        {/* <button className={styles.moreDetails}>전적 자세히</button> */}
      </div>
    </div>
  );
}

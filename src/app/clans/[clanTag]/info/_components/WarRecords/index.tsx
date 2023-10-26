import styles from './index.module.scss';

interface WarRecordsProps {
  wins: number;
  losses: number;
  ties: number;
  winStreak: number;
  recentRecords: ('win' | 'lose' | 'tie')[];
}

export default function WarRecords({ wins, losses, ties, winStreak, recentRecords }: WarRecordsProps) {
  return (
    <div className={styles.warRecords}>
      {/*top*/}
      <div className={styles.top}>
        <div className={styles.left}>
          <div className={styles.warRecord}>{wins}승</div>
          <div className={styles.warRecord}>{losses}패</div>
          <div className={styles.warRecord}>{ties}무</div>
        </div>
        <div className={styles.warRecord}>승률 58.62%</div>
      </div>
      {/*bottom*/}
      <div className={styles.bottom}>
        <div className={styles.left}>
          <div className={styles.warRecord}>{winStreak}연승</div>
          <div className={styles.recordsBoard}>
            {recentRecords.map((result) => {
              switch (result) {
                case 'win':
                  return <div className={`${styles.record} ${styles.win}`}></div>;
                case 'lose':
                  return <div className={`${styles.record} ${styles.lose}`}></div>;
                case 'tie':
                  return <div className={`${styles.record}`}></div>;
              }
            })}
          </div>
        </div>
        <button className={styles.moreDetails}>전적 자세히</button>
      </div>
    </div>
  );
}

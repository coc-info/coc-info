import Image from 'next/image';
import styles from './index.module.scss';

import stopIcon from '@/images/icons/stop.svg';

interface WarLogPrivateProps {
  wins: number;
  winStreak: number;
}

export default function WarLogPrivate({ wins, winStreak }: WarLogPrivateProps) {
  return (
    <div className={styles.warRecords}>
      {/*top*/}
      <div className={styles.top}>
        <div className={styles.warRecord}>{wins}승</div>
        <div className={styles.warRecord}>{winStreak}연승</div>
      </div>
      {/*bottom*/}
      <div className={styles.bottom}>
        <Image alt={'stop-icon'} src={stopIcon} width={20} height={20} />
        <span>전쟁기록 비공개</span>
      </div>
    </div>
  );
}

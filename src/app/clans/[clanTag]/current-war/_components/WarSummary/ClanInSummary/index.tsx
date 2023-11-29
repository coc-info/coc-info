import styles from './index.module.scss';

import Image from 'next/image';
import earthIcon from '@/images/icons/earth.svg';
import { WarClan } from '@/utils/coc-api/types';

interface ClanInSummaryProps {
  clan: WarClan;
}

export function ClanInSummary({ clan }: ClanInSummaryProps) {
  const { badgeUrls, name } = clan;
  return (
    <div className={styles.clanInSummary}>
      <div className={styles.badgeWrapper}>
        <Image alt="badge" src={badgeUrls.small} width={48} height={48} />
      </div>
      <div className={styles.clanInfo}>
        <div className={styles.clanName}>{name}</div>

        <div className={styles.location}>
          <Image alt="earth-icon" src={earthIcon} width={15} height={15} />
          <span>Temp Location</span>
        </div>
      </div>
    </div>
  );
}

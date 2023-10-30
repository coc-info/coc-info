import styles from './index.module.scss';

import Image from 'next/image';
import earthIcon from '@/images/icons/earth.svg';

interface ClanInSummaryProps {
  badgeUrl: string;
  name: string;
  location?: string;
}

export function ClanInSummary({ badgeUrl, name, location }: ClanInSummaryProps) {
  return (
    <div className={styles.clanInSummary}>
      <div className={styles.badgeWrapper}>
        <Image alt="badge" src={badgeUrl} width={48} height={48} />
      </div>
      <div className={styles.clanInfo}>
        <div className={styles.clanName}>{name}</div>
        {location !== undefined && (
          <div className={styles.location}>
            <Image alt="earth-icon" src={earthIcon} width={15} height={15} />
            <span>{location}</span>
          </div>
        )}
      </div>
    </div>
  );
}

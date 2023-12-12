import styles from './index.module.scss';

import Image from 'next/image';
import earthIcon from '@/images/icons/earth.svg';
import { WarClan } from '@/utils/coc-api/types/clan/war/WarClan';
import { Location } from '@/utils/coc-api/types/location/Location';

interface ClanInSummaryProps {
  clan: WarClan;
  location?: Location;
}

export function ClanInSummary({ clan, location }: ClanInSummaryProps) {
  const { badgeUrls, name } = clan;
  return (
    <div className={styles.clanInSummary}>
      <div className={styles.badgeWrapper}>
        <Image alt="badge" src={badgeUrls.small} width={48} height={48} />
      </div>
      <div className={styles.clanInfo}>
        <div className={styles.clanName}>{name}</div>
        <div className={styles.location}>
          {location && (
            <>
              <Image alt="earth-icon" src={earthIcon} width={15} height={15} />
              <span>{location.name}</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

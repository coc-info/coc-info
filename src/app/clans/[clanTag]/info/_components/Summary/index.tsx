import styles from './index.module.scss';

import ClanBadge from '@/components/images/badges/ClanBadge';

interface SummaryProps {
  badgeUrl: string;
  name: string;
  tag: string;
  members: number;
  location: string;
}

export default function Summary({ badgeUrl, name, tag, members, location }: SummaryProps) {
  return (
    <div className={styles.summary}>
      <ClanBadge name={name} url={badgeUrl} size="large" />
      <div className={styles.basicInfo}>
        <div className={styles.clanIdentity}>
          <h2 className={styles.clanName}>{name}</h2>
          <div className={styles.clanTag}>{tag}</div>
        </div>
        <div className={styles.restInfo}>
          <div className={styles.members}>{members}</div>
          <div className={styles.location}>{location}</div>
        </div>
      </div>
    </div>
  );
}

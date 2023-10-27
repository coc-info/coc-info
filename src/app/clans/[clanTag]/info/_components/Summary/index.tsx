import styles from './index.module.scss';

import ClanBadge from '@/components/images/badges/ClanBadge';

import peopleIcon from '@/images/icons/people-icon.svg';
import earthIcon from '@/images/icons/earth.svg';
import Image from 'next/image';

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
        <div className={styles.restInfos}>
          <div className={styles.restInfo}>
            <Image alt="people-icon" src={peopleIcon} height={15} />
            <span>{members}</span>
          </div>
          <div className={styles.restInfo}>
            <Image alt="earth-icon" src={earthIcon} height={15} />
            <span>{location}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

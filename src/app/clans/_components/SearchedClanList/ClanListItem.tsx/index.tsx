import styles from './index.module.scss';

import Image from 'next/image';

import Label from '@/components/images/Label';
import ClanBadge from '@/components/images/badges/ClanBadge';

import peopleIcon from '@/images/icons/people-icon.svg';
import earthIcon from '@/images/icons/earth.svg';
import Link from 'next/link';

interface ClanListItemProps {
  level: number;
  badgeUrl: string;
  name: string;
  tag: string;
  members: number;
  location: string;
  labels: {
    name: string;
    iconUrls: {
      small: string;
    };
  }[];
}

export default function ClanListItem({ level, badgeUrl, name, tag, members, location, labels }: ClanListItemProps) {
  return (
    <li className={styles.clanListItem}>
      <Link className={styles.link} href={`/clans/${encodeURIComponent(tag)}/info`}>
        <div className={styles.clanInfo}>
          <div className={styles.level}>Lv.{level}</div>
          <div className={styles.rightInfo}>
            <ClanBadge name="" url={badgeUrl} />
            <div>
              <div className={styles.clanIdentity}>
                <div className={styles.clanName}>{name}</div>
                <div className={styles.clanTag}>{tag}</div>
              </div>
              <div className={styles.restInfo}>
                <div className={styles.members}>
                  <Image alt="people-icon" src={peopleIcon} width={12} height={12} />
                  {members}
                </div>
                {location === '' || (
                  <div className={styles.location}>
                    <Image alt="earth-icon" src={earthIcon} width={12} height={12} />
                    {location}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.labelContainer}>
          {labels.map((label) => {
            return <Label name={label.name} url={label.iconUrls.small} />;
          })}
        </div>
      </Link>
    </li>
  );
}

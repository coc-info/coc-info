import styles from './index.module.scss';

import Image from 'next/image';

import Label from '@/components/images/Label';
import ClanBadge from '@/components/images/badges/ClanBadge';

import peopleIcon from '@/images/icons/people-icon.svg';
import earthIcon from '@/images/icons/earth.svg';
import Link from 'next/link';

import { SearchedClan } from '@/utils/coc-api/types/clan/SearchedClan';

interface ClanListItemProps {
  searchedClan: SearchedClan;
}

export default function ClanListItem({ searchedClan }: ClanListItemProps) {
  const { clanLevel, badgeUrls, name, tag, members, location, labels } = searchedClan;
  return (
    <li className={styles.clanListItem}>
      <Link className={styles.link} href={`/clans/${encodeURIComponent(tag)}/info`}>
        <div className={styles.clanInfo}>
          <div className={styles.level}>Lv.{clanLevel}</div>
          <div className={styles.rightInfo}>
            <ClanBadge name="" url={badgeUrls.medium} />
            <div>
              <div className={styles.clanIdentity}>
                <div className={styles.clanName}>{name}</div>
                <div className={styles.clanTag}>{tag}</div>
              </div>
              <div className={styles.restInfo}>
                <div className={styles.members}>
                  <Image alt="people-icon" src={peopleIcon} width={15} height={15} />
                  {members}
                </div>
                {location !== undefined || (
                  <div className={styles.location}>
                    <Image alt="earth-icon" src={earthIcon} width={15} height={15} />
                    {location}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.labelContainer}>
          {labels.map((label) => {
            return <Label key={label.name} name={label.name} url={label.iconUrls.small} />;
          })}
        </div>
      </Link>
    </li>
  );
}

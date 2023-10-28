import Image from 'next/image';
import styles from './index.module.scss';

import warriorPositive from '@/images/icons/warrior-positive.svg';
import warriorNegative from '@/images/icons/warrior-negative.svg';

interface ActivitiesProps {
  donations: number;
  donationsReceived: number;
  labels: {
    id: number;
    name: string;
    iconUrls: {
      small: string;
      medium: string;
    };
  }[];
}

export default function Activities({ donations, donationsReceived, labels }: ActivitiesProps) {
  return (
    <div className={styles.activities}>
      <div className={styles.labels}>
        {labels.map((label) => {
          return <Image alt={label.name} src={label.iconUrls.small} width={30} height={30} />;
        })}
      </div>
      <div className={styles.reinforcements}>
        <Image alt="arrow-positive" src={warriorPositive} width={20} height={20} />
        <span>{donations.toLocaleString()}</span>
      </div>
      <div className={styles.reinforcements}>
        <Image alt="arrow-negative" src={warriorNegative} width={20} height={20} />
        <span>{donationsReceived.toLocaleString()}</span>
      </div>
    </div>
  );
}

import Image from 'next/image';
import styles from './index.module.scss';

import arrowPositive from '@/images/icons/arrow-positive.svg';
import arrowNegative from '@/images/icons/arrow-negative.svg';

export default function Activities() {
  return (
    <div className={styles.activities}>
      <div className={styles.labels}>
        <Image
          alt="Clan Wars"
          src="https://api-assets.clashofclans.com/labels/128/lXaIuoTlfoNOY5fKcQGeT57apz1KFWkN9-raxqIlMbE.png"
          width={30}
          height={30}
        />
        <Image
          alt="Clan War League"
          src="https://api-assets.clashofclans.com/labels/128/5w60_3bdtYUe9SM6rkxBRyV_8VvWw_jTlDS5ieU3IsI.png"
          width={30}
          height={30}
        />
        <Image
          alt="Clan Capital"
          src="https://api-assets.clashofclans.com/labels/128/Odg2DaLfhMgQOci4QvHovdoYq4SDiBrocWS2Bjm8Ah8.png"
          width={30}
          height={30}
        />
      </div>
      <div className={styles.reinforcements}>
        <Image alt="arrow-positive" src={arrowPositive} width={15} height={10} />
        <span>30,300</span>
      </div>
      <div className={styles.reinforcements}>
        <Image alt="arrow-negative" src={arrowNegative} width={15} height={10} />
        <span></span>20,300
      </div>
    </div>
  );
}

import styles from './index.module.scss';

import Label from '@/components/images/Label';

export default function Activities() {
  return (
    <div className={styles.activities}>
      <div className={styles.labels}>
        <Label
          name="Clan Wars"
          url="https://api-assets.clashofclans.com/labels/128/lXaIuoTlfoNOY5fKcQGeT57apz1KFWkN9-raxqIlMbE.png"
        />
        <Label
          name="Clan War League"
          url="https://api-assets.clashofclans.com/labels/128/5w60_3bdtYUe9SM6rkxBRyV_8VvWw_jTlDS5ieU3IsI.png"
        />
        <Label
          name="Clan Capital"
          url="https://api-assets.clashofclans.com/labels/128/Odg2DaLfhMgQOci4QvHovdoYq4SDiBrocWS2Bjm8Ah8.png"
        />
      </div>
      <div className={styles.sendedReinforcements}>30,300</div>
      <div className={styles.receivedReinforcements}>20,300</div>
    </div>
  );
}

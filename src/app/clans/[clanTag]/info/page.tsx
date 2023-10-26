import ClanBadge from '@/components/images/badges/ClanBadge';
import styles from './page.module.scss';
import Label from '@/components/images/Label';
import Scores from './_components/Scores';

export default function Page({ params }: { params: { clanTag: string } }) {
  const clanTag = decodeURIComponent(params.clanTag);
  return (
    <main className={styles.main}>
      <div className={styles.contentsArea}>
        {/*topInfo*/}
        <div className={styles.topInfo}>
          <ClanBadge
            name=""
            url="https://api-assets.clashofclans.com/badges/512/ZpFNZzhXMH0Ea3-8nXAnQFGaPcznRuhwa4R8x2dCXfA.png"
            size="large"
          />
          <div className={styles.basicInfo}>
            <div className={styles.clanIdentity}>
              <h2 className={styles.clanName}>혁명군</h2>
              <div className={styles.clanTag}>{clanTag}</div>
            </div>
            <div className={styles.restInfo}>
              <div className={styles.members}>30</div>
              <div className={styles.location}>South Korea</div>
            </div>
          </div>
        </div>

        <Scores league="crystal3" tropies={26814} builderTropies={25767} capitalTropies={2623} />

        {/*warRecords*/}
        <div className={styles.warRecords}>
          {/*top*/}
          <div className={styles.top}>
            <div className={styles.left}>
              <div className={styles.warRecord}>103승</div>
              <div className={styles.warRecord}>86패</div>
              <div className={styles.warRecord}>1무</div>
            </div>
            <div className={styles.warRecord}>승률 58.62%</div>
          </div>
          {/*bottom*/}
          <div className={styles.bottom}>
            <div className={styles.left}>
              <div className={styles.warRecord}>3연승</div>
              <div className={styles.recordsBoard}>
                <div className={`${styles.record} ${styles.win}`}></div>
                <div className={`${styles.record} ${styles.lose}`}></div>
                <div className={`${styles.record}`}></div>
                <div className={`${styles.record} ${styles.lose}`}></div>
                <div className={`${styles.record} ${styles.win}`}></div>
                <div className={`${styles.record} ${styles.win}`}></div>
                <div className={`${styles.record} ${styles.lose}`}></div>
                <div className={`${styles.record} ${styles.win}`}></div>
                <div className={`${styles.record} ${styles.win}`}></div>
                <div className={`${styles.record} ${styles.win}`}></div>
              </div>
            </div>
            <button className={styles.moreDetails}>전적 자세히</button>
          </div>
        </div>

        {/*joiningConditions*/}
        <div className={styles.joiningConditions}>
          <div className={styles.title}>가입 조건</div>
          <div className={styles.conditions}>
            <div className={styles.condition}>초대 한정</div>
            <div className={styles.condition}>10홀 이상</div>
            <div className={styles.condition}>1,200</div>
            <div className={styles.condition}>0</div>
          </div>
        </div>

        {/*activities*/}
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
      </div>
    </main>
  );
}

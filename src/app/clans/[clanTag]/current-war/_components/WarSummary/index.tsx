import styles from './index.module.scss';

import { ClanInSummary } from './ClanInSummary';
import ScoreBoard from './ScoreBoard';

import swordIcon from '@/images/icons/sword.svg';
import versusIcon from '@/images/icons/versus.svg';
import Image from 'next/image';
import { RemainingTimeTimer } from './RemainingTimeTimer';
import { ClanWar } from '@/utils/coc-api/types';

interface WarSummaryProps {
  clanWar: ClanWar;
}

export default function WarSummary({ clanWar }: WarSummaryProps) {
  const { state, startTime, endTime, teamSize, attacksPerMember, clan, opponent } = clanWar;
  return (
    <div className={styles.warSummary}>
      {/*top*/}
      <div className={styles.top}>
        <RemainingTimeTimer until={state === 'preparation' ? startTime : endTime} />
        {state === 'preparation' ? (
          <div className={styles[`warState--preparation`]}>준비일</div>
        ) : state === 'inWar' ? (
          <div className={styles[`warState--war`]}>전쟁일</div>
        ) : (
          <div className={styles[`warState--war`]}>전쟁 종료</div>
        )}
      </div>

      {/*middle*/}
      <div className={styles.middle}>
        <div className={styles.clanWrapper}>
          <ClanInSummary clan={clan} />
        </div>
        <div className={styles.scoreBoardWrapper}>
          {state === 'preparation' ? (
            <div className={styles.versus}>
              <span>{teamSize}</span>
              <Image alt="versus-icon" src={versusIcon} width={24} height={24} />
              <span>{teamSize}</span>
            </div>
          ) : (
            <ScoreBoard clan={clan} opponent={opponent} />
          )}
        </div>
        <div className={styles.clanWrapper}>
          <ClanInSummary clan={opponent} />
        </div>
      </div>

      {/*bottom */}
      {state === 'preparation' || (
        <div className={styles.bottom}>
          <div className={styles.attacks}>
            <Image alt="sword-icon" src={swordIcon} width={15} height={15} />
            <span>
              {clan.attacks}/{teamSize * attacksPerMember}
            </span>
          </div>
          <div className={styles.versus}>
            <span>{teamSize}</span>
            <Image alt="versus-icon" src={versusIcon} width={15} height={15} />
            <span>{teamSize}</span>
          </div>
          <div className={styles.attacks}>
            <Image alt="sword-icon" src={swordIcon} width={15} height={15} />
            <span>
              {opponent.attacks}/{teamSize * attacksPerMember}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

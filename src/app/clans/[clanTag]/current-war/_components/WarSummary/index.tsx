import styles from './index.module.scss';

import { ClanInSummary } from './ClanInSummary';
import { ScoreBoard } from './ScoreBoard';

import swordIcon from '@/images/icons/sword.svg';
import versusIcon from '@/images/icons/versus.svg';
import Image from 'next/image';
import { RemainingTimeTimer } from './RemainingTimeTimer';

interface Clan {
  tag: string;
  name: string;
  badgeUrl: string;
  attacks: number;
  stars: number;
  destructionPercetage: number;
  location?: string;
}

interface WarSummaryProps {
  state: 'inWar' | 'preparation';
  startTime: string;
  endTime: string;
  teamSize: number;
  attacksPerMember: number;
  leftClan: Clan;
  rightClan: Clan;
}

export function WarSummary({
  state,
  startTime,
  endTime,
  teamSize,
  attacksPerMember,
  leftClan,
  rightClan,
}: WarSummaryProps) {
  return (
    <div className={styles.warSummary}>
      {/*top*/}
      <div className={styles.top}>
        <RemainingTimeTimer until={state === 'inWar' ? endTime : startTime} />
        {state === 'inWar' ? (
          <div className={styles[`warState--war`]}>전쟁일</div>
        ) : (
          <div className={styles[`warState--preparation`]}>준비일</div>
        )}
      </div>

      {/*middle*/}
      <div className={styles.middle}>
        <div className={styles.clanWrapper}>
          <ClanInSummary badgeUrl={leftClan.badgeUrl} name={leftClan.name} location={leftClan.location} />
        </div>
        <div className={styles.scoreBoardWrapper}>
          {state === 'inWar' ? (
            <ScoreBoard
              leftTeam={{ stars: leftClan.stars, destructionPercentage: leftClan.destructionPercetage }}
              rightTeam={{ stars: rightClan.stars, destructionPercentage: rightClan.destructionPercetage }}
            />
          ) : (
            <div className={styles.versus}>
              <span>{teamSize}</span>
              <Image alt="versus-icon" src={versusIcon} width={24} height={24} />
              <span>{teamSize}</span>
            </div>
          )}
        </div>
        <div className={styles.clanWrapper}>
          <ClanInSummary badgeUrl={rightClan.badgeUrl} name={rightClan.name} location={rightClan.location} />
        </div>
      </div>

      {/*bottom */}
      {state === 'inWar' && (
        <div className={styles.bottom}>
          <div className={styles.attacks}>
            <Image alt="sword-icon" src={swordIcon} width={15} height={15} />
            <span>
              {leftClan.attacks}/{teamSize * attacksPerMember}
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
              {rightClan.attacks}/{teamSize * attacksPerMember}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

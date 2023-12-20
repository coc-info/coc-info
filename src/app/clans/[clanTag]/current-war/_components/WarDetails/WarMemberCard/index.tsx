import styles from './index.module.scss';

import Image from 'next/image';

import shieldIcon from '@/images/icons/shield.svg';
import swordIcon from '@/images/icons/sword.svg';
import starIcon from '@/images/icons/star.svg';
import filledStarIcon from '@/images/icons/star--fill.svg';

import type { ClanWarMember } from '@/utils/coc-api/types/clan/war/ClanWarMember';
import { getTownHallImage } from '@/utils/coc-image/getTownHallImage';

interface WarMemberCardProps {
  warMember: ClanWarMember;
  reverse?: boolean;
}

export default function WarMemberCard({ warMember, reverse = false }: WarMemberCardProps) {
  const { name, bestOpponentAttack, mapPosition, townhallLevel, opponentAttacks } = warMember;

  const resultsOfStars = [false, false, false];
  if (bestOpponentAttack !== undefined) {
    for (let i = 0; i < bestOpponentAttack.stars; i++) {
      resultsOfStars[i] = true;
    }
  }

  return (
    <div className={styles.memberCard}>
      {/* top */}
      <div className={`${styles.top} ${reverse ? styles.reverse : ''}`}>
        <div>
          {mapPosition}. {name}
        </div>
        <Image alt="townhall-image" src={getTownHallImage(townhallLevel)} height={32} />
      </div>

      {bestOpponentAttack ? (
        <>
          {/* middle */}
          <div className={`${styles.middle} ${reverse ? styles.reverse : ''}`}>
            <span>{bestOpponentAttack.destructionPercentage}%</span>
            <div className={styles.stars}>
              {resultsOfStars.map((result, i) => {
                return result ? (
                  <Image key={i} alt="star-icon" src={filledStarIcon} width={20} height={20} />
                ) : (
                  <Image key={i} alt="star-icon" src={starIcon} width={20} height={20} />
                );
              })}
            </div>
          </div>

          {/* bottom */}
          <div className={`${styles.bottom} ${reverse ? styles.reverse : ''}`}>
            <div className={styles.numOfInvade}>
              <Image alt="shield-icon" src={shieldIcon} width={15} height={15} />
              <span>{opponentAttacks}</span>
            </div>
            <div className={styles.invade}>
              <Image alt="sword-icon" src={swordIcon} width={15} height={15} />
              <span>99. temp user</span>
            </div>
          </div>
        </>
      ) : (
        <div className={`${styles.notInvade} ${reverse ? styles.reverse : ''}`}>공격 받지 않음</div>
      )}
    </div>
  );
}

import styles from './index.module.scss';

import Image from 'next/image';

import shieldIcon from '@/images/icons/shield.svg';
import swordIcon from '@/images/icons/sword.svg';
import starIcon from '@/images/icons/star.svg';
import filledStarIcon from '@/images/icons/star--fill.svg';

import th15Image from '@/images/game-images/structure/town-hall/town-hall-15.webp';
import th14Image from '@/images/game-images/structure/town-hall/town-hall-14.webp';
import th13Image from '@/images/game-images/structure/town-hall/town-hall-13.webp';
import th12Image from '@/images/game-images/structure/town-hall/town-hall-12.webp';
import th11Image from '@/images/game-images/structure/town-hall/town-hall-11.webp';
import th10Image from '@/images/game-images/structure/town-hall/town-hall-10.webp';
import th9Image from '@/images/game-images/structure/town-hall/town-hall-9.webp';
import th8Image from '@/images/game-images/structure/town-hall/town-hall-8.webp';
import th7Image from '@/images/game-images/structure/town-hall/town-hall-7.webp';
import th6Image from '@/images/game-images/structure/town-hall/town-hall-6.webp';
import th5Image from '@/images/game-images/structure/town-hall/town-hall-5.webp';
import th4Image from '@/images/game-images/structure/town-hall/town-hall-4.webp';
import th3Image from '@/images/game-images/structure/town-hall/town-hall-3.webp';
import th2Image from '@/images/game-images/structure/town-hall/town-hall-2.webp';
import th1Image from '@/images/game-images/structure/town-hall/town-hall-1.webp';

const TH_TIMAGE_TABLE = [
  th1Image,
  th2Image,
  th3Image,
  th4Image,
  th5Image,
  th6Image,
  th7Image,
  th8Image,
  th9Image,
  th10Image,
  th11Image,
  th12Image,
  th13Image,
  th14Image,
  th15Image,
];

interface WarMemberCardProps {
  name: string;
  bestOpponentAttack: {
    opponentName: string;
    stars: number;
    destructionPercentage: number;
  };
  mapPosition: number;
  townhallLever: number;
  opponentAttacks: number;
  reverse?: boolean;
}

export default function WarMemberCard({
  name,
  bestOpponentAttack,
  mapPosition,
  townhallLever,
  opponentAttacks,
  reverse = false,
}: WarMemberCardProps) {
  const resultsOfStars = [false, false, false];
  for (let i = 0; i < bestOpponentAttack.stars; i++) {
    resultsOfStars[i] = true;
  }

  return (
    <div className={styles.memberCard}>
      {/* top */}
      <div className={`${styles.top} ${reverse ? styles.reverse : ''}`}>
        <div>
          {mapPosition}. {name}
        </div>
        <Image alt="townhall-image" src={TH_TIMAGE_TABLE[townhallLever - 1]} height={32} />
      </div>

      {/* middle */}
      <div className={`${styles.middle} ${reverse ? styles.reverse : ''}`}>
        <span>{bestOpponentAttack.destructionPercentage}%</span>
        <div className={styles.stars}>
          {resultsOfStars.map((result) => {
            return result ? (
              <Image alt="star-icon" src={filledStarIcon} width={20} height={20} />
            ) : (
              <Image alt="star-icon" src={starIcon} width={20} height={20} />
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
          <span>2. Foobar</span>
        </div>
      </div>
    </div>
  );
}

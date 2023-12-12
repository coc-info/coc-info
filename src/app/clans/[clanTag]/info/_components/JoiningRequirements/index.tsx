import styles from './index.module.scss';
import Image from 'next/image';

import Trophy from '@/components/images/Trophy';

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

// 임시. 나중에 리펙토링 예정
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

interface JoiningRequirementsProps {
  type: 'open' | 'inviteOnly' | 'closed';
  requiredTownhallLevel: number;
  trophies: number;
  builderBaseTrophies: number;
}

export default function JoiningRequirements({
  type,
  requiredTownhallLevel,
  trophies,
  builderBaseTrophies,
}: JoiningRequirementsProps) {
  const TYPE_TABLE = {
    open: '공개',
    inviteOnly: '초대 한정',
    closed: '비공개',
  };

  return (
    <div className={styles.joiningRequirements}>
      <div className={styles.title}>가입 조건</div>
      <div className={styles.requirements}>
        <div className={styles.partition}>
          <div className={styles.clanType}>{TYPE_TABLE[type]}</div>
          <div className={styles.townhall}>
            <Image alt="" src={TH_TIMAGE_TABLE[requiredTownhallLevel - 1]} height={20} />
            <span>{requiredTownhallLevel}홀 이상</span>
          </div>
        </div>
        <div className={styles.partition}>
          <div className={styles.trophies}>
            <Trophy trophyType="home" />
            <span className={styles.score}>{trophies.toLocaleString()}</span>
          </div>
          <div className={styles.trophies}>
            <Trophy trophyType="builder" />
            <span className={styles.score}>{builderBaseTrophies.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

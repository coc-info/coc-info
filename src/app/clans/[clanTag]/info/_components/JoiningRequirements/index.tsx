import styles from './index.module.scss';
import Image from 'next/image';

import Trophy from '@/components/images/Trophy';

import th10Image from '@/images/game-images/structure/town-hall/town-hall-10.webp';

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
            <Image alt="" src={th10Image} height={20} />
            <span>{requiredTownhallLevel}홀 이상</span>
          </div>
        </div>
        <div className={styles.partition}>
          <div className={styles.trophies}>
            <Trophy trophyType="home" />
            <span className={styles.score}>{trophies}</span>
          </div>
          <div className={styles.trophies}>
            <Trophy trophyType="builder" />
            <span className={styles.score}>{builderBaseTrophies}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

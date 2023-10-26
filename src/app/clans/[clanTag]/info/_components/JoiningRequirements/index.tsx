import Trophy from '@/components/images/Trophy';
import styles from './index.module.scss';

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
        <div className={styles.requirement}>{TYPE_TABLE[type]}</div>
        <div className={styles.requirement}>{requiredTownhallLevel}홀 이상</div>
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
  );
}

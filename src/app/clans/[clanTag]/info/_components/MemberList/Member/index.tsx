import styles from './index.module.scss';

import Image from 'next/image';

import unrankedIcon from '@/images/game-images/icons/league-badges/unranked.webp';

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

import { Player } from '@/utils/coc-api/types/player/Player';

interface MemberProps {
  rank: number;
  member: Player;
}

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

export default function Member({ rank, member }: MemberProps) {
  const { tag, name, role, trophies, league } = member;

  const ROLE_TABLE: { [key: string]: string } = {
    leader: '대표',
    coLeader: '공동 대표',
    admin: '장로',
    member: '클랜원',
  } as const;

  return (
    <tr className={styles.member}>
      <td>{rank}</td>
      <td className={styles.townhall}>
        <div className={styles.townhallImageWrapper}>
          <Image alt={`${name}의 마을회관`} src={TH_TIMAGE_TABLE[member.townHallLevel - 1]} height={32} />
        </div>
      </td>
      <td className={styles.memberInfo}>
        <div>{name}</div>
        <div className={styles.role}>{ROLE_TABLE[role]}</div>
      </td>

      <td className={styles.trophies}>
        <div className={styles.trophiesWrapper}>
          {league ? (
            <Image alt="리그 뱃지" src={league.iconUrls.small} width={25} height={25} />
          ) : (
            <div className={styles.unrankedIconWrapper}>
              <Image alt="리그 뱃지" src={unrankedIcon} width={20} height={20} />
            </div>
          )}
          <span>{trophies.toLocaleString()}</span>
        </div>
      </td>
    </tr>
  );
}

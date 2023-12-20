import styles from './index.module.scss';

import Image from 'next/image';

import unrankedIcon from '@/images/game-images/icons/league-badges/unranked.webp';

import { Player } from '@/utils/coc-api/types/player/Player';
import { getTownHallImage } from '@/utils/coc-image/getTownHallImage';

interface MemberProps {
  rank: number;
  member: Player;
}

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
          <Image alt={`${name}의 마을회관`} src={getTownHallImage(member.townHallLevel)} height={32} />
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

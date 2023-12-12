import Image from 'next/image';
import styles from './index.module.scss';
import Link from 'next/link';
import { ClanRanking } from '@/utils/coc-api/types';

interface ItemProps {
  clanRaking: ClanRanking;
}

export default function Item({ clanRaking }: ItemProps) {
  const { tag, rank, clanLevel, badgeUrls, name, members, clanPoints } = clanRaking;
  return (
    <tr className={styles.item}>
      <td>{rank}</td>
      <td>{clanLevel}</td>
      <td>
        <Link className={styles.clan} href={`/clans/${encodeURIComponent(tag)}/info`}>
          <div className={styles.badgeContainer}>
            <Image alt={`${name}의 뱃지`} src={badgeUrls.small} width={24} height={24} />
          </div>
          <p>{name}</p>
        </Link>
      </td>
      <td>{members}</td>
      <td>{clanPoints.toLocaleString()}</td>
    </tr>
  );
}

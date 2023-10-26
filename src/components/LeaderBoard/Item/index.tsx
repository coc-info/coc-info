import Image from 'next/image';
import styles from './index.module.scss';
import Link from 'next/link';

interface ItemProps {
  tag: string;
  rank: number;
  level: number;
  badgeUrl: string;
  clanName: string;
  members: number;
  trophies: number;
}

export default function Item({ tag, rank, level, badgeUrl, clanName, members, trophies }: ItemProps) {
  return (
    <tr className={styles.item}>
      <td>{rank}</td>
      <td>{level}</td>
      <td>
        <Link className={styles.clan} href={`/clans/${encodeURIComponent(tag)}/info`}>
          <div className={styles.badgeContainer}>
            <Image alt={`${clanName}의 뱃지`} src={badgeUrl} width={24} height={24} />
          </div>
          <p>{clanName}</p>
        </Link>
      </td>
      <td>{members}</td>
      <td>{trophies}</td>
    </tr>
  );
}

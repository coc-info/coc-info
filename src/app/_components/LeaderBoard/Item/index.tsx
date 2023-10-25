import Image from 'next/image';
import styles from './index.module.scss';

interface ItemProps {
  rank: number;
  level: number;
  badgeUrl: string;
  clanName: string;
  members: number;
  trophies: number;
}

export default function Item({ rank, level, badgeUrl, clanName, members, trophies }: ItemProps) {
  return (
    <tr className={styles.item}>
      <td>{rank}</td>
      <td>{level}</td>
      <td className={styles.clan}>
        <div className={styles.badgeContainer}>
          <Image alt={`${clanName}의 뱃지`} src={badgeUrl} width={24} height={24} />
        </div>
        <p>{clanName}</p>
      </td>
      <td>{members}</td>
      <td>{trophies}</td>
    </tr>
  );
}

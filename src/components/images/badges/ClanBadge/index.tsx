import styles from './index.module.scss';
import Image from 'next/image';

interface ClanBadgeProps {
  name: string;
  url: string;
  size?: 'default' | 'small' | 'medium' | 'large';
}

export default function ClanBadge({ name, url, size = 'default' }: ClanBadgeProps) {
  const SIZE_TABLE = {
    default: 32,
    small: 32,
    medium: 48,
    large: 64,
  } as const;

  return (
    <div className={styles[`badgeWrapper--${size}`]}>
      <Image alt={name} src={url} width={SIZE_TABLE[size]} height={SIZE_TABLE[size]} />
    </div>
  );
}

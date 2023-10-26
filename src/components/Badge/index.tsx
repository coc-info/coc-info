import styles from './index.module.scss';
import Image from 'next/image';

interface BadgeProps {
  name: string;
  url: string;
}

export default function Badge({ name, url }: BadgeProps) {
  return (
    <div className={styles.badgeWrapper}>
      <Image alt={name} src={url} width={30} height={30} />
    </div>
  );
}

import styles from './index.module.scss';
import Image from 'next/image';

interface LabelProps {
  name: string;
  url: string;
  size?: 'default' | 'small' | 'medium' | 'large';
}

export default function Label({ name, url, size = 'default' }: LabelProps) {
  const SIZE_TABLE = {
    default: 30,
    small: 30,
    medium: 48,
    large: 64,
  } as const;

  return (
    <div className={styles[`labelWrapper--${size}`]}>
      <Image alt={name} src={url} width={SIZE_TABLE[size]} height={SIZE_TABLE[size]} />
    </div>
  );
}

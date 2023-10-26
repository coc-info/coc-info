import styles from './index.module.scss';
import Image from 'next/image';

interface LabelProps {
  name: string;
  url: string;
}

export default function Label({ name, url }: LabelProps) {
  return (
    <div className={styles.labelWrapper}>
      <Image alt={name} src={url} width={24} height={24} />
    </div>
  );
}

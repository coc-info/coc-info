import styles from './index.module.scss';
import Image from 'next/image';

import hambergerIcon from '@/images/icons/hamberger-icon.svg';
import Link from 'next/link';

interface HeaderProps {
  logoHidden?: boolean;
}

export default function Header({ logoHidden = false }: HeaderProps) {
  return (
    <header className={styles.headerArea}>
      <div className={styles.header}>
        <Link href="/" className={logoHidden ? styles['tempLogo--hidden'] : styles.tempLogo}>
          <h1>COC INFO</h1>
        </Link>
        <button className={styles.menuButton}>
          <Image alt="hameberger-icon" src={hambergerIcon} />
        </button>
      </div>
    </header>
  );
}

import styles from './index.module.scss';
import Image from 'next/image';

import hambergerIcon from '@/images/icons/hamberger-icon.svg';

interface HeaderProps {
  logoHidden?: boolean;
}

export default function Header({ logoHidden = false }: HeaderProps) {
  return (
    <header className={styles.headerArea}>
      <div className={styles.header}>
        <div className={logoHidden ? styles['tempLogo--hidden'] : styles.tempLogo}>COC INFO</div>
        <button className={styles.menuButton}>
          <Image alt="hameberger-icon" src={hambergerIcon} />
        </button>
      </div>
    </header>
  );
}
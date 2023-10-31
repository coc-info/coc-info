import styles from './index.module.scss';
import Image from 'next/image';

import hambergerIcon from '@/images/icons/hamberger-icon.svg';
import Link from 'next/link';

import logo from '@/images/logo.png';
import LogoContainer from './LogoContainer';

interface HeaderProps {
  logoHidden?: boolean;
}

export default function Header({ logoHidden = false }: HeaderProps) {
  return (
    <header className={styles.headerArea}>
      <div className={styles.header}>
        <LogoContainer />
        {/* <button className={styles.menuButton}>
          <Image alt="hameberger-icon" src={hambergerIcon} />
        </button> */}
      </div>
    </header>
  );
}

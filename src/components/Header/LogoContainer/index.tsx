'use client';
import styles from './index.module.scss';

import Image from 'next/image';
import Link from 'next/link';

import logo from '@/images/logo.svg';
import { usePathname } from 'next/navigation';

export default function LogoContainer() {
  const pathname = usePathname();
  const isHidden = pathname === '/';
  return (
    <h1 className={`${styles.logoContainer} ${isHidden ? styles.hidden : ''}`}>
      <div className={styles.withBeta}>
        <Link href="/">
          <Image alt="logo" src={logo} height={35} />
        </Link>
        <span>.BETA</span>
      </div>
    </h1>
  );
}

'use client';

import styles from './layout.module.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function ClanInfoNavigation() {
  const pathname = usePathname();
  const splitedPathname = pathname.split('/');
  const lastSegment = splitedPathname[splitedPathname.length - 1];

  return (
    <div className={styles.navigationContainer}>
      <nav className={styles.navigation}>
        <Link className={lastSegment === 'info' ? styles.active : ''} href="./info">
          <span>클랜 정보</span>
        </Link>
        <Link className={lastSegment === 'current-war' ? styles.active : ''} href="./current-war">
          <span>클랜전</span>
        </Link>
      </nav>
    </div>
  );
}

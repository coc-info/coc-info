import Image from 'next/image';
import styles from './page.module.scss';
import stopIcon from '@/images/icons/stop.svg';

export default function Page() {
  return (
    <main className={styles.main}>
      <div className={styles.contentsArea}>
        <div className={styles.mesageContainer}>
          <p className={styles.mainText}>
            <span>
              <Image alt="stop icon" src={stopIcon} />
            </span>
            전쟁중이 아닙니다.
          </p>
          <p className={styles.subText}>해당 클랜은 클랜전을 진행하고 있지 않습니다.</p>
        </div>
      </div>
    </main>
  );
}

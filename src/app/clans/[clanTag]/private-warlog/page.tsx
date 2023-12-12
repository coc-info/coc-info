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
            전쟁중이 아니거나 전쟁기록 비공개
          </p>
          <p className={styles.subText}>해당 클랜은 전쟁중이 아니거나 전쟁기록을 비공개 하였습니다.</p>
        </div>
      </div>
    </main>
  );
}

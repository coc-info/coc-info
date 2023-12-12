import styles from './index.module.scss';
import Image from 'next/image';
import stopIcon from '@/images/icons/stop.svg';

export default function ClanNotFound() {
  return (
    <div className={styles.clanNotFound}>
      <div className={styles.mesageContainer}>
        <p className={styles.mainText}>
          <span>
            <Image alt="stop icon" src={stopIcon} />
          </span>
          검색된 클랜이 없습니다.
        </p>
        <p className={styles.subText}>이름 또는 태그에 해당하는 클랜이 없습니다.</p>
      </div>
    </div>
  );
}

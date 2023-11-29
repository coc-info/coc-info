import Link from 'next/link';
import styles from './index.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footerArea}>
      <div className={styles.footer}>
        <p>ⓒ 2023 cocinfo.net</p>
        <p>
          본 사이트는 게임 Clash Of Clans의 팬사이트입니다. 이 콘텐츠는 비공식적이며 Supercell에 의해 승인되지
          않았습니다.
          <br /> 더 자세한 정보는 Supercell 팬 콘텐츠 정책(
          {
            <Link href="https://www.supercell.com/en/fan-content-policy/ko">
              www.supercell.com/en/fan-content-policy/ko
            </Link>
          }
          )을 참조해 주시기 바랍니다.
        </p>
      </div>
    </footer>
  );
}

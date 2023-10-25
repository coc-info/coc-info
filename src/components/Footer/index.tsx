import styles from './index.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footerArea}>
      <div className={styles.footer}>
        <p>ⓒ 2023 cocinfo.com</p>
        <p>
          본 사이트는 게임 Clash Of Clans의 비공식 팬사이트입니다. 본 사이트에서 사용하는 Clash Of Clans와 관련된 모든
          이미지, 로고 등의 콘텐츠는 SUPERCELL의 지적 재산권에 속합니다.
        </p>
      </div>
    </footer>
  );
}

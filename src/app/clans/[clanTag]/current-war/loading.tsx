import styles from './loading.module.scss';

import LoadingSpinner from '@/components/LoadingSpinner';

export default function Loading() {
  return (
    <main className={styles.loading}>
      <LoadingSpinner />
    </main>
  );
}

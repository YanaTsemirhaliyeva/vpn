import styles from './page.module.scss';
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
      <Link
        className={styles['main__page-link']}
        href={'/fellow-travelers'}
      >
        Попутчики
      </Link>
      <Link
        href={'/form'}
        className={styles['main__page-link']}
      >
        Форма
      </Link>
    </main>
  );
}

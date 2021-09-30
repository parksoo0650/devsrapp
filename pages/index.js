import styles from '../styles/Home.module.css';
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h3>main page</h3>
      </header>
      <main className={styles.main}>
        <Link href="/sermonmain">
          <p>말씀</p>
        </Link>
        <Link href="/onmain">
          <p>온콘텐츠</p>
        </Link>
        <Link href="/biblemain">
          <p>성경/찬송가</p>
        </Link>
        <Link href="/praisemain">
          <p>찬양</p>
        </Link>
        <Link href="/weeklymain">
          <p>주보</p>
        </Link>
        <Link href="/csmain">
          <p>더보기</p>
        </Link>
      </main>
      <footer className={styles.footer}>
        <h3>footer</h3>
      </footer>
    </div>
  )
}
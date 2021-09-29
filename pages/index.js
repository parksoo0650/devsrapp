import styles from '../styles/Home.module.css';
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h3>main page</h3>
      </header>
      <main className={styles.main}>
        <Link href="/sermon">
          <p>Youtube api 주일설교</p>
        </Link>
        <Link href="/onm">
          <p>Youtube api 온특새</p>
        </Link>
        <Link href="/on3">
          <p>Youtube api 온삼분</p>
        </Link>
        <Link href="/onb">
          <p>Youtube api 온성경</p>
        </Link>
        <Link href="/bible">
          <p>성경 api</p>
        </Link>
        <Link href="/weekly">
          <p>주보</p>
        </Link>
        <Link href="/notice">
          <p>공지사항</p>
        </Link>
      </main>
      <footer className={styles.footer}>
        <h3>footer</h3>
      </footer>
    </div>
  )
}
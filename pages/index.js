import { Header } from "semantic-ui-react";
import styles from '../styles/Home.module.css';
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header as="h3" style={{ paddingTop: 40 }}>
      to do list
      </Header>
      <main className={styles.main}>
        <div className={styles.grid}>
          <Link href="/sermon">
            <a className={styles.card}>
              <h3>Youtube api</h3>
              <p>주일설교 / 온콘텐츠</p>
            </a>
          </Link>

          <Link href="/bible">
            <a className={styles.card}>
              <h3>성경 / 찬송 api</h3>
              <p>성락교회 서버 db 사용불가</p>
            </a>
          </Link>

          <Link href="/weekly">
            <a className={styles.card}>
              <h3>주보 / 공지사항</h3>
              <p>firebas database 사용</p>
            </a>
          </Link>

          <a href="/" className={styles.card}>
            <h3>푸쉬알림서비스</h3>
            <p>신규 콘텐츠 등록시</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by SPRS
        </a>
      </footer>
    </div>
  )
}
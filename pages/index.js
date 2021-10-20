import { useRouter } from "next/router";
import styles from '../styles/Home.module.css';

export default function Home() {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <div onClick={() => { router.push("/sermonmain"); }}>말씀</div>
      <div onClick={() => { router.push("/onmain"); }}>온콘텐츠</div>
      <div onClick={() => { router.push("/biblemain"); }}>성경/찬송</div>
      <div onClick={() => { router.push("/praisemain"); }}>찬양</div>
      <div onClick={() => { router.push("/weeklymain"); }}>주보</div>
      <div onClick={() => { router.push("/csmain"); }}>더보기</div>
    </div>
  )
}
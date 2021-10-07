import styles from '../styles/Home.module.css';
import Link from "next/link";
import { db } from '../fbase';
import { collection, query, where, orderBy, getDocs } from "firebase/firestore";

export default function Bibledetail({ list }) {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <Link href="/biblelist">
                    <h3>성경상세</h3>
                </Link>
            </header>
            <main className={styles.main}>
                {list.map((item, i) => (
                <div key={i}>
                    <p>{item.verse}. {item.content}</p>
                </div>
                ))}
            </main>
            <footer className={styles.footer}>
                <h3>footer</h3>
            </footer>
        </div>
    );
}

export async function getStaticProps() {
    const data = [];
    const q = query(collection(db, "bible"), where("book", "==", 1), where("chapter", "==", 1), orderBy("verse", "asc"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        data.push(doc.data());
    });

    return {
        props: {
            list: data,
        },
    };
}
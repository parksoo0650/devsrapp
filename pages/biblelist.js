import styles from '../styles/Home.module.css';
import Link from "next/link";
import { useRouter } from "next/router";
import { db } from '../fbase';
import { collection, query, where, orderBy, getDocs } from "firebase/firestore";
import { BookConsumer } from '../src/components/bibleProvider';

export default function Biblelist({ list }) {
    const router = useRouter();
    return (
        <div className={styles.container}>
            <div onClick={() => { router.push("/biblemain"); }}>성경</div>
            <BookConsumer>
                {({ book_name }) => (
                    <main className={styles.main}>
                        {list.map((item, i) => (
                            <div key={i}>
                                <Link href="/book/[id]" as={`/book/${item.book}`}>
                                    <p>{book_name[item.book]}</p>
                                </Link>
                            </div>
                        ))}
                    </main>
                )}
            </BookConsumer>
        </div>
    );
}

export async function getStaticProps() {
    const data = [];
    const q = query(collection(db, "bible"), where("chapter", "==", 1), where("verse", "==", 1), orderBy("book", "asc"));
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
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
            <BookConsumer>
                {({ book_name }) => (
                    <main style={{ display: "flex", flexWrap: "wrap", padding: "10px", justifyContent: "center" }}>
                        {list.map((item, i) => (
                            <Link href="/book/[id]" as={`/book/${item.book}`}>
                                <div key={i}
                                    style={{
                                        flexBasis: "48%",
                                        fontSize: "12px",
                                        color: "#333",
                                        fontWeight: "700",
                                        margin: "3.5px",
                                        padding: "3px",
                                        border: "1px solid #ccc",
                                        borderRadius: "10px",
                                        display: "flex",
                                        justifyContent: "center",
                                    }}
                                >
                                    <p>{book_name[item.book]}</p>
                                </div>
                            </Link>
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
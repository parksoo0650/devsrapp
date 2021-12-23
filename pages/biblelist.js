import styles from '../styles/Home.module.css';
import Link from "next/link";
import { useRouter } from "next/router";
import { db } from '../fbase';
import { collection, query, where, orderBy, getDocs } from "firebase/firestore";
import { BookConsumer } from '../src/components/bibleProvider';

export default function Biblelist({ list }) {
    const router = useRouter();
    return (
        <div class="container">
            <BookConsumer>
                {({ book_name }) => (
                    <ul class="book_list">
                        {list.map((item, i) => (
                            <Link href="/book/[id]" as={`/book/${item.book}`}>
                                <li key={i}>
                                    {book_name[item.book]}
                                </li>
                            </Link>
                        ))}
                    </ul>
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
import Link from "next/link";
import { db } from '../fbase';
import { collection, query, where, orderBy, getDocs } from "firebase/firestore";
import { BookConsumer } from '../src/components/bibleProvider';

export default function Biblelist({ list }) {
    return (
        <div className="container">
            <BookConsumer>
                {({ book_name }) => (
                    <ul className="book_list">
                        {list.map((item, i) => (
                            <Link href="/book/[id]" as={`/book/${item.book}`} key={i}>
                                <li >
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
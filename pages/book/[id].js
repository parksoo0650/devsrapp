import styles from '../../styles/Home.module.css';
import Link from "next/link";
import { db } from '../../fbase';
import { collection, query, where, orderBy, getDocs } from "firebase/firestore";
import { BookConsumer } from '../../src/components/bibleProvider';

const Post = ({ items, bid }) => {
    return (
        <div className={styles.container}>
            <BookConsumer>
                {({ book_name }) => (
                    <Link href="/biblelist">
                        <h3>{book_name[bid]}</h3>
                    </Link>
                )}
            </BookConsumer>
            <ul className="chapter_list">
                {items.map((item, i) => (
                    <Link href="/chapter/[id]" as={`/chapter/${item.book}/${item.chapter}`}>
                        <li key={i}>
                            {item.chapter}
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    );
};

export default Post;

// export async function getStaticPaths() {
//     const paths = ['/book/1', '/book/2', '/book/3', '/book/4', '/book/5', '/book/6', '/book/7', '/book/8', '/book/9', '/book/10', '/book/11', '/book/12', '/book/13', '/book/14', '/book/15', '/book/16', '/book/17', '/book/18', '/book/19', '/book/20', '/book/21', '/book/22', '/book/23', '/book/24', '/book/25', '/book/26', '/book/27', '/book/28', '/book/29', '/book/30', '/book/31', '/book/32', '/book/33', '/book/34', '/book/35', '/book/36', '/book/37', '/book/38', '/book/39', '/book/40', '/book/41', '/book/42', '/book/43', '/book/44', '/book/45', '/book/46', '/book/47', '/book/48', '/book/49', '/book/50', '/book/51', '/book/52', '/book/53', '/book/54', '/book/55', '/book/56', '/book/57', '/book/58', '/book/59', '/book/60', '/book/61', '/book/62', '/book/63', '/book/64', '/book/65', '/book/66'];
//     const paths = [];
//     return { paths, fallback: false }
// }

export async function getServerSideProps(context) {
    const id = context.params.id;
    const book_data = [];
    const q = query(collection(db, "bible"), where("book", "==", parseInt(id)), where("verse", "==", 1), orderBy("chapter", "asc"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        book_data.push(doc.data());
    });

    return {
        props: {
            items: book_data,
            bid: id
        },
    };
}
import styles from '../../styles/Home.module.css';
import Link from "next/link";
import { db } from '../../fbase';
import { collection, query, where, orderBy, getDocs } from "firebase/firestore";

const Post = ({ items, bid }) => {
    const book_name = {1 : "창세기",2 : "출애굽기",3 : "레위기",4 : "민수기",5 : "신명기",6 : "여호수아",7 : "사사기",8 : "룻기",9 : "사무엘상",10 : "사무엘하",11 : "열왕기상",12 : "열왕기하",13 : "역대상",14 : "역대하",15 : "에스라",16 : "느헤미야",17 : "에스더",18 : "욥기",19 : "시편",20 : "잠언",21 : "전도서",22 : "아가",23 : "이사야",24 : "예레미야",25 : "예레미야 애가",26 : "에스겔",27 : "다니엘",28 : "호세아",29 : "요엘",30 : "아모스",31 : "오바댜",32 : "요나",33 : "미가",34 : "나훔",35 : "하박국",36 : "스바냐",37 : "학개",38 : "스가랴",39 : "말라기",40 : "마태복음",41 : "마가복음",42 : "누가복음",43 : "요한복음",44 : "사도행전",45 : "로마서",46 : "고린도전서",47 : "고린도후서",48 : "갈라디아서",49 : "에베소서",50 : "빌립보서",51 : "골로새서",52 : "데살로니가전서",53 : "데살로니가후서",54 : "디모데전서",55 : "디모데후서",56 : "디도서",57 : "빌레몬서",58 : "히브리서",59 : "야고보서",60 : "베드로전서",61 : "베드로후서",62 : "요한1서",63 : "요한2서",64 : "요한3서",65 : "유다서",66 : "요한계시록"};

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <Link href="/biblelist">
                    <h3>{book_name[bid]}</h3>
                </Link>
            </header>
            <main className={styles.main}>
                {items.map((item, i) => (
                    <div key={i}>
                        <Link href={`/bibledetail?book=${item.book}&chapter=${item.chapter}`}>
                            <p>{item.chapter}장</p>
                        </Link>
                    </div>
                ))}
            </main>
            <footer className={styles.footer}>
                <h3>footer</h3>
            </footer>
        </div>
    );
};

export default Post;

export async function getStaticPaths() {
    const paths = ['/book/1','/book/2','/book/3','/book/4','/book/5','/book/6','/book/7','/book/8','/book/9','/book/10','/book/11','/book/12','/book/13','/book/14','/book/15','/book/16','/book/17','/book/18','/book/19','/book/20','/book/21','/book/22','/book/23','/book/24','/book/25','/book/26','/book/27','/book/28','/book/29','/book/30','/book/31','/book/32','/book/33','/book/34','/book/35','/book/36','/book/37','/book/38','/book/39','/book/40','/book/41','/book/42','/book/43','/book/44','/book/45','/book/46','/book/47','/book/48','/book/49','/book/50','/book/51','/book/52','/book/53','/book/54','/book/55','/book/56','/book/57','/book/58','/book/59','/book/60','/book/61','/book/62','/book/63','/book/64','/book/65','/book/66'];
    return { paths, fallback: false }
}

export async function getStaticProps(context) {
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
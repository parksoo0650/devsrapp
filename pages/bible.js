import { Header } from "semantic-ui-react";
import styles from '../styles/Home.module.css';
import Link from "next/link";

export default function Bible() {
    return (
        <div className={styles.container}>
            <Header as="h3" style={{ paddingTop: 40 }}>
                <Link href="/">Home</Link>
            </Header>
            <div>성경 api</div>
        </div>
    );
}
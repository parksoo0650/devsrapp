import { useRouter } from "next/router";
import Link from "next/link";
import styles from '../styles/Home.module.css';

export default function Search() {
    const router = useRouter();
    return (
        <div className="search_wrap">
            <div className="search_area">
                <div className="top">
                    <span className="btn_prev"></span>
                    <span className="btn_delete2"></span>
                    <input type="text" placeholder="검색어를 입력하세요." />
                </div>
                <div className="recent">
                    <div className="title">
                        <strong>최근 검색어</strong>
                        <span className="btn_delete">전체삭제</span>
                    </div>
                    <ul className="list">
                        <li>
                            <span>온특새</span>
                            <div className="btn_delete"></div>
                        </li>
                        <li>
                            <span>3부 예배</span>
                            <div className="btn_delete"></div>
                        </li>
                        <li>
                            <span>말씀하시되</span>
                            <div className="btn_delete"></div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from '../styles/Home.module.css';

export default function Praisemorning() {
    const router = useRouter();
    const YOUTUBE_URL = "https://www.googleapis.com/youtube/v3";
    const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
    let PLAYLIST_ID = "";
    let pr_title = "";
    if(router.query.flag==1) {
        PLAYLIST_ID = process.env.NEXT_PUBLIC_YOUTUBE_PLAYLIST_11_PRAISE;
        pr_title = "주일예배찬양";
    } else if(router.query.flag==2) {
        PLAYLIST_ID = process.env.NEXT_PUBLIC_YOUTUBE_PLAYLIST_15_PRAISE;
        pr_title = "연합예배찬양";
    } else if(router.query.flag==3) {
        PLAYLIST_ID = process.env.NEXT_PUBLIC_YOUTUBE_PLAYLIST_CHOIR;
        pr_title = "성가대찬양";
    } else if(router.query.flag==4) {
        PLAYLIST_ID = process.env.NEXT_PUBLIC_YOUTUBE_PLAYLIST_OFFERING;
        pr_title = "헌금송";
    }
    const API_URL = YOUTUBE_URL + "/playlistItems?part=snippet,contentDetails&maxResults=10&playlistId=" + PLAYLIST_ID + "&key=" + API_KEY;
    const [datas, setDatas] = useState([]);

    const getData = async () => {
        const api_data = await axios.get(API_URL);
        setDatas(api_data.data.items);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className={styles.container}>
            <div onClick={() => { router.push("/praisemain"); }}>{pr_title}</div>
            <main className={styles.main}>
                <div className={styles.grid}>
                    {datas.map((data, i) => (
                        <div className={styles.card} key={i}>
                            <a href={`https://www.youtube.com/watch?v=${data.snippet.resourceId.videoId}`}>
                                <p>
                                    <img width={data.snippet.thumbnails.medium.width} height={data.snippet.thumbnails.medium.height} src={data.snippet.thumbnails.medium.url} alt="" />
                                </p>
                                <p>{data.snippet.title}</p>
                            </a>
                        </div>
                    ))}
                </div>
            </main>
            <footer className={styles.footer}>
                <h3>footer</h3>
            </footer>
        </div>
    );
}
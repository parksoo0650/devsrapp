import React, { useState, useEffect } from "react";
import styles from '../styles/Home.module.css';
import Link from "next/link";
import axios from "axios";

export default function Sermon() {
    const YOUTUBE_URL = "https://www.googleapis.com/youtube/v3";
    const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
    // const CHANNEL_ID = process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID;
    const PLAYLIST_ID = process.env.NEXT_PUBLIC_YOUTUBE_PLAYLIST_21_SERVICE;
    const API_URL = YOUTUBE_URL + "/playlistItems?part=snippet,contentDetails&maxResults=10&playlistId=" + PLAYLIST_ID + "&key=" + API_KEY;
    const [datas, setDatas] = useState([]);

    const getData = async () => {
        const api_data = await axios.get(API_URL);
        console.log(api_data.data.items);
        setDatas(api_data.data.items);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <Link href="/sermonmain">
                    <h3>대예배</h3>
                </Link>
            </header>
            <main className={styles.main}>
                <div className={styles.grid}>
                    {datas.map((data, i) => (
                        <div className={styles.card} key={i}>
                            <a href={`https://www.youtube.com/watch?v=${data.snippet.resourceId.videoId}`}>
                                <p>
                                    {
                                    (data.snippet.thumbnails.medium) ?
                                    <img width={data.snippet.thumbnails.medium.width} height={data.snippet.thumbnails.medium.height} src={data.snippet.thumbnails.medium.url} alt="" />
                                    : ""
                                    }
                                </p>
                                <h3>{data.snippet.title}</h3>
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
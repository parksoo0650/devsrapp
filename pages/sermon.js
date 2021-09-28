import React, { useState, useEffect } from "react";
import styles from '../styles/Home.module.css';
import Link from "next/link";
import axios from "axios";

export default function Sermon() {
    const API_URL = "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&maxResults=25&playlistId=PLCNxYye_JJpZzRz1PIAikIeiRkXQVvd8V&key=AIzaSyClCYwOsb31blVPNyuGm6LoWYH_9DPOg_Y";
    const [datas, setDatas] = useState([]);

    const getData = async () => {
        const api_data = await axios.get(API_URL);
        setDatas(api_data.data.items);
    };

    console.log(datas);

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className={styles.container}>
            <div>
                <Link href="/">Home</Link>
            </div>
            <div>주일설교</div>
            {datas.map((data, i) => (
                <div key={i}>
                    <a href={`https://www.youtube.com/watch?v=${data.snippet.resourceId.videoId}`}>
                        <p>
                            <img width={data.snippet.thumbnails.medium.width} height={data.snippet.thumbnails.medium.height} src={data.snippet.thumbnails.medium.url} alt="" />
                        </p>
                        <h3>{data.snippet.title}</h3>
                    </a>
                </div>
            ))}
        </div>
    );
}
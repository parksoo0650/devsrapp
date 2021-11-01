import { useRouter } from "next/router";
import styles from '../styles/Home.module.css';
import React, { useState, useEffect } from "react";
import axios from "axios";
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import Sheet from 'react-modal-sheet';

export default function Home() {

  const YOUTUBE_URL = "https://www.googleapis.com/youtube/v3";
  const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
  const PLAYLIST_ID = process.env.NEXT_PUBLIC_YOUTUBE_PLAYLIST_21_SERVICE;
  const API_URL = YOUTUBE_URL + "/playlistItems?part=snippet,contentDetails&maxResults=10&playlistId=" + PLAYLIST_ID + "&key=" + API_KEY;

  const [datas, setDatas] = useState([]);

  const getData = async () => {
    const api_data = await axios.get(API_URL);
    setDatas(api_data.data.items[0].snippet.resourceId.videoId);
  };

  useEffect(() => {
    getData();
  }, []);

  const router = useRouter();
  const [sliderRef, slider] = useKeenSlider();

  let [isOpen, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      <div ref={sliderRef} className="keen-slider" style={{ width: "100%", height: "20vh" }}>
        <div className="keen-slider__slide" style={{ background: "rgb(64, 175, 255)", padding: "10px 10px" }}>
          <div style={{ fontSize: "28px", color: "#fff", fontWeight: "500" }}>Banner Title 1</div>
          <div style={{ fontSize: "14px", color: "#fff", fontWeight: "500" }}>sub Title 1</div>
        </div>
        <div className="keen-slider__slide" style={{ background: "rgb(255, 75, 64)", padding: "10px 10px" }}>
          <div style={{ fontSize: "28px", color: "#fff", fontWeight: "500" }}>Banner Title 2</div>
          <div style={{ fontSize: "14px", color: "#fff", fontWeight: "500" }}>sub Title 2</div>
        </div>
        <div className="keen-slider__slide" style={{ background: "rgb(182, 255, 64)", padding: "10px 10px" }}>
          <div style={{ fontSize: "28px", color: "#fff", fontWeight: "500" }}>Banner Title 3</div>
          <div style={{ fontSize: "14px", color: "#fff", fontWeight: "500" }}>sub Title 3</div>
        </div>
      </div>

      <div style={{ width: "100%", display: "flex", marginTop: "10px" }}>
        <div style={{ backgroundColor: "#eee", marginLeft: "10px", marginRight: "10px", flex: "1", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", padding: "10px" }}>
          <div style={{ fontSize: "14px", color: "#333", fontWeight: "700", marginBottom: "5px" }} >예배</div>
          <div style={{ fontSize: "14px", color: "#333", fontWeight: "500", marginBottom: "2px" }} onClick={() => { router.push("/sermon?flag=1"); }}>대예배</div>
          <div style={{ fontSize: "14px", color: "#333", fontWeight: "500", marginBottom: "2px" }} onClick={() => { router.push("/sermon?flag=2"); }}>환언특강</div>
        </div>
        <div style={{ backgroundColor: "#eee", marginRight: "10px", flex: "1", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", padding: "10px" }}>
          <div style={{ fontSize: "14px", color: "#333", fontWeight: "700", marginBottom: "5px" }} >찬양</div>
          <div style={{ fontSize: "14px", color: "#333", fontWeight: "500", marginBottom: "2px" }} onClick={() => { router.push("/praisesub?flag=1"); }}>주일예배찬양</div>
          <div style={{ fontSize: "14px", color: "#333", fontWeight: "500", marginBottom: "2px" }} onClick={() => { router.push("/praisesub?flag=2"); }}>연합예배찬양</div>
          <div style={{ fontSize: "14px", color: "#333", fontWeight: "500", marginBottom: "2px" }} onClick={() => { router.push("/praisesub?flag=3"); }}>성가대찬양</div>
          <div style={{ fontSize: "14px", color: "#333", fontWeight: "500", marginBottom: "2px" }} onClick={() => { router.push("/praisesub?flag=4"); }}>헌금송</div>
        </div>
      </div>

      <div style={{ width: "100%", display: "flex", marginTop: "10px" }}>
        <div style={{ backgroundColor: "#eee", marginLeft: "10px", marginRight: "10px", flex: "1", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", padding: "10px" }}>
          <div style={{ fontSize: "14px", color: "#333", fontWeight: "700", marginBottom: "5px" }} >온라인 콘텐츠</div>
          <div style={{ fontSize: "14px", color: "#333", fontWeight: "500", marginBottom: "2px" }} onClick={() => { router.push("/onsub?flag=1"); }}>온특새</div>
          <div style={{ fontSize: "14px", color: "#333", fontWeight: "500", marginBottom: "2px" }} onClick={() => { router.push("/onsub?flag=2"); }}>온삼분</div>
          <div style={{ fontSize: "14px", color: "#333", fontWeight: "500", marginBottom: "2px" }} onClick={() => { router.push("/onsub?flag=3"); }}>온성경</div>
        </div>
      </div>

      <div style={{ width: "100%", display: "flex", marginTop: "10px" }}>
        <div style={{ backgroundColor: "#eee", marginLeft: "10px", marginRight: "10px", flex: "1", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", padding: "10px" }}>
          <div style={{ fontSize: "14px", color: "#333", fontWeight: "700", marginBottom: "5px" }} onClick={() => { router.push("/biblelist"); }}>성경</div>
        </div>
        <div style={{ backgroundColor: "#eee", marginRight: "10px", flex: "1", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", padding: "10px" }}>
          <div style={{ fontSize: "14px", color: "#333", fontWeight: "700", marginBottom: "5px" }} onClick={() => { router.push("/praiselist"); }}>찬송</div>
        </div>
      </div>

      <div style={{ width: "100%", display: "flex", marginTop: "10px", marginBottom: "10px" }}>
        <div style={{ backgroundColor: "#eee", marginLeft: "10px", marginRight: "10px", flex: "1", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", padding: "10px" }}>
          <div style={{ fontSize: "14px", color: "#333", fontWeight: "700", marginBottom: "5px" }} onClick={() => { router.push("/weeklymain"); }}>주보</div>
        </div>
        <div style={{ backgroundColor: "#eee", marginRight: "10px", flex: "1", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", padding: "10px" }}>
          <div style={{ fontSize: "14px", color: "#333", fontWeight: "700", marginBottom: "5px" }} onClick={() => { router.push("/csmain"); }}>더보기</div>
        </div>
      </div>

      <div style={{ width: "100%", display: "flex", justifyContent: "center", padding: "10px" }}>
        <iframe id="player" width="100%" type="text/html" src={`http://www.youtube.com/embed/${datas}`} frameborder="0"></iframe>
      </div>

      <div style={{ width: "100%", display: "flex", justifyContent: "center", padding: "30px" }}>
        <button onClick={() => setOpen(true)}>Open popup</button>
        <Sheet
          isOpen={isOpen}
          onClose={() => setOpen(false)}
          snapPoints={[0.4]}
        >
          <Sheet.Container>
            <Sheet.Header />
            <Sheet.Content>
              popup
            </Sheet.Content>
          </Sheet.Container>
          <Sheet.Backdrop />
        </Sheet>
      </div>
    </div>
  )
}
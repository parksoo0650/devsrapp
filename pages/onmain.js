import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ContentTab from '../src/components/ContentTab';
import HomeBar from '../src/components/HomeBar';
import Card from '../src/components/molecule/Card';
import Skeleton from '../src/components/molecule/Skeleton';

export default function Onmain() {
  const router = useRouter();
  let con_kind = '';
  router.query.kind ? (con_kind = router.query.kind) : (con_kind = 'onm');
  const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;

  // 온특새
  const API_URL_ONM = `https://www.googleapis.com/youtube/v3/playlistItems/?key=${API_KEY}&part=snippet,contentDetails&maxResults=11&playlistId=PLCNxYye_JJpY-KpZNb-R3VMkoIEkMZSfG`;
  // 온삼분
  const API_URL_ONT = `https://www.googleapis.com/youtube/v3/playlistItems/?key=${API_KEY}&part=snippet,contentDetails&maxResults=11&playlistId=PLCNxYye_JJpZmSoNBoZdnZ0CnpEGh3pQA`;
  // 온성경
  const API_URL_ONB = `https://www.googleapis.com/youtube/v3/playlistItems/?key=${API_KEY}&part=snippet,contentDetails&maxResults=11&playlistId=PLCNxYye_JJpZKRGb7hy_FJ1OIv4fxTF7S`;

  const [mainData, setMainData] = useState({
    videoId: '',
    title: '',
    thumbnails: '',
    publishedAt: '',
  });
  const [listData, setListData] = useState([]);
  const [series, setSeries] = useState(con_kind);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async (series) => {
    let apiData = '';
    if (series === 'onm') {
      apiData = await axios.get(API_URL_ONM);
    } else if (series === 'ont') {
      apiData = await axios.get(API_URL_ONT);
    } else if (series === 'onb') {
      apiData = await axios.get(API_URL_ONB);
    }

    let onData = [];
    if (apiData.data.items[0].snippet.title !== 'Private video') {
      onData = apiData.data.items[0];
    } else {
      onData = apiData.data.items[1];
    }
    const splitTitle = onData.snippet.title.split('|');
    const splitDate = onData.snippet.publishedAt.split('T');
    const videoTitle = splitTitle[0];
    const videoDate = splitDate[0].split('-');

    setMainData({
      videoId: onData.snippet.resourceId.videoId,
      title: videoTitle,
      thumbnails: onData.snippet.thumbnails.medium.url,
      publishedAt: videoDate[0] + '. ' + videoDate[1] + '. ' + videoDate[2],
    });
    setListData(apiData.data.items);
    setIsLoading(false);
  };

  useEffect(() => {
    getData(series);
  }, [series]);

  useEffect(() => {
    setSeries(con_kind);
  }, [router]);

  return (
    <>
      <div className='sub_container'>
        <div className='top_area'>
          <ContentTab />
          <div className='dropdown'>
            <ul>
              <li
                onClick={() => {
                  if (series != 'onm') {
                    setSeries('onm');
                    setIsLoading(true);
                  }
                }}
                className={series == 'onm' ? 'on' : ''}
              >
                온특새
              </li>
              <li
                onClick={() => {
                  if (series != 'onb') {
                    setSeries('onb');
                    setIsLoading(true);
                  }
                }}
                className={series == 'onb' ? 'on' : ''}
              >
                온성경
              </li>
              <li
                onClick={() => {
                  if (series != 'ont') {
                    setSeries('ont');
                    setIsLoading(true);
                  }
                }}
                className={series == 'ont' ? 'on' : ''}
              >
                온3분
              </li>
            </ul>
          </div>
        </div>

        {/* 온특새 */}
        {isLoading === true ? (
          <Skeleton.Contents />
        ) : (
          <>
            <Card.Rounded
              route={`/onprayerdetail?vid=${mainData.videoId}&vtit=${mainData.title}&vdate=${mainData.publishedAt}`}
              data={mainData}
              thumbnails={`/images/kakao_${series}_new.jpg`}
            />

            <div className='section subbordert pt15'>
              <ul className='sermon_list'>
                {listData.map((doc, i) => {
                  if (doc.snippet.title === 'Private video') {
                    return false;
                  }
                  if (i == 0) {
                    return false;
                  }
                  let splitListTitle = doc.snippet.title.split('|');
                  let ListTitle = splitListTitle[0];
                  let splitListDate = doc.snippet.publishedAt.split('T');
                  let ListDate = splitListDate[0].split('-');
                  let lDate =
                    ListDate[0] + '. ' + ListDate[1] + '. ' + ListDate[2];
                  return (
                    <li
                      key={doc.id}
                      onClick={() => {
                        router.push(
                          `/onprayerdetail?vid=${doc.snippet.resourceId.videoId}&vtit=${ListTitle}&vdate=${lDate}`,
                          '/onprayerdetail'
                        );
                      }}
                    >
                      <div className='tit_box'>
                        <div className='tit'>{ListTitle}</div>
                        <div className='date'>{lDate}</div>
                      </div>
                      <div className='play_icon'>
                        <img src='/icons/ico_play.svg' alt='play' />
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </>
        )}
      </div>
      <HomeBar />
    </>
  );
}

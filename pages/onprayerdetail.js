import { useRouter } from 'next/router';
import React, { useState } from 'react';
import YouTube from 'react-youtube';
import ClickToMoveBack from '../src/components/atom/ClickToMoveBack';
import ActionBar from '../src/components/molecule/ActionBar';
import Share from '../src/components/Share';

export default function Onmain() {
  const router = useRouter();
  const [onprayer, setOnprayer] = useState('순서');
  const opts = {
    width: '320px',
    height: '200px',
    playerVars: {
      loop: 1,
      controls: 1,
    },
  };
  const [youtubeTarget, setYoutubeTarget] = useState({});
  const [isMute, setIsMute] = useState(false);
  const onPlayerReady = (event) => {
    event.target.mute();
    event.target.setVolume(0);
    event.target.playVideo();
    setYoutubeTarget(event.target);
    setIsMute(true);
  };

  return (
    <div className='sub_container onseries_detail'>
      <ActionBar
        center='온특새'
        left={<ClickToMoveBack route='/onmain?kind=onm' />}
      />

      <div className='movie_wrap'>
        {isMute && (
          <div
            onClick={() => {
              youtubeTarget.unMute();
              youtubeTarget.setVolume(100);
              setIsMute(false);
            }}
            style={{
              position: 'absolute',
              zIndex: '10',
              padding: '15px',
            }}
          >
            <img
              style={{ width: '50%' }}
              src='/images/btn_mute.png'
              alt='음소거'
            />
          </div>
        )}
        <YouTube
          videoId={router.query.vid}
          opts={opts}
          containerClassName='iframe_wrap'
          onReady={onPlayerReady}
        />
        <div className='info'>
          <Share
            title={router.query.vtit}
            thum='/images/kakao_onm_new.jpg'
            vid={router.query.vid}
          />
          <div className='tit'>
            <a href='#'>{router.query.vtit}</a>
          </div>
          <div className='date'>{router.query.vdate}</div>
        </div>
      </div>

      <div className='section' style={{ display: 'none' }}>
        <ul className='tab_area'>
          <li
            onClick={() => {
              setOnprayer('순서');
            }}
            className={onprayer == '순서' ? 'on' : ''}
          >
            순서
          </li>
          <li
            onClick={() => {
              setOnprayer('기도제목');
            }}
            className={onprayer == '기도제목' ? 'on' : ''}
          >
            기도제목
          </li>
        </ul>
        <div className='tab_con'>
          {/* 순서 */}
          <ul className={onprayer == '순서' ? 'order_wrap' : 'order_wrap hide'}>
            <li>주신기도</li>
            <li>기도</li>
            <li>주신기도</li>
            <li>다음 시간 안내</li>
          </ul>

          {/* 기도제목 */}
          <div
            className={
              onprayer == '기도제목' ? 'prayer_wrap' : 'prayer_wrap hide'
            }
          >
            <ol className='prayer_list'>
              <li>예배를 성공하고, 사랑과 겸손으로 헌신하는 생활하도록</li>
              <li>말씀 전하시는 감독님에게 성령의 큰 권능이 함께 하시도록</li>
              <li>진실한 마음으로 하나님 앞에 믿음을 다한 예물을 드리도록</li>
              <li>예배를 통해 기도가 뜨겁게 살아나고 응답받는 교회가 되도록</li>
              <li>
                감독님과 원로감독님에게 영육간에 강건함을 주시고 심령이
                평안하도록
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

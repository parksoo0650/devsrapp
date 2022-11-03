import { useRouter } from 'next/router';
import useSWR from 'swr';
import Popup from 'reactjs-popup';
import Share from '../../Share';
import YouTube from 'react-youtube';
import styles from './WcConList.module.scss';
import classNames from 'classnames/bind';

const cn = classNames.bind(styles);

export default function WcConList({ weeks, dataOncontents }) {
  const router = useRouter();
  const { data: dataShorts } = useSWR('/api/contents?kind=shorts');

  const week = ['일', '월', '화', '수', '목', '금', '토'];

  const opts = {
    width: '320px',
    height: '200px',
    playerVars: {
      loop: 1,
      controls: 1,
    },
  };

  const onPlayerReady = (event) => {
    event.target.mute();
    event.target.setVolume(0);
    event.target.playVideo();
  };

  let onmCnt = 0;
  let onbCnt = 0;
  let ontCnt = 0;
  let tueCnt = 0;
  let wed1Cnt = 0;
  let wed2Cnt = 0;
  let friCnt = 0;

  return (
    <ul className={cn('con_list')}>
      {dataOncontents?.contents.map((doc, i) => {
        let dateStr = doc.publishedAt.replace(/\./g, '-');
        let dayOfWeek = week[new Date(dateStr).getDay()];

        if (dayOfWeek == weeks) {
          if (doc.subKind === 'onm' && onmCnt == 0) {
            onmCnt = onmCnt + 1;
            return (
              <li
                key={doc.id}
                onClick={() => {
                  router.push(
                    `/onprayerdetail?vid=${doc.videoId}&vtit=${doc.name}&vdate=${doc.publishedAt}&kind=${doc.subKind}`,
                    '/onprayerdetail'
                  );
                }}
              >
                <div className={cn('movie')}>
                  <img
                    style={{ width: '100%' }}
                    src={`/images/onm_main.jpeg`}
                  />
                </div>
                <div className={cn('info')}>
                  <div className={cn('tit')}>{doc.name}</div>
                  <div className={cn('date')}>{doc.publishedAt}</div>
                </div>
              </li>
            );
          }
          if (doc.subKind === 'onb' && onbCnt == 0) {
            onbCnt = onbCnt + 1;
            return (
              <li
                key={doc.id}
                onClick={() => {
                  router.push(
                    `/onbibledetail?vid=${doc.videoId}&vtit=${doc.name}&vdate=${doc.publishedAt}&kind=${doc.subKind}`,
                    '/onbibledetail'
                  );
                }}
              >
                <div className={cn('movie')}>
                  <img
                    style={{ width: '100%' }}
                    src={`https://imagedelivery.net/dnbl58MgrkUrjmB9YWa_dA/${doc.image}/public`}
                  />
                </div>
                <div className={cn('info')}>
                  <div className={cn('tit')}>{doc.name}</div>
                  <div className={cn('date')}>{doc.publishedAt}</div>
                </div>
              </li>
            );
          }
          if (doc.subKind === 'ont' && ontCnt == 0) {
            ontCnt = ontCnt + 1;
            return (
              <li
                key={doc.id}
                onClick={() => {
                  router.push(
                    `/onthreedetail?vid=${doc.videoId}&vtit=${doc.name}&vdate=${doc.publishedAt}&kind=${doc.subKind}`,
                    '/onthreedetail'
                  );
                }}
              >
                <div className={cn('movie')}>
                  <img
                    style={{ width: '100%' }}
                    src={`https://imagedelivery.net/dnbl58MgrkUrjmB9YWa_dA/${doc.image}/public`}
                  />
                </div>
                <div className={cn('info')}>
                  <div className={cn('tit')}>{doc.name}</div>
                  <div className={cn('date')}>{doc.publishedAt}</div>
                </div>
              </li>
            );
          }
          if (doc.subKind === 'tue' && tueCnt == 0) {
            tueCnt = tueCnt + 1;
            return (
              <li
                key={doc.id}
                onClick={() => {
                  router.push(
                    `/returnDetail?vid=${doc.videoId}&vtit=${doc.name}&vdate=${doc.publishedAt}&kind=${doc.subKind}`,
                    '/returnDetail'
                  );
                }}
              >
                <div className={cn('movie')}>
                  <img style={{ width: '100%' }} src={`/images/tue.jpeg`} />
                </div>
                <div className={cn('info')}>
                  <div className={cn('tit')}>{doc.name}</div>
                  <div className={cn('date')}>{doc.publishedAt}</div>
                </div>
              </li>
            );
          }
          if (doc.subKind === 'fri' && friCnt == 0) {
            friCnt = friCnt + 1;
            return (
              <li
                key={doc.id}
                onClick={() => {
                  router.push(
                    `/prayerDetail?vid=${doc.videoId}&vtit=${doc.name}&vdate=${doc.publishedAt}&kind=${doc.subKind}`,
                    '/prayerDetail'
                  );
                }}
              >
                <div className={cn('movie')}>
                  <img style={{ width: '100%' }} src={`/images/fri.jpeg`} />
                </div>
                <div className={cn('info')}>
                  <div className={cn('tit')}>{doc.name}</div>
                  <div className={cn('date')}>{doc.publishedAt}</div>
                </div>
              </li>
            );
          }
          if (doc.subKind === 'wed1' && wed1Cnt == 0) {
            wed1Cnt = wed1Cnt + 1;
            return (
              <li
                key={doc.id}
                onClick={() => {
                  router.push(
                    `/sermondetail?vid=${doc.videoId}&vtit=${doc.name}&vdate=${doc.publishedAt}&kind=wed`,
                    '/sermondetail'
                  );
                }}
              >
                <div className={cn('movie')}>
                  <img style={{ width: '100%' }} src={`/images/wed1.jpeg`} />
                </div>
                <div className={cn('info')}>
                  <div className={cn('tit')}>{doc.name}</div>
                  <div className={cn('date')}>{doc.publishedAt}</div>
                </div>
              </li>
            );
          }
          if (doc.subKind === 'wed2' && wed2Cnt == 0) {
            wed2Cnt = wed2Cnt + 1;
            return (
              <li
                key={doc.id}
                onClick={() => {
                  router.push(
                    `/prayerDetail?vid=${doc.videoId}&vtit=${doc.name}&vdate=${doc.publishedAt}&kind=wed`,
                    '/prayerDetail'
                  );
                }}
              >
                <div className={cn('movie')}>
                  <img style={{ width: '100%' }} src={`/images/wed2.jpeg`} />
                </div>
                <div className={cn('info')}>
                  <div className={cn('tit')}>{doc.name}</div>
                  <div className={cn('date')}>{doc.publishedAt}</div>
                </div>
              </li>
            );
          }
        }
      })}
      {weeks == '월' && (
        <Popup
          trigger={
            <li>
              <div className={cn('movie')}>
                <img src='/images/shorts_main.jpg' />
              </div>
              <div className={cn('info')}>
                <div className={cn('tit')}>{dataShorts?.contents[0]?.name}</div>
                <div className={cn('date')}></div>
              </div>
            </li>
          }
          modal
          nested
        >
          {(close) => (
            <div className='modal'>
              <div className='header'>
                <button className='close' onClick={close}>
                  <img src='/icons/btn_close_w.svg' alt='닫기' />
                </button>
                <Share
                  title={dataShorts?.contents[0]?.name}
                  thum={`/images/kakao_shorts.jpg`}
                  vid={dataShorts?.contents[0]?.videoId}
                  type='white'
                />
              </div>
              <div className='content'>
                <YouTube
                  videoId={dataShorts?.contents[0]?.videoId}
                  opts={opts}
                  containerClassName='iframe_wrap'
                  onReady={onPlayerReady}
                />
              </div>
            </div>
          )}
        </Popup>
      )}
    </ul>
  );
}

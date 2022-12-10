import CampHeader from '../CampHeader/CampHeader';
import classNames from 'classnames/bind';
import styles from './CampRoom.module.scss';
import ContactButton from '../../ContactButton/ContactButton';

const cn = classNames.bind(styles);

const CampRoom = ({ onClick }) => {
  return (
    <section>
      <CampHeader onClick={onClick} title='기도실(리더센터) 사용 안내' />
      <br />
      <br />

      <article className={cn('CampRoom')}>
        <h3>◎ 입퇴실 안내</h3>

        <div className={cn('box')}>
          <span>
            <p>입실</p> : 8. 3(수)
            <bold> 오후 3:00-8:00</bold>
          </span>
          <span>
            <p>퇴실</p> : 8. 6(토)
            <bold> 오전 10:00 까지</bold>
          </span>

          <ol>
            <li>리더센터 내에서는 명찰을 반드시 착용합니다.</li>
            <li>
              외출 시 반드시 에어컨을 끄고 카드키를 회수하여 <br />
              안내 데스크에 반납합니다.
            </li>
            <li>집회 시간에는 기도실에 머무르지 않습니다.</li>
            <li>실내에서는 취사할 수 없습니다.</li>
            <li>
              실내 취식은 조식만 가능하며, 조식 잔반은 각 층 <br />
              음식물 처리통에 배출 바랍니다. 남은 음식을 <br />
              변기에 버리지 마세요!
            </li>
            <li>타인의 취침에 방해되지 않도록 합니다.</li>
            <li>쓰레기는 각 층 양쪽 끝 쓰레기 분리함에 배출합니다.</li>
          </ol>
        </div>

        <h3>◎ 기도실 사용 중 문의전화</h3>
      </article>

      <ContactButton
        className={cn('Contact')}
        name='리더센터 안내 데스크'
        tel='070 - 7300 - 8115'
      />
      <ContactButton
        className={cn('Contact')}
        name='채일희 목사'
        tel='010 - 6535 - 6391'
      />
    </section>
  );
};

export default CampRoom;

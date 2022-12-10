import classNames from 'classnames/bind';
import styles from './CampShuttleCard.module.scss';

const cn = classNames.bind(styles);

const CampShuttleCard = ({ color, title, before, after }) => {
  return (
    <div className={cn('CampShuttleCard')}>
      {/* 카드 제목 */}
      <h4
        style={{
          backgroundColor: color,
        }}
      >
        {title}
      </h4>

      {/* 시작 전 section */}
      <section>
        {/* 왼쪽 시간 표시 article */}
        <article>
          <span>시작 전</span>
          <span>{before}</span>
        </article>

        {/* 오른쪽 장소 표시 article */}
        <article>
          {/* 출발 동그라미 및 장소 */}
          <div>
            <p>출발</p>
            <p>신길본당 or 신도림</p>
          </div>

          {/* 도착 동그라미 및 장소 */}
          <div>
            <p>도착</p>
            <p>센터</p>
          </div>
        </article>
      </section>

      {/* 마친 후 section*/}
      <section>
        {/* 왼쪽 시간 표시 article */}
        <article>
          <span>마친 후</span>
          <span>{after}</span>
        </article>

        {/* 오른쪽 장소 표시 article */}
        <article>
          {/* 출발 동그라미 및 장소 */}
          <div>
            <p>출발</p>
            <p>센터</p>
          </div>

          {/* 도착 동그라미 및 장소 */}
          <div>
            <p>도착</p>
            <p>신길본당 or 신도림</p>
          </div>
        </article>
      </section>
    </div>
  );
};

export default CampShuttleCard;

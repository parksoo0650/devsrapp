import CampHeader from '../CampHeader/CampHeader';
import classNames from 'classnames/bind';
import styles from './CampMeal.module.scss';

const cn = classNames.bind(styles);

const CampMeal = ({ onClick }) => {
  return (
    <div className={cn('CampMeal')}>
      {/* 안내 페이지 헤더 */}
      <CampHeader onClick={onClick} title='식당안내' />

      <nav>
        {/* 공유 버튼 */}
        <button />

        {/* 날짜 */}
        <ul>
          <li>첫째날 8. 3 (수)</li>
          <li>둘째날 8. 4 (목)</li>
          <li>셋째날 8. 5 (금)</li>
        </ul>
      </nav>

      {/* 구분선 */}
      <div className={cn('horizontalLine')} />

      <section>
        <article>
          <ul>
            <li>잡곡밥</li>
            <li>꽃게된장찌개</li>
            <li>고추장불고기</li>
            <li>계란장조림</li>
            <li>브로컬리숙회*</li>
            <li>초고추장</li>
            <li>포기김치</li>
            <li>매실쥬스</li>
          </ul>
        </article>

        <article>
          <ul>
            <li>잡곡밥</li>
            <li>꽃게된장찌개</li>
            <li>고추장불고기</li>
            <li>계란장조림</li>
            <li>브로컬리숙회*</li>
            <li>초고추장</li>
            <li>포기김치</li>
            <li>매실쥬스</li>
          </ul>
        </article>

        <article>
          <ul>
            <li>소고기콩나물밥</li>
            <li>부추양념장</li>
            <li>미역국</li>
            <li>고메떡갈비</li>
            <li>오미산적</li>
            <li>미나리무생채</li>
            <li>열무김치</li>
            <li>에이드</li>
          </ul>
        </article>

        <article>
          <ul>
            <li>잡곡밥</li>
            <li>참치김치찌개</li>
            <li>돈갈비찜</li>
            <li>소고기 잡채</li>
            <li>토마토카프레제</li>
            <li>샐러드</li>
            <li>포기김치</li>
            <li>메론</li>
          </ul>
        </article>

        <article>
          <ul>
            <li>잡곡밥</li>
            <li>북어해장국</li>
            <li>춘천식 닭갈비</li>
            <li>통살새우까스*</li>
            <li>치폴레 소스</li>
            <li>도토리묵야채무침</li>
            <li>포기김치</li>
            <li>오색경단</li>
          </ul>
        </article>

        <article>
          <ul>
            <li>백미밥</li>
            <li>"큰"만두 설렁탕</li>
            <li>오징어불곡</li>
            <li>궁중고기말이조림</li>
            <li>취나물들기름볶음</li>
            <li>섞박지</li>
            <li>두유</li>
          </ul>
        </article>
      </section>
    </div>
  );
};

export default CampMeal;

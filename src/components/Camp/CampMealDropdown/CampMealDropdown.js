import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './CampMealDropdown.module.scss';

const cn = classNames.bind(styles);

const CampMealDropdown = ({ time, menu }) => {
  const [toggle, setToggle] = useState(false);

  const onClick = () => {
    setToggle(() => !toggle);
  };

  return (
    <>
      <div>
        <h4>{time.text}</h4>
        <span>{time.description}</span>
      </div>

      <section className={cn('CampMealDropdown')} onClick={onClick}>
        <article>
          <h4>베대원 매점(2호점)의 조식서비스</h4>

          {/* 드롭다운 아이콘 */}
          <div className={cn('arrowIcon')} />

          {/* 내용 */}
          <span>
            <p>장소</p>
            <p>리더센터 1층 로비</p>
            <p>운영 품목</p>
            <ul>
              <li>{menu} + 아아 &amp; 딸기라떼</li>
              <li>아이들의 위한 조식세트</li>
              <li>미정</li>
            </ul>
          </span>
        </article>
      </section>
    </>
  );
};

export default CampMealDropdown;

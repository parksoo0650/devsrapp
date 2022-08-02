import classNames from 'classnames/bind';
import styles from './BannerAndNotice.module.scss';

const cn = classNames.bind(styles);

const BannerAndNotice = () => {
  return (
    <>
      <div className={cn('MainBanner')}>
        <span>교회와 함께</span>

        <h1>
          사랑과 겸손으로 <br />
          행복한 성락인
        </h1>
      </div>

      <div className={cn('Notice')}>
        <h2>2022 여름수련회</h2>
        <span>세계센터 대성전에서 만나요~!</span>

        {/* 수정 바랍니다. */}
        <p>1/5 전체보기</p>
      </div>
    </>
  );
};

export default BannerAndNotice;

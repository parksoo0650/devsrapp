import classNames from 'classnames/bind';
import styles from './BannerAndNotice.module.scss';

const cn = classNames.bind(styles);

const BannerAndNotice = () => {
  return (
    <>
      <div className={cn('MainBanner')}>
        <span>성락교회 여름 수련회</span>

        <h1>
          사랑과 겸손으로 <br />
          행복한 성락인
        </h1>
      </div>

      <div className={cn('Notice')}>
        <h2>공지제목</h2>
        <span>공지입니다</span>
      </div>
    </>
  );
};

export default BannerAndNotice;

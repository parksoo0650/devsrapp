import { useRouter } from 'next/router';
import styles from './QuickMenuItem.module.scss';
import classNames from 'classnames/bind';

const cn = classNames.bind(styles);

const QuickMenuItem = ({ pathname, imgSrc, title }) => {
  const router = useRouter();

  return (
    <li
      className={cn('QuickMenuList')}
      // 메뉴를 클릭하면 pathname 페이지로 이동
      onClick={() => {
        router.push(pathname);
      }}
    >
      {/* 메뉴 아이콘 이미지 소스 & 대체 텍스트 */}
      <div className={cn('img')}>
        <img src={imgSrc} alt={title} />
      </div>

      {/* 메뉴 제목 */}
      <div className={cn('txt')}>{title}</div>
    </li>
  );
};

export default QuickMenuItem;

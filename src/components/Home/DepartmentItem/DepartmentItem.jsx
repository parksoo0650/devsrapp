import Link from 'next/link';
import Image from 'next/image';

import styles from './DepartmentItem.module.scss';
import classNames from 'classnames/bind';

const cn = classNames.bind(styles);

const DepartmentItem = ({ href, imgSrc, title }) => {
  return (
    <Link href={href}>
      <a>
        {/* 이미지 소스 % 대체 텍스트 */}
        <div className={cn('img')}>
          <Image
            src={imgSrc}
            alt={title}
            width='100%'
            height='100%'
            // layout='fill'
          />
        </div>

        {/* 부서 이름 */}
        <div className={cn('txt')}>{title}</div>
      </a>
    </Link>
  );
};

export default DepartmentItem;

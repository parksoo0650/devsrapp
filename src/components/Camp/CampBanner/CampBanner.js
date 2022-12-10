import classNames from 'classnames/bind';
import styles from './CampBanner.module.scss';
import Link from 'next/link';

const cn = classNames.bind(styles);

const CampBanner = () => {
  return (
    <Link href='/2022-summer-camp'>
      <a>
        <div className={cn('CampBanner')} />
      </a>
    </Link>
  );
}

export default CampBanner;

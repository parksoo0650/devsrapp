import classNames from 'classnames/bind';
import styles from './CampBanner.module.scss';

const cn = classNames.bind(styles);

const CampBanner = () => {
  return <div className={cn('CampBanner')} />;
};

export default CampBanner;

import classNames from 'classnames/bind';
import styles from './SectionContainer.module.scss';

const cn = classNames.bind(styles);

const SectionContainer = ({ children }) => {
  return <div className={cn('SectionContainer')}>{children}</div>;
};

export default SectionContainer;

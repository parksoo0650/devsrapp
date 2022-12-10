import classNames from 'classnames/bind';
import styles from './CampMapItem.module.scss';

const cn = classNames.bind(styles);

const CampMapItem = ({ number, color, title }) => {
  return (
    <li className={cn('CampMapItem')}>
      <span className={cn(color)}>{number}</span>
      <span>{title}</span>
    </li>
  );
};

export default CampMapItem;

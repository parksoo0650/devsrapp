import classNames from 'classnames/bind';
import styles from './CampHeader.module.scss';

const cn = classNames.bind(styles);

const CampHeader = ({ title, onClick }) => {
  return (
    <div className={cn('CampHeader')}>
      <span>
        <button onClick={onClick} />
        <h3>{title}</h3>
      </span>
    </div>
  );
};

export default CampHeader;

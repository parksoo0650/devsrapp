import classNames from 'classnames/bind';
import styles from './CampMenu.module.scss';

const cn = classNames.bind(styles);

const CampMenu = ({ id, title, onClick }) => {
  return (
    <div onClick={onClick} id={id} className={cn('CampMenu')}>
      {title}

      <div className='camp-home-menu-icon' />
    </div>
  );
};

export default CampMenu;

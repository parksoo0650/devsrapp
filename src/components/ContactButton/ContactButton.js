import classNames from 'classnames/bind';
import styles from './ContactButton.module.scss';

const cn = classNames.bind(styles);

const ContactButton = ({ name, tel }) => {
  return (
    <div className={cn('ContactButton')}>
      <p>
        <span>{name}</span>
        <span>{tel}</span>
      </p>

      <p className={cn('phoneIcon')} />
    </div>
  );
};

export default ContactButton;

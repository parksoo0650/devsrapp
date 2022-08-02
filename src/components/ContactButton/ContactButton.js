import classNames from 'classnames/bind';
import styles from './ContactButton.module.scss';

const cn = classNames.bind(styles);

const ContactButton = ({ name, tel }) => {
  return (
    <a className={cn('ContactButton')} href={`tel:${tel}`}>
      <p>
        <span>{name}</span>
        <span>{tel}</span>
      </p>

      <p className={cn('phoneIcon')} />
    </a>
  );
};

export default ContactButton;

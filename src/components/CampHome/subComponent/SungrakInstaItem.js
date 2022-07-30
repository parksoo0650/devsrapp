import classNames from 'classnames/bind';
import styles from './SungrakInstaItem.module.scss';

const cn = classNames.bind(styles);

const SungrakInstaItem = ({ author, preview }) => {
  return (
    <article className={cn('SungrakInstaItem')}>
      <div className={cn('image')} />

      <p>
        <div className={cn('author')}>{author}</div>
        <div className={cn('preview')}>{preview}</div>
      </p>
    </article>
  );
};

export default SungrakInstaItem;

import classNames from 'classnames/bind';
import styles from './AskingItem.module.scss';

const cn = classNames.bind(styles);

const AskingItem = ({ preview, author }) => {
  return (
    <article className={cn('AskingItem')}>
      <div className={cn('tag')}>궁금해요</div>

      <div className={cn('flexBox')}>
        <div className={cn('textArea')}>
          <div className={cn('preview')}>{preview}</div>
          <div className={cn('author')}>{author}</div>
        </div>

        <div className={cn('image')} />
      </div>
    </article>
  );
};

export default AskingItem;

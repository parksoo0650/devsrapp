import classNames from 'classnames/bind';
import { useRouter } from 'next/router';
import styles from './CampHeader.module.scss';

const cn = classNames.bind(styles);

const CampHeader = ({ title }) => {
  const router = useRouter();

  const onClick = () => {
    router.push('/2022-summer-camp/program');
  };

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

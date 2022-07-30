import classNames from 'classnames/bind';
import styles from './CampToggle.module.scss';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

const cn = classNames.bind(styles);

const CampToggle = () => {
  const router = useRouter();

  const goToCamp = () => {
    router.push('/2022-summer-camp');
  };

  const goToHome = () => {
    router.push('/');
  };

  useEffect(() => {
    const campActivated = document.querySelector('.CampActivated');
    if (campActivated) {
      campActivated.style.backgroundColor = '#313131';
      campActivated.style.borderRadius = '20px 20px 0 0';
      campActivated.style.color = 'white';
    }

    const homeActivated = document.querySelector('.HomeActivated');
    if (homeActivated) {
      homeActivated.style.backgroundColor = '#313131';
      homeActivated.style.borderRadius = '0 0 20px 20px';
      homeActivated.style.color = 'white';
    }
  }, [router]);

  return (
    <section className={cn('CampToggle')}>
      <div
        onClick={goToCamp}
        className={
          router.pathname === '/2022-summer-camp' ? 'CampActivated' : 'null'
        }
      >
        수련회
      </div>

      <div
        onClick={goToHome}
        className={router.pathname === '/' ? 'HomeActivated' : 'null'}
      >
        성락홈
      </div>
    </section>
  );
};

export default CampToggle;

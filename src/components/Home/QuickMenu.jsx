import QuickMenuItem from './QuickMenuItem/QuickMenuItem';

const QuickMenu = () => {
  return (
    <div className='bg-[#f8f8f8] pt-[40px] px-[24px] pb-[22px]'>
      {/* <div className='title'>빠른접근</div> */}

      <ul>
        <QuickMenuItem
          pathname='/sermonmain'
          imgSrc='/icons/ico_sermon_new.svg'
          title='예배'
        />

        <QuickMenuItem
          pathname='/praisemain'
          imgSrc='/icons/ico_quick_praise_new.svg'
          title='찬양'
        />

        <QuickMenuItem
          pathname='/returnMain'
          imgSrc='/icons/ico_return.svg'
          title='환언특강'
        />

        <QuickMenuItem
          pathname='/onmain'
          imgSrc='/icons/ico_quick_onseries.svg'
          title='온시리즈'
        />

        <QuickMenuItem
          pathname='/faith'
          imgSrc='/icons/ico_shorts.svg'
          title='1분은혜'
        />

        <QuickMenuItem
          pathname='/weekly'
          imgSrc='/icons/ico_quick_weekly2.svg'
          title='주보'
        />

        {/* <QuickMenuItem pathname='/' imgSrc='' title='교회소식' /> */}

        <QuickMenuItem
          pathname='/offering'
          imgSrc='/icons/ico_quick_offering.svg'
          title='헌금안내'
        />

        <QuickMenuItem
          pathname='/2022-summer-camp'
          imgSrc='/icons/ico_quick_camp2.svg'
          title='2022 수련회'
        />
      </ul>
      {/* end of quick_menu */}
    </div>
  );
};

export default QuickMenu;
